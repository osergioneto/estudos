const mongoose = require('mongoose');
const storeModel = require('../models/Store');
const Store = mongoose.model('Store');

exports.homePage = ((req, res) => {
    res.render('index');
});

exports.addStore = ((req, res) => {
    res.render('editStore', { title: 'Add Store'});
});

exports.createStore = async (req, res) => {
    try {
        const store = await (new Store(req.body)).save();
        req.flash('success', `Succefully Created ${store.name}. Care to leave a review? `);
        res.redirect(`/stores/${store.slugs}`);
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
    const store = await Store.findOneAndUpdate( { _id:req.params.id}, req.body, {
        new: true,
        runValidators:true
    }).exec();
    req.flash('success', `Succefully updated <strong>${store.name}</strong>. <a href="/stores/${store.slugs}">View changes -></a>`);
    res.redirect(`/stores/${store._id}/edit`);
}