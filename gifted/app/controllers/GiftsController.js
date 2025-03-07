import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
  constructor(data) {
    console.log('Gift controller is working!');
    AppState.on('identity', this.getGifts)
    AppState.on('gifts', this.drawGifts)

  }


  drawGifts() {
    const gifts = AppState.gifts
    let content = ''
    gifts.forEach(gift => content += gift.HTMLCard)
    const giftElem = document.getElementById('gift-card')
    giftElem.innerHTML = content
  }


  async openGift(giftId) {
    try {
      event.preventDefault()
      await giftsService.openGift(giftId)
    } catch (error) {
      Pop.error(error);
      console.error(error);

    }
  }

  async getGifts() {
    try {
      await giftsService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async createGift() {
    try {
      event.preventDefault()
      const formElem = event.target

      const formData = getFormData(formElem)
      console.log(formData);

      await giftsService.createGift(formData)

    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

}