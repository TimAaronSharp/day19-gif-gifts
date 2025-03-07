import { AppState } from "../AppState.js";
import { Gift } from "../models/Gifts.js";
import { api } from "../utils/Axios.js"

class GiftsService {

   async openGift(giftId) {
      const gifts = AppState.gifts
      const openedGift = AppState.gifts.find(gift => gift.id == giftId)
      openedGift.opened = !openedGift.opened
      const openedGiftIndex = gifts.findIndex((gift) => gift.id == giftId)
      console.log(`found index is ${openedGiftIndex}`);

      const response = await api.put(`api/gifts/${giftId}`, openedGift)
      const updatedGift = new Gift(response.data)



      gifts.splice(openedGiftIndex + 1, 0, updatedGift)
      gifts.splice(openedGiftIndex, 1)

      console.log(response.data);

   }



   async getGifts() {
      const response = await api.get('api/gifts')
      // console.log('got gifts', response.data);
      const gifts = response.data.map(pojo => new Gift(pojo))
      AppState.gifts = gifts
      console.log(AppState.gifts);

   }

   async createGift(formData) {

      const response = await api.post('api/gifts', formData)
      console.log(`createGift response is ${response}`);

      const newGift = new Gift(response.data)
      AppState.gifts.push(newGift)

   }

}






export const giftsService = new GiftsService()