const app = require('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const socketConfig = require('./socketConfig')

const PORT = 3000

socketConfig.start(io)

http.listen(PORT, () => {
  console.log(`howdy! we are on http://localhost:${PORT}/`)
})

