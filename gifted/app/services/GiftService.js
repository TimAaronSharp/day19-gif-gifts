import { AppState } from "../AppState.js";
import { Gift } from "../models/Gifts.js";
import { api } from "../utils/Axios.js"

class GiftsService{
async openGift(giftId) {
 const gifts = AppState.gifts
  const openedGift = AppState.gifts.find(gift => gift.id == giftId)
  openedGift.opened = !openedGift.opened
   const response = await api.put(`api/gifts/${giftId}`,openedGift )
   const updatedGift = new Gift(response.data)
   
gifts.splice

   console.log(response.data);
   
 }



 async getGifts() {
    const response = await api.get('api/gifts')
    // console.log('got gifts', response.data);
    const gifts = response.data.map(pojo => new Gift(pojo))
    AppState.gifts = gifts
   console.log(AppState.gifts);
   
  }

}






export const giftsService = new GiftsService()