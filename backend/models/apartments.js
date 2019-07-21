const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  numOfRooms: { type: int, required: true },
  floor: {type: String, required: true},
  size: {type: int, require: true},
  price: {trype:int, required:true},
  description: { type: String, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;