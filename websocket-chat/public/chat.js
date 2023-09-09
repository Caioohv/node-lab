const socket = io()
console.log('\n', '----------->socket: ', (socket))

const urlSearch = new URLSearchParams(window.location.search)
const username = urlSearch.get('username')
const room = urlSearch.get('select_room')

const sessionContent = {
  username: username,
  room: room,
}

socket.on('connect', () => {
  console.log('connected: ', socket.id)
});

socket.on('disconnect', (obj) => {
  console.log('Socket disconnected: ')
})

socket.emit('select_room', sessionContent)
