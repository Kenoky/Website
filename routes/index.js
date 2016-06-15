var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Accueil - Margaux Lapierre' });
});

router.get('/presentation', function(req, res, next) {
  res.render('presentation', { title: 'Présentation - Margaux Lapierre' });
});

router.get('/methodes', function(req, res, next) {
  res.render('methodes', { title: 'Méthodes - Margaux Lapierre' });
});

router.get('/travaux', function(req, res, next) {
  res.render('travaux', { title: 'Travaux - Margaux Lapierre' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - Margaux Lapierre' });
});

module.exports = router;
