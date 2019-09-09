const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
  streetName: {type: String , require:true},
  city: {type: String, required: true },
  numOfRooms: { type: Number, required: true },
  floor: {type: String, required: true},
  size: {type: Number, require: true},
  price: {type: Number, required:true},
  featured: {type: Boolean , required: true , default:false},
  description: { type: String, required: true },
  iframeSrc: {type: String, required: true},
  frontImgSrc: {type: String, required: true}
}, {
  timestamps: true,
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

module.exports = Apartment;