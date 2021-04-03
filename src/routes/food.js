'use strict';
const express = require('express');
const validator = require('../middleware/validator');
const Food = require('../models/data-collection-class.js');
const foodModel = require('../models/food');
const food = new Food(foodModel);
const router = express.Router();

router.get('/', getData);
router.get('/:id', validator, byID);
router.post('/', saving);
router.put('/', validator, updateData);
router.delete('/', validator, deleteData);
router.put('/:id', validator, updateData);
router.delete('/:id', validator, deleteData);

async function getData(req, res, next) {
  try {
    const data = await food.read();
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function byID(req, res, next) {
    let ID=req.params.id
    try{
        const data=await food.read(ID)
        res.json(data[0])
    } catch (err){
        next(err)
    }

}

async function saving(req, res,next) {
  let reqData = req.body;
  try {
    const data = await food.create(reqData);
    res.json(data);
  } catch (err) {
    next(err)
  }
}

async function updateData(req, res, next) {
  let reqData = req.body;
  let ID=req.params.id
  try {
    const data = await food.update(ID, reqData);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function deleteData(req, res, next) {
let ID=req.params.id
  try {
    const data = await food.delete(ID);
    const datareq = await food.read();
    res.json(datareq);
  } catch (err) {
    next(err);
  }
}

module.exports = router;