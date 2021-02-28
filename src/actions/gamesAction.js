import axios from 'axios'
import {popularGamesURL,upcomingGamesURL,newGamesURL, searchGameURL} from '../api'

//Action Creator 

export const loadGames = () => async(dispatch) => {
    // Fetch Axios
  const popularData = await axios.get(popularGamesURL())  
  const newGamesData = await axios.get(newGamesURL())
  const upcomingGames = await axios.get(upcomingGamesURL())

  dispatch({
      type:"FETCH_GAMES",
      payload: {
          popular: popularData.data.results,
          newGames: newGamesData.data.results,
          upcoming: upcomingGames.data.results
      }
  })
}

export const fetchSearch =(game_name)=> async(dispatch)=>{
    const searchGames = await axios.get(searchGameURL(game_name))
    dispatch({
        type: "FETCH_SEARCHED",
        payload:{
          searched: searchGames.data.results
        }
    })
     
}
