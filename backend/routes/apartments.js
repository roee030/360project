
const router = require('express').Router();
let Apartment = require('../models/apartments.model');

router.route('/').get((req, res) => {
    Apartment.find()
    .then(apartment => res.json(apartment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const id = req.body.id;
    const numOfRooms = req.body.numOfRooms;
    const floor = req.body.floor;
    const size = req.body.size;
    const price = req.body.price;
    const description = req.body.description;

  const newApartment = new Apartment({id,numOfRooms,floor,size,price,description});

  newApartment.save()
    .then(() => res.json('Apartment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;