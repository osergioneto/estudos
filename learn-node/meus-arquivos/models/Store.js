const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Please enter a store name!'
    },
    slugs: String,
    description: {
        type: String,
        trim: true
    },
    tags: [String],
    created: {
        type: Date,
        default: Date.now()
    },
    location: {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [{
            type: Number,
            required: 'You must supply cordinates!'
        }],
        address: {
            type: String,
            required: 'You must supply an address!'
        }
    }, 
    photo: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'You must supply an author'
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// Definindo indices
/*
storeSchema.index({
	name: 'text',
	description: 'text'
});
*/

storeSchema.index({ location: '2dsphere' });
	
storeSchema.pre('save', async function(next){
    if(!this.isModified('name')){
        next();
        return;
    }
    this.slugs = slug(this.name);
    // encontra stores que contem a url com um nome já criado. ex.: wes, wes-1, wes-2...
    const slugRegEx = new RegExp(`^(${this.slugs})((-[0-9]*$)?)$`, 'i');
    const storesWithSlug = await this.constructor.find({ slugs: slugRegEx });
    if(storesWithSlug){
        this.slugs = `${this.slugs}-${storesWithSlug.length + 1}`;
    }
    next()
});

storeSchema.statics.getTagsList = function() {
    return this.aggregate([
        { $unwind: '$tags' },
        { $group: { _id: '$tags', count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]);
}

storeSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'store'
});

module.exports = mongoose.model('Store', storeSchema)