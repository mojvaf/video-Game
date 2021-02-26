import axios from 'axios'
import {gameDetailsURL, gameScreenShotURL} from '../api'

// action creator 

export const loadDetail = (id)=> async(dispatch)=>{
  //Fetch Axios
  const  detailData = await axios.get(gameDetailsURL(id))
  const  screenShotDate = await axios.get(gameScreenShotURL(id))
  dispatch({
      type:"GET_DETAIL",
      payload: {
        game: detailData.data,
        screen: screenShotDate.data
      }
  })

}