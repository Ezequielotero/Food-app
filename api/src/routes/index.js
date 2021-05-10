const { Router } = require('express');
const types = require('./types.js')
const recipes = require('./recipes.js')

const router = Router();

router.use('/recipes', recipes)
router.use('/types', types)

module.exports = router;
