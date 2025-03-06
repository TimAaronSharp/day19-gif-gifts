import { AuthController } from "./Auth/AuthController.js"
import { GiftsController } from "./controllers/GiftController.js"


class App {
authcontroller = new AuthController()
giftController = new GiftsController()

}

window['app'] = new App()


