const IoController = require('./controllers/ioController')


module.exports = {
  start: (io) => io.on('connection', (socket) => {
    console.log('a user connected') // dari sisi client

    socket.emit("init", IoController.initMessage()) // 1 client


    //User creates a new room
    // socket.on("createRoom", IoController.createRoom())

    // socket.on('participantRegistration', payload => IoController.register(payload, socket))

    // socket.on('newMessage', payload => IoController.sendMessage(payload, socket))

    // socket.on('privateMessage', payload => IoController.sendMessage(payload, io))

    // socket.on('isTyping', payload => IoController.isTyping(payload, socket) )

    // socket.on('disconnect', payload => IoController.unregister(payload, socket))


    // memanggil function di Iocontroller
    // Isi dengan route ke Iocontroller

  })
}