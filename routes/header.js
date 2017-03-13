var express = require('express');
var router = express.Router();

router.get('/header', (req, res, next) => {
  res.render('header');
});

module.exports = router;
