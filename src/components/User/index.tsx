import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // You can replace the logic here with the desired behavior
    // For example, you can increment the id or change it in any way you need.
    const newId = parseInt(id!, 10) + 1;

    // Update the URL by navigating to the new path
    navigate(`/user/${newId}`);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-3xl p-10">
        Hello I am user and here is the path parameter -----: {id} :-----
      </div>
      <div>
        <button
          className="text-center text-xl p-4 bg-blue-700 rounded-xl w-36"
          onClick={handleButtonClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default User;
