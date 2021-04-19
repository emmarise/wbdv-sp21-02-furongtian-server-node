const mongoose = require("mongoose")
const questionsSchema = mongoose.Schema({
    _id: String,
    title: String,
    quizId: String,
    question: String,
    correct: String,
    // for grading
    answer: String,
    // JSON obj {}
    type: {type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE"]},
    choices: [String]
    // we want to store these in questions collection
}, {collection: "questions"})

module.exports = questionsSchema