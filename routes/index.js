var express = require('express');
var router = express.Router();
var model = require('../models');

var Place = model.Place;
var Hotel = model.Hotel;
var ThingToDo = model.ThingToDo;
var Restaurant = model.Restaurant;


/* GET home page. */
router.get('/', function(req, res, next) {
	Hotel.find({}, function(err, hotels) {
		Restaurant.find({}, function(err, restaurants) {
			ThingToDo.find({}, function(err, thingstodo) {
				res.render('index', {
					all_hotels: hotels,
					all_restaurants: restaurants,
					all_thingstodo: thingstodo
				});
			});
		});
	});
});

module.exports = router;
