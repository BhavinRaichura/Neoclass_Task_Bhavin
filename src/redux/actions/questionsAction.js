import questionsActionType from "../types/questionActionTypes";

export const setQuestionDetails = (questionId, questionDetails) =>{
    return {
        type: questionsActionType.SET_QUESTION,
        payload: {
            questionId,
            questionDetails,
        }
    }
}
