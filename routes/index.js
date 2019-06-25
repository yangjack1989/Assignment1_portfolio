var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// get about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'my about page' });
});
// // create projets object
// const projects=[{
// "name":"card game",
// "url":""
// },{

// }]
//get projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'my project page' });
});
//get service page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'my serivces page' });
});
// get contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'my contact page' });
});

module.exports = router;
