const IoController = require('./controllers/ioController')

let questions = [
  {
      "question":"Who is the actor of Warmachine from IronMan 1 2008 ?",
      "choice":["Don Cheadle","Terrence Howard","Paul Bettany","Chad Bosman"],
      "answer":"Terrence Howard"
  },

  {
      "question":"What species is Star Lord's Mother ?",
      "choice":["Martian","Earthling","Asgardian","Nifleheim"],
      "answer":"Earthling"
  },

  {
      "question":"What is Deadpool's mutant power?",
      "choice":["Teleportation","Mind Reader","Super Fast","Regeneration"],
      "answer":"Regeneration"
  },

  {
      "question":"What is Miles Morales's ability ?",
      "choice":["Mind Reader","Breath in the water","Invisibility","Super Strong"],
      "answer":"Invisibility"
  },

  {
      "question":"Who is F.R.I.D.A.Y ?",
      "choice":["Tony's butler","Tony's AI","Tony's Assistant","Tony's wife"],
      "answer":"Tony's AI"
  },
  
  {
      "question":"Who is Loki's real father ?",
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

let players = [
    // {
    //     username: 'test1',
    //     score: '25'
    // },
    // {
    //     username: 'test2',
    //     score: '30'
    // },
    // {
    //     username: 'test3',
    //     score: '5'
    // }
]
// {
//     username:
//     score:
// }

module.exports = {
  start: (io) => io.on('connection', (socket) => {
    console.log('a user connected') // dari sisi client

    socket.emit("init", IoController.initMessage()) // 1 client


    //User creates a new room
    // socket.on("createRoom", IoController.createRoom())

    socket.on('participantRegistration', payload => IoController.register(payload, socket))

    socket.on('getQuestion', (payload,socket) => {
        console.log('ini get question');
        io.emit('saveQuestions', questions)
    })

    socket.on('sendScore', (payload,socket) => {
        console.log(payload);
        players.push(payload)
        console.log(players);
        // io.emit('sendHighScore', players)
    })

    socket.on('getHighScore', (payload,socket)=>{
        console.log('get high score');
        io.emit('sendHighScore', players)
    })

    // socket.on('newMessage', payload => IoController.sendMessage(payload, socket))

    // socket.on('privateMessage', payload => IoController.sendMessage(payload, io))

    // socket.on('isTyping', payload => IoController.isTyping(payload, socket) )

    // socket.on('disconnect', payload => IoController.unregister(payload, socket))


    // memanggil function di Iocontroller
    // Isi dengan route ke Iocontroller

  })
}