import questionsActionType from "../types/questionActionTypes";

const questionsSchema = {}

const questionsReducer = ( state = questionsSchema, action) =>{
    switch(action.type){
        case questionsActionType.SET_QUESTION:
            let questionId =  action.payload.questionId 
            let questionDetails = action.payload.questionDetails 
            return { ...state, [questionId] : questionDetails }
        default: 
            return state;
    }
}

export default questionsReducer;