var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/furniture', function(req, res, next) {
  res.render('furniture', { title: 'Search Results - Furniture ' });
});

module.exports = router;
