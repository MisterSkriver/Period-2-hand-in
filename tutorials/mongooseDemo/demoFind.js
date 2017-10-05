require("./connection");
User = require("./models/user");

// get all the users
User.find({}, function(err, users) {
    if (err) throw err;
  
    // object of all the users
    console.log(users);
  });

  // get the user sevilayha
User.find({ username: 'sevilayha' }, function(err, user) {
    if (err) throw err;
  
    // object of the user
    console.log(user);
  });

  // get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});