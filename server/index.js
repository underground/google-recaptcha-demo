var express = require('express');
var router = express.Router();
var recaptcha = require('express-recaptcha');

recaptcha.init(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY);

router.get('/', function(req, res){
  res.render('login', {
    siteKey: process.env.RECAPTCHA_SITE_KEY,
    captcha: recaptcha.render()
  });
});
router.post('/', function(req, res) {
  recaptcha.verify(req, function(error) {
    if (!error) {
      res.render('template');
    } else {
      res.render('login', {
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        captcha: recaptcha.render()
      });
    }
  })
});

module.exports = router;
