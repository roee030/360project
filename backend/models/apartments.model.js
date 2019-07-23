const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  id: {type: String, required: true },
  numOfRooms: { type: Number, required: true },
  floor: {type: String, required: true},
  size: {type: Number, require: true},
  price: {type: Number, required:true},
  description: { type: String, required: true }
}, {
  timestamps: true,
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;