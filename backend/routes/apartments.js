
const router = require('express').Router();
let Apartment = require('../models/apartments.model');

router.route('/').get((req, res) => {
    Apartment.find()
    .then(apartment => res.json(apartment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const streetName = req.body.streetName;
    const numOfRooms = req.body.numOfRooms;
    const floor = req.body.floor;
    const size = req.body.size;
    const city = req.body.city;
    const price = req.body.price;
    const description = req.body.description;
    const featured = req.body.featured;
    const iframeSrc =  req.body.iframeSrc;
    const frontImgSrc = req.body.frontImgSrc;

  const newApartment = new Apartment({streetName,city,numOfRooms,floor,size,price,description,numOfRooms,featured,iframeSrc,frontImgSrc});

  newApartment.save()
    .then(() => res.json('Apartment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;