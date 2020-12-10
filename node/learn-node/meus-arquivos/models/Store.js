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

storeSchema.statics.getTopStores = function() {
    return this.aggregate([
        // Pegar as stores e popular os reviews
        { $lookup: { from: 'reviews', localField: '_id', foreignField: 'store', as: 'reviews' }},
        // filtrar apenas os items que tem mais de 1 review
        { $match: { 'reviews.1': { $exists: true } }},      
        // Adicionando o campo reviews
        { $project: { 
            photo: '$$ROOT.photo',
            name: '$$ROOT.name',
            reviews: '$$ROOT.reviews',
            slugs: '$$ROOT.slugs',
            averageRating: { $avg: '$reviews.rating' }}
        },
        // ordenando pela quantidade de reviews
        { $sort: { averageRating: -1 }},
        // Limitando a 10 resultados
        { $limit: 10 }
    ]);
}

storeSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'store'
});

function autopopulate(next) {
    this.populate('reviews');
    next();
}

storeSchema.pre('find', autopopulate);
storeSchema.pre('findOne', autopopulate);

module.exports = mongoose.model('Store', storeSchema)