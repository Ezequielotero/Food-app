const axios = require("axios");
export const RANDOM_RECIPE = 'RANDOM_RECIPE'
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const GET_DETAILS = 'GET_DETAILS'
export const GET_DIETS = 'GET_DIETS'
export function randomRecipe() {
  let num = Math.random() * (1 - 9);
  num = Math.floor(num + 9);
  return async function (dispatch) {
    let resp = await axios.get(`http://localhost:3001/recipes`);
    {
      dispatch({ type: "RANDOM_RECIPE", payload: resp.data[num] });
    }
  };
}

export function searchByName(title) {
  let array=[]
  if (title) {
  return async function (dispatch) {
    let resp = await axios.get(`http://localhost:3001/recipes?name=` + title);
    dispatch({
      type: "SEARCH_BY_NAME",
      payload: resp.data.map((recipe) => {
        if (recipe.flag) {
          return {
            name: recipe.title,
            img: recipe.img,
            id: recipe.id,
            score: recipe.score,
            diets: recipe.diets.join(', ')
          }
        }
          array=[]
          recipe.diets.forEach(diet => {
            array.push(diet.name)
          })
          return {
            name: recipe.name,
            id: recipe.id,
            score: recipe.rating,
            diets: array.join(', ')
          }
      }),
    });
  };
}
else{
  return async function (dispatch) {
    let array=[]
    let resp = await axios.get(`http://localhost:3001/recipes`);
    dispatch({
      type: "SEARCH_BY_NAME",
      payload: resp.data.map((recipe) => {
        if (recipe.flag) {
          return {
            name: recipe.title,
            img: recipe.img,
            id: recipe.id,
            score: recipe.score,
            diets: recipe.diets.join(', ')
          }
        }else{
          array=[]
          recipe.diets.forEach(diet => {
            array.push(diet.name)})
            console.log(array)
          return {
            name: recipe.name,
            id: recipe.id,
            score: recipe.rating,
            diets: array.join(', ')
          }
          
        }
      })
    })
  }
}
}
export function getDetails(id) {
  return async function (dispatch) {
    let resp = await axios.get(`http://localhost:3001/recipes/`+id);
    {
      dispatch({ type: "GET_DETAILS", payload: resp.data.map((detail)=>{
        if (detail.flag) {
        return{
          flag: detail.flag,
          name: detail.title,
          img: detail.img,
          id: detail.id,
          dishTypes:detail.dishTypes,
          diets: detail.diets.join(', '),
          summary: detail.summary,
          healthy:detail.healthy,
          instructions:detail.instructions,
          score:detail.score
        }
      }else{
        return{
          name: detail.title,
          id: detail.id,
          resume: detail.resume,
          healthy:detail.healthy,
          instructions:detail.steps,
          score:detail.rating
      }
    }
      })})
      
    }
  };
}

export function getDiets() {
  return async function (dispatch) {
    let resp = await axios.get('http://localhost:3001/types');
    {
      dispatch({ type: "GET_DIETS", payload: resp.data.map((diet)=>{
        return{
          name: diet.name,
        }
      })
    });
    }
  };
}



