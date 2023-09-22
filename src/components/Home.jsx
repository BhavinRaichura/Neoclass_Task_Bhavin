import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";

import {
  setUserName,
  setSelectedQuestionList,
  reset,
} from "../redux/actions/userActions";
import questionList from "../questionsList";

const Home = () => {
  const [user, setUser] = useState("");
  const [questionsOption, setQuestionsOption] = useState([]);
  const [countQuestion,setCountQuestion] = useState(0);

  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(userState.start===1 && userState.end===0){
      dispatch(reset());
    }
    setQuestionsOption(() =>
      questionList.map((id, key) => {
        return { id, checked: false };
      })
    );
    setUser(() => userState.user);
  }, []);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(reset());
    const selectedQuestion = [];

    questionsOption.forEach((obj) => {
      if (obj.checked === true) selectedQuestion.push(obj.id);
    });

    dispatch(setSelectedQuestionList(selectedQuestion));
    dispatch(setUserName(user));

    return navigate("/process");
  };

  const checkBoxHandler = (index) => {
    setQuestionsOption((questions) => {
      const ques = [...questions];
      setCountQuestion((e)=> !ques[index].checked ? e-1 : e+1);
      ques[index] = { ...ques[index], checked: !ques[index].checked };
      return ques;
    });
  };

  

  return (<>
    <h1 className="my-10 font-normal text-xl max-md:text-lg text-center">Nioclass Task by <Link className=" text-blue-600" to='https://www.linkedin.com/in/bhavin-raichura-93a657191/'>Bhavin Raichura</Link></h1>
    <div className=" text-base font-normal flex justify-center my-10 h-screen">
      <div className="container  h-max ">
        <form className="my-2 p-2" onSubmit={formHandler}>
          <div className="m-5">
            <input
              className=" text-lg max-md:text-base px-2  border-b max-w-5/6 min-w-40 w-5/6"
              type="text"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              name="user"
              id="user"
              value={user}
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <p className="mx-5 text-lg text-gray-600">Select Questions</p>
            <div className="m-5">
              {questionsOption.map((question, index) => {
                return (
                  <div key={index} className=" m-2">
                    <label htmlFor={question.id} className={` cursor-pointer  hover:text-black  text-black `}>
                    <input
                      type="checkbox"
                      className=" accent-blue-600 mx-2 "
                      id={question.id}
                      name={question.id}
                      value={question.id}
                      onChange={() => {
                        checkBoxHandler(index);
                      }}
                    />
                     {question.id}</label>
                  </div>
                );
              })}
              <div className="my-5">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-slate-400"
                  type="submit"
                  value="submit"
                  disabled = {countQuestion>0 ? false : true}
                  
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Home;
