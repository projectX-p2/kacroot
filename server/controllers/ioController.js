const messages = [
    {
      sender: 'admin',
      message: 'welcome to quiz app!' 
    }
  ] 
  
  let users = []    
  // sample obj user:
  //{
  //   socketId: 'admin',
  //   name: 'welcome to chat app!' 
  // }

  let questions = [
    {
        "question":"What is the actor's name of Warmaachine from IronMan 1 2008 ?",
        "choice":["Don Cheadle","Terrence Howard","Paul Bettany","Chad Bosman"],
        "answer":"Terrence Howard"
    },

    {
        "question":"What species is Star Lord's Mother ?",
        "choice":["Martian","Earthling","Asgardian","Nifleheim"],
        "answer":"Earthling"
    },

    {
        "question":"What is Deadpool mutant power?",
        "choice":["Teleportation","Mind Reader","Super Fast","Regeneration"],
        "answer":"Regeneration"
    },

    {
        "question":"What is Miles Morales ability ?",
        "choice":["Mind Reader","Breath in the water","Invisibility","Super Strong"],
        "answer":"Invisibility"
    },

    {
        "question":"Who is F.R.I.D.A.Y ?",
        "choice":["Tony's butler","Tony's AI","Tony's Assistant","Tony's wife"],
        "answer":"Tony's AI"
    },
    
    {
        "question":"What is Loki's father ?",
        "choice":["Odin","Thor","Laufey","Freiya"],
        "answer":"Laufey"
    },

    {
        "question":"Who is Steve Roger's enemy in Captain America: First Avenger?",
        "choice":["Red Hulk","Red Skull","Red Flag","Moon Knight"],
        "answer":"Red Skull"
    },

    {
        "question":"Who is Red Skull's Actor in Captain America ?",
        "choice":["Keanu Reeves","Hugo Weaving","Chris Pratt","Lydia Kandouw"],
        "answer":"Hugo Weaving"
    },

    {
        "question":"What is Thanos title ?",
        "choice":["Mad Purple","Mad Anger","Mad Titan","Mad Hunter"],
        "answer":"Mad Titan"
    },

    {
        "question":"Who killed Howard Stark ?",
        "choice":["Winter Knight","Winter Assasin","Winter Hunter","Winter Soldier"],
        "answer":"Winter Soldier"
    }
  ]
  // list of game questions
  
  let rooms = []
  
  // Nanti bisa require model dari sini.
  
  class IoController {
    static initMessage() {
      return messages
    }

    static register(payload, socket) {
      console.log(payload);
      // users.push({name: payload.name, socketId: socket.id})
      console.log(users, "after register")
    }
  
    static unregister(payload, socket) {
      users = users.filter(user => user.socketId !== socket.id)
      console.log(users, "after unregister")
    }

    // // static createRoom(payload,socket) {
    // //   // roomname: 
    // //   const room = {
    // //     name: payload.name
    // //   }
    // // }

    // static joinRoom(payload,socket) {
    //   // roomname, clientnme
    //   rooms.forEach(element => {
    //     if (payload.room == element) {
          
    //     }
    //     else {
    //       socket.join(payload.room)
    //       console.log('joined', payload.room);
    //     }
    //   })
      
      
    // }

    // static getQuestions(payload,socket) {
      
    // }


  
    
  
    // static sendMessage(payload, socket, io) {
    //   messages.push(payload)
    //   socket.broadcast.emit('sendMessageToOther', payload)
      
    // }
  
    // static privateMessage(payload, io) {
    //   // sample. hanya mengambil userId bukan sender.
    //   // untuk demo ini, gunakan 2 client saja.
    //   const socketId = users.find(u => u.name !== payload.sender).socketId
  
    //   messages.push(payload)
  
    //   // cara emit private message
    //   io.to(socketId).emit('privateMessagekeClient', payload);
    // }
  
    // static isTyping(payload, socket) {
    //   socket.broadcast.emit('serverIsTyping', payload) 
    // }
  
  
  }
  
  module.exports = IoController