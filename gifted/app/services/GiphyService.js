import { AppState } from "../AppState.js";
import { Giphy } from "../models/Giphy.js";


// @ts-ignore
const giphyApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs',
  timeout: 8000,
  params: {
    api_key: 'MbkWTexkqbK0p62LndY5E7Pr79XVKlUV',
    rating: 'pg',
    limit: 10,

  }
});
const apiKey = 'MbkWTexkqbK0p62LndY5E7Pr79XVKlUV'

class GiphyService {

  // &q=${formInputValue}&limit=25&offset=0
  async searchGiphy(query) {


    const response = await giphyApi.get(`search`, {
      params: {
        q: query,
        bundle: 'messaging_non_clips'
      }
    });

    const giphys = response.data.data.map(giphy => new Giphy(giphy))
    AppState.giphys = giphys

    console.log(giphys);




  }

}

export const giphyService = new GiphyService()