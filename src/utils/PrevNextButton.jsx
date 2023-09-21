import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  nextQuestion,
  previousQuestion,
  questionStopTimer,
} from "../redux/actions/userActions";

const PrevNextButton = () => {
  const userState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const questionChangeHandler = (changeQuestion) => {
    dispatch(questionStopTimer());
    dispatch(changeQuestion());
  };

  return (
    <div className="my-5">
      <button
        className="p-2 m -2 border rounded-sm px-4 hover:bg-slate-200 float-left disabled:bg-slate-200  disabled:text-gray-500"
        onClick={() => questionChangeHandler(previousQuestion)}
        disabled={userState.currentIndex === 0 ? true : false}
      >
        {"< Previous"}{" "}
      </button>
      <button
        className="p-2 m -2 border rounded-sm px-4 hover:bg-slate-200 float-right disabled:bg-slate-200  disabled:text-gray-500"
        onClick={() => questionChangeHandler(nextQuestion)}
        disabled={
          userState.currentIndex === userState.totalQuestions - 1 ? true : false
        }
      >
        {"Next >"}
      </button>
    </div>
  );
};

export default PrevNextButton;
