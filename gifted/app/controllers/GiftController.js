import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController{
  constructor(data){
console.log('Gift controller is working!');
AppState.on('identity', this.getGifts)



  }

async getGifts(){
  try {
    await giftsService.getGifts()
  } catch (error) {
    Pop.error(error)
  }
}

}