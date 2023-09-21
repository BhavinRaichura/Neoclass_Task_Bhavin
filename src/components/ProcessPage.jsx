import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { setQuestionDetails } from "../redux/actions/questionsAction";
import { setStart } from "../redux/actions/userActions";
import { TimerHandler } from "../utils/TimerHandler";

const ProcessPage = () => {
  const userState = useSelector((state) => state.userReducer);
  const questionState = useSelector((state) => state.questionsReducer);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = () => {
      userState.selectedQuestions.forEach((questionId) => {
        if (questionState[questionId] === undefined) {
          fetch(
            `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionId}`
          )
            .then((response) => response.json())
            .then((data) => {
              dispatch(setQuestionDetails(questionId, data[0].Question));
            })
            .catch((error) => console.log(`unable to fetch: ${questionId}`));
        }
      });
      dispatch(setStart());
    };

    fetchQuestion();

    const sto = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(sto);
  }, []);

  if (loading === false) return <Navigate to="/test" replace={true} />;

  return (
    <div className="flex justify-center items-center w-screen my-10">
      <h1 className=" text-xl">
        Test start in {<TimerHandler durationInSecond={5} />} second...
      </h1>
    </div>
  );
};

export default ProcessPage;
