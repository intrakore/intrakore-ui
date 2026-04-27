<<<<<<< HEAD
import resourcesPlugin from '../resources/plugin'
import call from './call'
import initSocket from './socketio'
=======
import resources from './resources'
import call from './call'
import socket from './socketio'
>>>>>>> 9165654b (feat: first commit)

let defaultOptions = {
  resources: true,
  call: true,
  socketio: true,
}

export default {
  install(app, options = {}) {
    options = Object.assign({}, defaultOptions, options)
<<<<<<< HEAD
    options.resources && app.use(resourcesPlugin, options.resources)

    if (options.call) {
      let callFunction = typeof options.call == 'function' ? options.call : call
      app.config.globalProperties.$call = callFunction
    }
    if (options.socketio) {
      app.config.globalProperties.$socket = initSocket(options.socketio)
=======
    options.resources && app.use(resources)

    if (options.call) {
      app.config.globalProperties.$call = call
    }
    if (options.socketio) {
      app.config.globalProperties.$socket = socket
>>>>>>> 9165654b (feat: first commit)
    }
  },
}
