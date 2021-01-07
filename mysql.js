var express = require('express');
var router = express.Router();
const connection = require('../plugins/mysql')

router.get('/', async function(req, res) {
  try {
    var result = new Promise((res, rej) => {
      connection.query(`SELECT content FROM news`, (err, results, fields) => {
        if (err) return rej(err)
        
        res(results)
      })
    })

    res.send({
      message: await result
    })
  } catch (error) {
    res.send({
      message: await result
    })
  }
});

module.exports = router;