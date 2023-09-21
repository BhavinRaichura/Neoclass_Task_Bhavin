import React from "react";
import TimerHandler from "./TimerHandler";
import TestEndButton from "./TestEndButton";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const location = useLocation()
  const userState = useSelector(state=>state.userReducer)
  return (
    <div className=" border-2 shadow-md min-w-full h-max py-2 px-10 max-md:px-5 ">
      {location.pathname==='/test' ? 
      <div className="w-full flex flex-row-reverse justify-between">
        <div className=" flex justify-center items-center font-medium text-lg" >
          <TimerHandler durationInSecond={5 * 60 * userState.totalQuestions} />
        </div>
        <TestEndButton />
      </div> :
      <div className=" flex justify-end">
        <div>
          <span className={`py-2 px-4 hover:border-b-4 hover:text-black text-gray-600 ${ location.pathname === '/' ? " border-b-gray-500 border-b-4":""}`}><Link to='/'>Home</Link></span>
          <span className={`py-2 px-4 hover:border-b-4 hover:text-black text-gray-600 ${ location.pathname === '/end' ? " border-b-gray-500 border-b-4":""}`}><Link to='/end'>Result</Link></span>
        </div>
      </div>
        
      }
    </div>
  );
};

export default Navbar;
