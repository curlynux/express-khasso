var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('a-propos', {
    title: 'à propos'
  });
});

module.exports = router;
