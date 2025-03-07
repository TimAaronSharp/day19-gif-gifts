import { Identity } from './Auth/Identity.js'
import { Gift } from './models/Gifts.js'
import { Giphy } from './models/Giphy.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /**
   * @type {Gift[]}
   */
  gifts = []

  /**
   * @type {Identity}
   */
  identity = null

  /**
   * @type {Giphy[]}
   */
  giphys = []

  testArray = []
}

export const AppState = createObservableProxy(new ObservableAppState())