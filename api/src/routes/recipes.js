const { default: axios } = require("axios");
const { Router } = require("express");
const router = Router();
const {API_KEY}= process.env


const url =
  `https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&number=50`;

router.get('/:idrecetas', async (req, res) => {
  let detalles = [];
  let resp = await axios.get(
    `https://api.spoonacular.com/recipes/${req.params.idrecetas}/information/?apiKey=${API_KEY}`
  );
  detalles.push({
    id: resp.data.id,
    title: resp.data.title,
    img: resp.data.image,
    dishTypes: resp.data.dishTypes,
    diets: resp.data.diets,
    summary: resp.data.summary,
    healthy: resp.data.healthScore,
    instructions: resp.data.instructions,
    score: resp.data.spoonacularScore
  });
  res.json(detalles);
  detalles = [];
});


router.get("/", async (req, res) => {
  let array = [];
  let resp = await axios.get(url);

  
  if (req.query.name) {
    for (let i = 0; i < resp.data.results.length; i++) {
      if (
        resp.data.results[i].title.toLowerCase().indexOf(req.query.name) !== -1
      ) {
        array.push({
          id: resp.data.results[i].id,
          title: resp.data.results[i].title,
          img: resp.data.results[i].image,
        });
      }
    }if (array.length > 0) {
      res.send(array);
      array=[]
    }else{
      res.status(404).send('Recipe not found');
    }
  } 
else{
  for (let i = 0; i < resp.data.results.length; i++) {
    array.push({
      id: resp.data.results[i].id,
      title: resp.data.results[i].title,
      img: resp.data.results[i].image,
    });
  }
  res.send(array)
}
})
module.exports = router;
