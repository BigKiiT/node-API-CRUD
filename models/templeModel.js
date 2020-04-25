const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  no: { type : String }, 
  name: { type : String },
  province: { type : String },
  latitude: { type : String },
  longitude: { type : String }
  },{
    collection: 'unseenth'
});

const Temple = mongoose.model('Unseenth', Schema);

module.exports = Temple;