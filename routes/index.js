var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// get about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'my about page' });
});

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
// post email
router.post('/contact', (req, res) => {
  res.render('contact', {
    data: req.body, // form data
    errors: {
      message: {
        msg: 'A message is required'
      },
      email: {
        msg: 'That email doesn‘t look right'
      }
    }
  })
})

module.exports = router;
