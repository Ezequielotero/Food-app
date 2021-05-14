const { default: axios } = require("axios");
const { Router } = require("express");
const router = Router();
const { v4: uuidv4 } = require('uuid');
const {Recipe, Diet}=require('../db')
const { Op } = require('sequelize');
// const { getDiets } = require("../../../client/src/actions/actions");

router.post('/', async(req,res)=>{
const{name,resume,rating,healthy,steps,diet}=req.body
console.log(req.body)
let recipe = await Recipe.create({
    id:uuidv4(),
    name,
    resume,
    rating,
    healthy,
    steps,
})
getDiets.forEach
})
module.exports = router;