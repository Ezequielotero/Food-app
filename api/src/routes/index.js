const { Router } = require('express');
const types = require('./types.js')
const recipes = require('./recipes.js')
const recipe = require('./recipe.js')

const router = Router();

router.use('/recipes', recipes)
router.use('/recipe', recipe)
router.use('/types', types)

module.exports = router;
