import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController{
  constructor(data){
console.log('Gift controller is working!');
AppState.on('identity', this.getGifts)
AppState.on('gifts', this.drawGifts)


  }


drawGifts(){
  const gifts = AppState.gifts
  let content = ''
  gifts.forEach(gift => content += gift.HTMLCard)
  const giftElem = document.getElementById('gift-card')
  giftElem.innerHTML = content
}




async getGifts(){
  try {
    await giftsService.getGifts()
  } catch (error) {
    Pop.error(error)
  }
}

}