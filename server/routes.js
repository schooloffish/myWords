var path=require('path');

function getFullPath(subPath){
    return path.join(__dirname,subPath);
}

module.exports = function (app, passport) {
    app.get('/', function (req, res) {
        res.render(getFullPath('../client/app/index.ejs'));
    });
    app.get('/login', function (req, res) {
        res.render(getFullPath('../client/app/login.ejs'), {message: req.flash('loginMessage')});
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signup', function (req, res) {
        res.render(getFullPath('../client/app/signup.ejs'), {message: req.flash('signupMessage')});
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }));

    app.get('/profile', isLoggedIn, function (req, res) {
        res.render(getFullPath('../client/app/profile.ejs'));
    });

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/');
}