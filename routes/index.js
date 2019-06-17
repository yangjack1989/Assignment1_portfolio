var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'my about page' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'my project page' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'my serivces page' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'my contact page' });
});

module.exports = router;
