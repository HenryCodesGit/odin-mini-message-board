var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' ,
    messages,
  });
});

router.get('/new', function(req, res, next) {
  res.render('form', { 
    title: 'New Message' ,
  });
});

router.post('/new', function(req, res, next){
  messages.push({
    text: req.body.text,
    user: req.body.name,
    added: new Date(Date.now())
  });

  res.redirect('/');
})

module.exports = router;
