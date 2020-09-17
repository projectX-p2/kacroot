const router = require ("express").Router ()
const UserController = require ("../controllers/UserController.js")
const QuestionController = require ("../controllers/QuestionController.js")

router.post ("/",UserController.addPlayers)

router.use ("/questions",QuestionController.showQuestions)

module.exports = router