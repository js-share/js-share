const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(pool) {
  // serialize user into user id
  passport.serializeUser((user_id, done) => {
    done(null, user_id);
  });

  // deserialize user from user id when attempting to authorize requests with a cookie
  passport.deserializeUser((user_id, done) => {
    // change from mongo to sql
    // set up a client from the pool, and make a query using that client
    
    // User.findById(id).then(user => {
    //   done(null, user);
    // });
    
    pool.connect(process.env.pgURI, (err, db) => {
      if (err) throw new Error(err);
      
      console.log('starting deserialize user');
      
      db.query('select user_id from users where user_id = $1', [user_id]).then((err, result) => {
        if (err) throw new Error(err);
        
        console.log('deserialize successful');
        
        // close database connection.
        db.end();
      });
    });
    
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
        callbackURL: '/auth/google/callback', // redirect after user grants permission
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
      
        if (existingUser) {
          // we already have a record with the given profile
          return done(null, existingUser);
        }
      
        // we don't have a user record with this ID, make one
      
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
      // (accessToken, refreshToken, profile, done) => {
      // 
      // }
    )
  );
};

