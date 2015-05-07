var LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport, User) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.find({where: {id: id}}).then(function (user) {
            //{id: 123321, username: 'liu qingyu', password: '12412312312312312'}
            done(null, user.dataValues);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        process.nextTick(function () {
            User.find({where: {username: email}}).then(function (user) {
                //if (err)
                //    return done(err);

                if (user) {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                }
                else {
                    var hashedPassword = User.generateHash(password);
                    User.create({username: email, password: hashedPassword}).then(function (newUser) {
                        return done(null, newUser.dataValues);
                    });
                }
            });
        });
    }));

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, email, password, done) {
        User.find({where: {username: email}}).then(function (user) {
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            if (!User.build(user.dataValues).validPassword(password)) {
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
            }
            else return done(null, user.dataValues);
        });
    }));
};