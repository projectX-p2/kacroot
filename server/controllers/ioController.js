const messages = [
    {
      sender: 'admin',
      message: 'welcome to quiz app!' 
    }
  ] 
  
  
  class IoController {
    static initMessage() {
      return messages
    }

    static register(payload, socket) {
      console.log(payload);
      // users.push({name: payload.name, socketId: socket.id})
      // console.log(users, "after register")
    }    
  }
  
  module.exports = IoController