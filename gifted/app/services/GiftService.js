import { AppState } from "../AppState.js";
import { Gift } from "../models/Gifts.js";
import { api } from "../utils/Axios.js"

class GiftsService{
 async getGifts() {
    const response = await api.get('api/gifts')
    // console.log('got gifts', response.data);
    const gifts = response.data.map(pojo => new Gift(pojo))
    AppState.gifts = gifts
   console.log(AppState.gifts);
   
  }

}






export const giftsService = new GiftsService()