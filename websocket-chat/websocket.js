const { io } = require('./http')

io.on('connection', (socket) => {
  console.log('----------->socket: ', (socket.id))

  socket.on('sessionLogin', (data) => {
    console.log(data)
  })
})
