'use strict';

const express = require('express');

const router = express.Router();

router.get('/my/stuff', getMyStuff);

function getMyStuff(req,res,next) {
  res.status(200).send('Get off my lawn!');
}

module.exports = router;
