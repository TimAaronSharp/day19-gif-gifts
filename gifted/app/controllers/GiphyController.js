import { AppState } from "../AppState.js";
import { giphyService } from "../services/GiphyService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";




export class GiphyController {
  constructor() {

  }
  async searchGiphy() {
    try {
      event.preventDefault()
      const formElem = event.target
      // console.log(`formElem is ${formElem}`);
      const formTestElem = document.getElementById('giphy-search-tag')
      // @ts-ignore
      const formInputValue = formTestElem.value
      console.log(formInputValue);

      // const formData = getFormData(formElem)
      // console.log(`formData.value is`);

      // AppState.testArray.push(formData)
      // console.log(`formData in testArray is ${AppState.testArray[0]}`);

      await giphyService.searchGiphy(formInputValue)
    } catch (error) {
      Pop.error(error);
      console.error(error);

    }
  }
}