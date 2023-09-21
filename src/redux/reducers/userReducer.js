import userActionType from "../types/userActionTypes";
import { getTimeRemaining } from "../../utils/TimerHandler";

const testSchema = {
    user: "",
    start:0,
    end:0,
    testId:"",
    startTime: '00:00:00',
    endTime: '00:00:00',
    totalTime: 0,
    currentIndex:0,
    selectedQuestions:[],
    timer:{},
    totalQuestions:0,
}

const timerSchema = {
    startTime:'00:00:00',
    endTime:'00:00:00',
    totalTime:0,
} 


const userReducer = (state = testSchema, action) =>{
    let questionId;

    switch(action.type){
        case userActionType.SET_USER_NAME:
            return {...state, user: action.payload.user};

        case userActionType.SET_SELECTED_QUESTION_LIST:
            let selectedQuestions = action.payload.selectedQuestions
            return {...state, selectedQuestions, totalQuestions: selectedQuestions.length};;

        case userActionType.NEXT_QUESTION:
            if(state.currentIndex+1 >= state.totalQuestions)
                return state
            return {...state, currentIndex: state.currentIndex+1};

        case userActionType.PREVIOUS_QUESTION:
            if(state.currentIndex===0)
                return state
            return {...state, currentIndex: state.currentIndex-1};

        case userActionType.SET_END:
            if(state.end===1) return state
            var {total, newDate} = getTimeRemaining(state.startTime)
            return {...state, end: 1, endTime: new Date(), totalTime:total };

        case userActionType.SET_START:
            return {...state, start:1, startTime: new Date()}

        case userActionType.RESET:
            const newSchema =  {user: state.user, start:0, end:0, testId:"", startTime: '00:00:00', endTime: '00:00:00', currentIndex:0, selectedQuestions:[], timer:{}, totalQuestions:0,}
            return newSchema;
        
        case userActionType.QUESTION_START_TIMER:
            questionId = state.selectedQuestions[state.currentIndex];
            if(state.timer[questionId]===undefined){
                state.timer[questionId] = {...timerSchema}
            }
            state.timer[questionId].startTime = new Date();
            return state;

        case userActionType.QUESTION_STOP_TIMER:
            if(state.end===1 || state.timer===undefined) return state
            questionId = state.selectedQuestions[state.currentIndex];
            if(state.timer[questionId]===undefined){
                state.timer[questionId] = {...timerSchema}
            }
            var {total, newDate} = getTimeRemaining(state.timer[questionId].startTime)
            state.timer[questionId].endTime = newDate;
            state.timer[questionId].totalTime += total;
            return state;

        default:
            return state;
    }
}

export default userReducer
