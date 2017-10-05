require("./connection");
User = require("./models/user");

// Get a user, then Delete
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
    if (err) throw err;
  
    // delete him
    user.remove(function(err) {
      if (err) throw err;
  
      console.log('User successfully deleted!');
    });
});

// Find and Delete
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
});

// find by ID and delete
// find the user with id 4
User.findByIdAndRemove(4, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });