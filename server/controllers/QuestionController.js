const {Question} = require ("../models/Question.js")

class QuestionController {
    static showQuestions () {
        let questions = Question.get() 
        // send questions
    }
    static countdown() {
        
    }
}

module.exports = QuestionController