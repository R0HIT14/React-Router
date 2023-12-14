import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-3xl p-10">
        Hello I am user and here is the path parameter -----: {id} :-----
      </div>
      <div>
        <button className="text-center text-xl p-4 bg-blue-700 rounded-xl w-36">
          +
        </button>
      </div>
    </div>
  );
};

export default User;
