import { AuthController } from "./Auth/AuthController.js"
import { GiftsController } from "./controllers/GiftsController.js"


class App {
authcontroller = new AuthController()
giftsController = new GiftsController()

}

window['app'] = new App()


