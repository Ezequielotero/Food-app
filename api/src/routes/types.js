const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");
const { API_KEY } = process.env;

try {
  router.get("/", async (req, res) => {
    let results = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
    );
    results.data.results.forEach((diet) => {
      diet.diets.forEach(async (diet) => {
        await Diet.findOrCreate({
          where: {
            name: diet,
          },
        });
      });
    });
    let aux = await Diet.findAll();
    let allDiets = aux.map((e) => {
      return e.dataValues;
    });
    res.send(allDiets);
  });
} catch {
  res.send("error");
}

module.exports = router;
