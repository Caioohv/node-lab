const { serverHttp } = require('./http')
require('./websocket')


serverHttp.listen(3000, () => {
  console.log('listening on port 3000')
})
