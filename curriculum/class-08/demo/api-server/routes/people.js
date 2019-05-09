'use strict';

const express = require('express');

const People = require('../models/people-model.js');

const people = new People();
const router = express.Router();

router.get('/people', getPeople);
router.post('/people', addPerson);

function getPeople(req,res,next) {
  people.get()
    .then( data => {
      res.status(200).json(data);
    })
    .catch(next);
}

function addPerson(req,res,next) {
  console.log('BODY', req.body);
  people.post(req.body)
    .then( data => {
      res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;
