var express = require('express');
var router = express.Router();

var Datastore = require('nedb');
var db = new Datastore();

router.get('/', function(req, res) {
  db.find({}).sort({date: -1}).exec((err, docs) => {
    res.json(docs);
  })
});

router.post('/', function(req, res) {
  req.body.date = new Date();
  db.insert(req.body, (err, newDoc) => {
    res.json(newDoc);
  })
});

router.delete('/:id', function(req, res) {
  console.log(req.params.id);
  db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
    if (numRemoved === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
});

module.exports = router;
