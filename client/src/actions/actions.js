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
  if (title) {
  return async function (dispatch) {
    let resp = await axios.get(`http://localhost:3001/recipes?name=` + title);
    dispatch({
      type: "SEARCH_BY_NAME",
      payload: resp.data.map((recipe) => {
        return {
          name: recipe.title,
          img: recipe.img,
          id: recipe.id,
        };
      }),
    });
  };
}
else{
  return async function (dispatch) {
    let resp = await axios.get(`http://localhost:3001/recipes`);
    dispatch({
      type: "SEARCH_BY_NAME",
      payload: resp.data.map((recipe) => {
        return {
          name: recipe.title,
          img: recipe.img,
          id: recipe.id,
        };
      }),
    });
  };
}
}
export function getDetails(id) {
  return async function (dispatch) {
    let resp = await axios.get(`http://localhost:3001/recipes/`+id);
    {
      dispatch({ type: "GET_DETAILS", payload: resp.data.map((detail)=>{
        return{
          name: detail.title,
          img: detail.img,
          id: detail.id,
          dishTypes:detail.dishTypes,
          diets: detail.diets,
          summary: detail.summary,
          healthy:detail.healthy,
          instructions:detail.instructions,
          socre:detail.score
        }
      })});
      
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
