import userActionType from "../types/userActionTypes"


export const setUserName = (userName) =>{
    return {
        type: userActionType.SET_USER_NAME,
        payload: {
            user: userName
        }
    }
}

export const setSelectedQuestionList = (selectedQuestions) =>{
    return {
        type:userActionType.SET_SELECTED_QUESTION_LIST,
        payload:{selectedQuestions}
    }
}

export const nextQuestion = () =>{
    return {
        type: userActionType.NEXT_QUESTION
    }
}

export const previousQuestion = () =>{
    return {
        type:userActionType.PREVIOUS_QUESTION
    }
}

export const setEnd = () =>{
    return {
        type: userActionType.SET_END
    }
}

export const setStart = () =>{
    return {
        type: userActionType.SET_START
    }
}

export const reStart = () =>{
    return {
        type: userActionType.RESTART
    }
}

export const reset = () =>{
    return {
        type: userActionType.RESET
    }
}

export const questionStartTimer = () =>{
    return {
        type: userActionType.QUESTION_START_TIMER
    }
}

export const questionStopTimer = () =>{
    return {
        type: userActionType.QUESTION_STOP_TIMER
    }
}


