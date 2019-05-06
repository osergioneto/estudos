const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const crypto = require('crypto');
const promisify = require('es6-promisify');

exports.login = passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: 'Failed Login!',
    successRedirect: '/',
    successFlash: 'You are now logged in'
});

exports.logout = (req, res) => {
    req.logout();
    req.flash('success', 'You are now logged out');
    res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
        return;
    }
    req.flash('error', 'Oops. You must be looged in to do that!');
    res.redirect('/login');
}

exports.forgot = async (req, res) => {
    try {
        // 1. Verifica se o email existe
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            req.flash('error', 'This account don\'t exists');
            return res.redirect('/login');
        }
        // 2. Reseta o token e validade do token
        user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordExpires = Date.now() + 3600000;
        await user.save();
        // 3. Enviar email com token
        const resetURL = `https://${req.headers.host}/account/reset/${user.resetPasswordToken}`;
        req.flash('success', `You were emailed with a link to reset you password. ${resetURL}`);
        // 4. Redirect para o login
        res.redirect('/login')
    } catch (error) {
        console.log(error);
    }
}

exports.reset = async (req, res) => {
    try {
        const user = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        });
        if(!user){
            req.flash('error', 'Password reset is invalid or has expired');
            return res.redirect('/login');
        }
        res.render('reset', { title: 'Reset your password'});
    } catch (error) {
        console.log(error);
    }
}

exports.confirmPassword = (req, res, next) => {
    try {
        console.log('Confirm Password()');
        if(req.body.password === req.body['password-confirm']){
            next();
            return;
        }
        req.flash('error', 'Passwords dont match');
        res.redirect('/login');
    } catch (error) {
        console.log(error);
    }
}

exports.update = async (req, res) => {
    try {
        console.log('update()');
        const user = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        });
        if(!user){
            req.flash('error', 'Password reset is invalid or has expired');
            return res.redirect('/login');
        }

        const setPassword = promisify(user.setPassword, user);
        await setPassword(req.body.password);
        user.resetPasswordExpires = undefined;
        user.resetPasswordToken = undefined;
        const updateUser = await user.save();

        await req.login(updateUser);
        req.flash('success', 'Password changed successfully!');
        res.redirect('/');

    } catch (error) {
        console.log(error);
    }
}