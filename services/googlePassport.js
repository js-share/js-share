const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function(pool) {
  // serialize user into user id
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // deserialize user from user id when attempting to authorize requests with a cookie
  passport.deserializeUser((id, done) => {
    // set up a client from the pool, and make a query using that client
    console.log('starting deserialize user');
    
    const queryText = 'select * from users where id = $1';
    
    pool.query(queryText, [id]).then(result => {
      const user = result.rows[0];
      console.log('deserialize main result: ');
      console.log(user.id);
      
      // passport deserialize complete
      done(null, user);
    }).catch(err => {
      if (err) throw new Error(err);
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
      (accessToken, refreshToken, profile, done) => {
        // upsert the profile id, name (screen name), and primary email
        const id = profile.id;
        const name = profile.displayName;
        const email = profile.emails[0].value;
        
        const queryText = 'insert into users (id, name, email) ' +
        'values ($1, $2, $3) ' +
        'on conflict (id) do update set name=$2, email=$3 ' +
        'returning *';
        
        pool.query(queryText, [id, name, email]).then(result => {
          console.log(result.rows);
          
          const user = result.rows[0];
          console.log('google auth:');
          console.log(user.id);
          
          // passport deserialize complete
          done(null, user);
        }).catch(err => {
          if (err) throw new Error(err);
        });
      }
    )
  );
};


