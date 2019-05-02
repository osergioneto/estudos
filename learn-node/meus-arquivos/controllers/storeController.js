const mongoose = require('mongoose');
const storeModel = require('../models/Store');
const Store = mongoose.model('Store');
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
        const store = await Store.findOne( { slugs: req.params.slugs });
        res.render('store', { title: `Store: ${store.name}`, store });
    } catch (error) {
        res.send('Store not found');
    }
    
}