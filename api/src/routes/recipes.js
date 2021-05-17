const { default: axios } = require("axios");
const { Router } = require("express");
const router = Router();
const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;

const url = `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&number=50&addRecipeInformation=true`;

try {
  router.get("/:idrecetas", async (req, res) => {
    let detalles = [];
    if (req.params.idrecetas.length > 10) {
      let recipe = await Recipe.findOne({
        where: { id: req.params.idrecetas },
      });
      detalles.push({
        id: recipe.dataValues.id,
        title: recipe.dataValues.name,
        resume: recipe.dataValues.resume,
        rating: recipe.dataValues.rating,
        healthy: recipe.dataValues.healthy,
        steps: recipe.dataValues.steps,
      });
    } else {
      let resp = await axios.get(
        `https://api.spoonacular.com/recipes/${req.params.idrecetas}/information/?apiKey=${API_KEY}`
      );
      detalles.push({
        flag:true,
        id: resp.data.id,
        title: resp.data.title,
        img: resp.data.image,
        dishTypes: resp.data.dishTypes,
        diets: resp.data.diets,
        summary: resp.data.summary,
        healthy: resp.data.healthScore,
        instructions: resp.data.instructions,
        score: resp.data.spoonacularScore,
      });
    }
    res.json(detalles);
    detalles = [];
  });
} catch {
  res.send("eeroor");
}

router.get("/", async (req, res) => {
  let array = [];
  let resp = await axios.get(url);

  if (req.query.name) {
    for (let i = 0; i < resp.data.results.length; i++) {
      if (
        resp.data.results[i].title.toLowerCase().indexOf(req.query.name) !== -1
      ) {
        array.push({
          flag:true,
          id: resp.data.results[i].id,
          title: resp.data.results[i].title,
          img: resp.data.results[i].image,
          score: resp.data.results[i].spoonacularScore,
          diets: resp.data.results[i].diets,
        });
      }
    }
    let recipe = await Recipe.findOne({
      where: { name: req.query.name },
      include: [Diet],
    });
    array.push(recipe);

    if (array.length > 0) {
      res.send(array);
      array = [];
    } else {
      res.status(404).send("Recipe not found");
    }
  } else {
    for (let i = 0; i < resp.data.results.length; i++) {
      array.push({
        flag:true,
        id: resp.data.results[i].id,
        title: resp.data.results[i].title,
        img: resp.data.results[i].image,
        score: resp.data.results[i].spoonacularScore,
        diets: resp.data.results[i].diets,
      });
    }
    let respdb = await Recipe.findAll({ include: [Diet] });
    array = array.concat(respdb);
    res.send(array);
  }
});

module.exports = router;
