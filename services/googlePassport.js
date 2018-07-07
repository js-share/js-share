const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// set up postgres pool
const {Pool} = require('pg');
const pool = new Pool();

// serialize user into user id

// TO FIX!!!
passport.serializeUser((user, done) => {
  done(
    null,
    user.id /* mongodb id: allows us to store data from google, facebook, etc. in one collection */
  );
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
    
    db.query('select user_id from users where user_id = $1', [user_id], (err, result) => {
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
    // async (accessToken, refreshToken, profile, done) => {
    //   // change from mongo to sql
    //   // const existingUser = await User.findOne({ googleId: profile.id });
    // 
    //   if (existingUser) {
    //     // we already have a record with the given profile
    //     return done(null, existingUser);
    //   }
    // 
    //   // we don't have a user record with this ID, make one
    // 
    //   // change from mongo to sql
    //   // const user = await new User({ googleId: profile.id }).save();
    //   done(null, user);
    // }
    (accessToken, refreshToken, profile, done) => {
      
    }
  )
);

