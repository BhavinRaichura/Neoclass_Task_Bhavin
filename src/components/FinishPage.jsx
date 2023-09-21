import React from "react";
import { useSelector } from "react-redux";

const convertTimeFormate = (total) => {
  total *= -1;
  const second = Math.floor((total / 1000) % 60);
  const minute = Math.floor((total / 1000 / 60) % 60);
  const hour = Math.floor((total / 1000 / 60 / 60) % 24);
  return `${hour <= 9 ? "0" + hour : hour}:${
    minute <= 9 ? "0" + minute : minute
  }:${second <= 9 ? "0" + second : second}`;
};

const FinishPage = () => {
  const userState = useSelector((state) => state.userReducer);
  return (
    <div className="flex justify-center my-10 w-screen h-screen">
      <div className="container w-96 border-2  h-max">
        <h2 className="text-center text-xl font-medium py-2">
          {userState.user}
        </h2>
        <div className="flex  justify-center items-center ">
          <table className=" text-center m-t-5 p-5 border ">
            <tr className="p-2 m-2 bg-black text-white">
              <th className="px-5 py-2">Question Id</th>
              <th className="px-5 py-2">Time(HH:MM:SS)</th>
            </tr>
            {userState.selectedQuestions.map((questionId, key) => {
              return (
                <tr key={key} className="p-2 m-2 hover:bg-slate-100">
                  <td className="m-2 p-2">{questionId}</td>
                  <td className="m-2 p-2">
                    {userState.timer[questionId] === undefined
                      ? "00:00"
                      : convertTimeFormate(
                          userState.timer[questionId].totalTime
                        )}
                  </td>
                </tr>
              );
            })}
            <tr className="p-2 m-2 bg-slate-300">
              <td className="m-2 p-2">Total Time</td>
              <td className="m-2 p-2">
                {convertTimeFormate(userState.totalTime + 5000)}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
