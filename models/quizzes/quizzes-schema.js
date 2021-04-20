const mongoose = require("mongoose")
const questionsSchema = require("../questions/questions-schema")
const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String,
    // store an array of strings
    questions: [{
        // mongoose.Schema.Types.ObjectId
        // _id
        type: String,
        ref: "QuestionsModel"
    }],
    // instead of storing refs, we can store actual objs

    // embeddedQuestions: [questionsSchema],
    // embeddedQuestions2: [{
    //     title: String,
    //     quizId: String,
    //     question: String,
    //     correct: String,
    //     type: {type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE"]},
    //     choices: [String]
    // }],

}, {collection: "quizzes"});

module.exports = quizzesSchema;