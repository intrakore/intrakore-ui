<<<<<<< HEAD
import { io } from 'socket.io-client'

export default function initSocket(options = {}) {
  let host = window.location.hostname
  let siteName = import.meta.env.DEV ? host : window.site_name
  let socketio_port = options.port || 9000
  let port = window.location.port ? `:${socketio_port}` : ''
  let protocol = port ? 'http' : 'https'
  let url = `${protocol}://${host}${port}/${siteName}`
  let socket = io(url, { withCredentials: true })
  return socket
}
=======
import io from 'socket.io-client/dist/socket.io.slim'

let host = window.location.hostname
let port = window.location.port ? ':9000' : ''
let protocol = port ? 'http' : 'https'
let url = `${protocol}://${host}${port}`
let socket = io(url)

export default socket
>>>>>>> 9165654b (feat: first commit)
