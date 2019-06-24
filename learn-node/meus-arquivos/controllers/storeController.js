const mongoose = require('mongoose');
const storeModel = require('../models/Store');
const Store = mongoose.model('Store');
const User = mongoose.model('User');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req, file, next){
        const isPhoto = file.mimetype.startsWith('image/');
        if(isPhoto){
            next(null, true)
        } else {
            next({ message: `That filetype ins't allowed!`}, false);
        }
    }
};

exports.homePage = ((req, res) => {
    res.render('index');
});

exports.addStore = ((req, res) => {
    res.render('editStore', { title: 'Add Store'});
});

exports.upload = multer(multerOptions).single('photo'); 

exports.resize = async (req, res, next) => {
    try {
        if(!req.file){
            next();
            return;
        }
        const extension = req.file.mimetype.split('/')[1];
        req.body.photo = `${uuid.v4()}.${extension}`; // Adicionando foto com nome melhorado ao req
        const photo = await jimp.read(req.file.buffer); // Pegando foto do buffer
        await photo.resize(800, jimp.AUTO); // Alterando o tamanho da foto
        await photo.write(`./public/uploads/${req.body.photo}`);
        next();
    } catch (err){
        console.log(err);
    }
    
}


exports.createStore = async (req, res) => {
    try {
        req.body.author = req.user._id;
        const store = await (new Store(req.body)).save();
        req.flash('success', `Succefully Created ${store.name}. Care to leave a review? `);
        res.redirect(`/store/${store.slugs}`);
    } 
    catch(err) {
        console.error(err);
    }
};

exports.getStores = async (req, res) => {
    const stores = await Store.find();
    res.render('stores', { title: 'Stores', stores});
}

exports.editStore = async (req, res) => {
    const store = await Store.findOne({ _id:req.params.id });
    confirmOwner(store, req.user);
    res.render('editStore', { title: `Edit ${store.name}`, store });
}

exports.updateStore = async (req, res) => {
    req.body.location.type = 'Point';
    const store = await Store.findOneAndUpdate( { _id:req.params.id}, req.body, {
        new: true,
        runValidators:true
    }).exec();
    req.flash('success', `Succefully updated <strong>${store.name}</strong>. <a href="/stores/${store.slugs}">View changes -></a>`);
    res.redirect(`/stores/${store._id}/edit`);
}

exports.getStoreBySlug = async (req, res) => {
    try {
        const store = await Store.findOne( { slugs: req.params.slugs }).populate('author reviews');
        res.render('store', { title: `Store: ${store.name}`, store });
    } catch (error) {
        res.send('Store not found');
    }   
}

exports.getStoresByTag = async (req, res) => {
    try {
        const tag = req.params.tag;
        const tagQuery = tag || { $exists: true };
        const tagsPromise = Store.getTagsList();
        const storesPromies = Store.find({ tags: tagQuery});
        const [tags, store] = await Promise.all([tagsPromise, storesPromies]);

        res.render('tag', { tags, title: `Tag` , tag, store });
    } catch (error) {
        console.log(error);
    }
}

const confirmOwner = (store, user) => {
    if(!store.author.equals(user._id)){
        throw Error('You must own a store to edit');
    }
}

exports.searchStores = async (req, res) => {
    try {
        const stores = await Store
            .find({
                $text: {
                    $search: req.query.q
                }
            }, {
                score: { $meta: 'textScore' }
            })
            .sort({
                score: { $meta: 'textScore' }
            })
            .limit(5);

        res.json(stores);
    } catch (error) {
        console.log(error);
    }
}

exports.mapStores = async (req, res) => {
    try {
        const coordinates = [req.query.lng, req.query.lat].map(parseFloat);
        const q = {
            location: {
                $near:{
                    $geometry: {
                        type: 'Point',
                        coordinates
                    },
                    $maxDistance: 10000
                }
            }
        }

        const stores = await Store.find(q).select('slug name description location');
        res.json(stores);
    } catch (error) {
        console.log(error);
    }
}

exports.mapPage = (req, res) => {
    res.render('map', { title: 'Map' });
}

exports.heartStore = async (req, res) => {
    const hearts = req.user.hearts.map(obj => obj.toString());
    const operator = hearts.includes(req.params.id) ? '$pull' : '$addToSet';
    const user = await User
    .findByIdAndUpdate(req.user_id,
        { [operator]: { hearts: req.params.id }},
        { new: true }
    ); 
    res.json(user);
}

exports.getHearts = async (req, res) => {
    try {
        const stores = await Store.find({
            _id: { $in: req.user.hearts }
        });
        res.render('stores', { title: 'Hearted Stores', stores });
    } catch (error) {
        
    }
}

exports.getTopStores = async (req, res) => {
    const stores = await Store.getTopStores();
    res.render('topStores', { stores, title: '⭐ Top Stores!'});
}