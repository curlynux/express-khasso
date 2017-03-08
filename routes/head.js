var express = require('express');
var router = express.Router();

router.get('/head', function(req, res, next) {
  router.render('head');
});

module.exports = router;
