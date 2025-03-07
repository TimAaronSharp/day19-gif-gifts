import { AuthController } from "./Auth/AuthController.js"
import { GiftsController } from "./controllers/GiftsController.js"
import { GiphyController } from "./controllers/GiphyController.js"


class App {
  authcontroller = new AuthController()
  giftsController = new GiftsController()
  giphyController = new GiphyController()

}

window['app'] = new App()


