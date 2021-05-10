const axios = require('axios')
export const RANDOM_RECIPE = 'RANDOM_RECIPE'
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'

export function randomRecipe() {
        let num = Math.random() * (1 - 9)
        num= Math.floor(num + 9);
    return async function (dispatch) {
      let resp= await axios.get(`http://localhost:3001/recipes`)
          {
          dispatch({ type: 'RANDOM_RECIPE', payload: resp.data[num] })
        }
       }
    }


    export function searchByName(title) {
  return async function (dispatch) {
    let resp= await axios.get(`http://localhost:3001/recipes?name=` + title)
        dispatch({ type: 'SEARCH_BY_NAME', payload: resp.data.map(recipe => {
          return {
            name: recipe.title,
            img: recipe.img,
            id:recipe.id,
        } })
      })
    }
  }
  