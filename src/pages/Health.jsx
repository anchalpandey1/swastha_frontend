import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Health = () => {
  const [firstName, setFirstName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const navigate = useNavigate(); 

  const goals = [
    "Loss Weight",
    "Gain Weight",
    "Manage Stress",
    "Increase Step Count",
  ];

  const handleNextClick = (e) => {
    if (firstName.trim() === "") {
      e.preventDefault();
      setErrorMessage("First name is required");
    } else {
      setErrorMessage("");
      setShowSecondDiv(true); // Show the second div
    }
  };

  const handleProceedClick = () => {
    if (!selectedGoal) return; 

    // Redirect to the appropriate page based on the selected goal
    if (selectedGoal === "Loss Weight") {
      navigate("/loss");
    } else if (selectedGoal === "Gain Weight") {
      navigate("/gain");
    } else if (selectedGoal === "Manage Stress") {
      navigate("/manage-stress");
    } else if (selectedGoal === "Increase Step Count") {
      navigate("/stepcount");
    }
  };

  return (
    <div className="">
  
      {/* First div */}
      {!showSecondDiv && (
        <div
          className="bg-cover  bg-center flex justify-center items-center w-screen h-screen p-5"
           // Set background image
        >
          <div className="border bg-white shadow-teal-300 shadow-md w-full max-w-4xl p-8 rounded-lg  dark:text-gray-300">
            <h1 className="text-3xl text-black font-mono font-extrabold py-4">
              What’s your first name?
            </h1>
            <p className="text-black">
              We’re happy you’re here. Let’s get to know a little about you.
            </p>
            <div className="mt-5 relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
              <div className="bg-white p-7 rounded-md">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write Your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-5">
              <div className="sm:block text-center">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded hover:bg-indigo-700 transition duration-300"
                >
                  Back
                </button>
              </div>
              <div className="sm:block text-center">
                <button
                  className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded hover:bg-indigo-700 transition duration-300"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Second div */}
      {showSecondDiv && (
        <div
          className="bg-cover bg-white bg-center flex justify-center items-center w-screen h-screen p-5"
          
        >
          <div className="border  shadow-teal-300 shadow-md w-full max-w-4xl p-8 rounded-lg  ">
            <h1 className="text-3xl font-mono font-extrabold py-4">
              Thanks {firstName}! Now for your goals.
            </h1>
            <p>Select what is important to you, including one weight goal.</p>
            {goals.map((goal, index) => (
              <div
                key={index}
                onClick={() => setSelectedGoal(goal)}
                className={`mt-5 relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg cursor-pointer ${
                  selectedGoal === goal ? "bg-gray-200" : ""
                }`}
              >
                <div
                  className={`bg-white p-7 rounded-md ${
                    selectedGoal === goal ? "bg-gray-200" : ""
                  }`}
                >
                  <span
                    className={`text-xl font-bold ${
                      selectedGoal === goal ? "text-indigo-600" : "text-gray-800"
                    }`}
                  >
                    {goal}
                  </span>
                </div>
              </div>
            ))}
            <div className="flex justify-center gap-6 mt-5">
              <div className="sm:block text-center">
                <button
                  onClick={() => navigate(-1)} // Navigate one step back in history
                  className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded hover:bg-indigo-700 transition duration-300"
                >
                  Back
                </button>
              </div>
              <div className="sm:block text-center">
                <button
                  className={`bg-indigo-600 text-white font-semibold py-2 px-6 rounded hover:bg-indigo-700 transition duration-300 ${
                    !selectedGoal ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleProceedClick}
                  disabled={!selectedGoal} 
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Health;
