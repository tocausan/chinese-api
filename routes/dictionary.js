var express = require('express');
var router = express.Router();
var parser = require('../services/parser');

// dictionary
router.get('/', (req, res, next) => {
    var dictionaryPath = process.env.PWD + '/data/dictionary/chinese-cedict_ts.u8.txt';
    parser.readFileUtf8(dictionaryPath).then((rawData) => {
        parser.chineseEdictU8(rawData).then((parsedData)=> {
            res.set({'content-type': 'application/json; charset=utf-8'});
            res.json(parsedData)}, (err) => {
            console.log(err);
        })
    });
});

module.exports = router;