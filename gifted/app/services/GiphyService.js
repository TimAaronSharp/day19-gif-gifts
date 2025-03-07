import { Gift } from "../models/Gifts.js";


// @ts-ignore
const giphyApi = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs/search/tags?api_key=',
  timeout: 8000,
  params: {
    key: 'MbkWTexkqbK0p62LndY5E7Pr79XVKlUV',
    rating: 'pg',
    limit: 10,
  }
});
const apiKey = 'MbkWTexkqbK0p62LndY5E7Pr79XVKlUV'



class GiphyService {

  // &q=${formInputValue}&limit=25&offset=0
  async searchGiphy(formInputValue) {


    const response = await giphyApi.get(`&q=${formInputValue}`)
    // console.log(`reponse string is search/tags?api_key=${giphyApi.params.key}&q=${formInputValue}&limit=25&offset=0`);

    console.log(`search response is ${JSON.stringify(response.data)}`);

    // const giphys = response.data.map(giphy => new Gift(giphy))


  }

}

export const giphyService = new GiphyService()