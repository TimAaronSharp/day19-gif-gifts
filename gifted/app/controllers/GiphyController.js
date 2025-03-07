import { AppState } from "../AppState.js";
import { giphyService } from "../services/GiphyService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";




export class GiphyController {
  constructor() {
    AppState.on('giphys', this.drawGiphys)
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

  drawGiphys() {
    const giphys = AppState.giphys
    let content = ''
    giphys.forEach(giphy => content += giphy.HTMLTemplate)
    const giphyElem = document.getElementById('search-results-card')
    giphyElem.innerHTML = content
  }

  toggleTagInput(gifTitle) {
    const theButton = document.getElementById(gifTitle)
    theButton.classList.remove('toggle-none')
    theButton.classList.add('toggle-block')

    console.log(gifTitle);

  }
}