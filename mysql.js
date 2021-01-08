var express = require('express');
var router = express.Router();
const db = require('../plugins/mysql')

router.get('/', async function(req, res) {
  try {
    var one = await db.query(`SELECT content FROM news`)
    var two = await db.query(`SELECT status FROM news`)


    res.send({
      one: one,
      two: two
    })
  } catch (error) {
    res.send({
      error: error
    })
  }
});

module.exports = router;