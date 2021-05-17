const { default: axios } = require("axios");
const { Router } = require("express");
const router = Router();
const { v4: uuidv4 } = require('uuid');
const {Recipe, Diet}=require('../db')
const { Op } = require('sequelize');

router.post('/', async(req,res)=>{
const{name,resume,rating,healthy,steps,diets}=req.body
console.log(req.body)
let recipe = await Recipe.create({
    id:uuidv4(),
    name,
    resume,
    rating,
    healthy,
    steps,
})
diets.forEach(async d=>{
    const dietdb = await Diet.findOne({
        where:{name: { [Op.iLike]: `%${d}%`}}
    })
    recipe.addDiet(dietdb)
})
res.send('succes')
})
module.exports = router;