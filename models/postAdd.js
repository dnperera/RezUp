// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostAdd = new Schema({
  userId:{
    type: String
  },

  venueName: {
    type: String,
    trim: true,
    required: "venueName is Required"
  },
  // email: a string that must match an email format and must be unique in the collection
  email: {
    type: String,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  // userCreated: the current date
  venueType: {
    type: String,
    
  },
  occupancy: {
    type: String,
    
  },
    amenities: [{
    type: String
}],
  description:{
    
    type: String,
  },
   address: {
    type: String,
    
  },
  city: {
    type: String,
    
  },
  state: {
    type: String,
    
  },
  postal: {
    type: String,
    
  },
  country: {
    type: String,
    
  },
    
  date: {
    type: String,
    
  },

  days:{
   type: String,
  },

  time: [{
    type: String
}],
  price: {
    type: String,
  }
  ,
  images: [{
    type: String
}]
  
});

// Create the Model
var PostAdd = mongoose.model('postAdd', PostAdd);

// Export it for use elsewhere
module.exports = PostAdd;