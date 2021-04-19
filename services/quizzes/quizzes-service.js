const quizzes = require("./quizzes.json")

const quizzesModel = require("../../models/quizzes/quizzes-model")


const createQuiz = () => {}
const findAllQuizzes = () => {
    return quizzesModel.find()
    // return quizzes

}
const findQuizById = (quizId) => {
    // find returns an array
    return quizzesModel
        .findById(quizId)
        // create an additional query, fetch the objects
        // that those ids refer to
        .populate("questions")
        .exec()
    // return quizzesModel.find({_id: quizId})
    // return quizzes.find((quiz) => {
    //     return quiz._id === quizId
    // })
}

const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes, findQuizById,
    updateQuiz, deleteQuiz
}