import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar/Navbar";

const Quize = () => {
  // Step state to handle navigation between questions
  const [step, setStep] = useState(1);
  // Answer state to store selected values
  const [answers, setAnswers] = useState({
    activity: null,
    fruits: null,
    water: null,
    stress: null,
    sleep: null,
  });

  // Options with corresponding scores
  const questions = {
    activity: {
      question: "How often do you exercise in a week?",
      options: [
        { label: "5-7 days ", value: 80 },
        { label: "3-4 days", value: 60 },
        { label: "1-2 days", value: 30 },
        { label: "Rarely/never ", value: 5 },
      ],
    },
    fruits: {
      question: "What do you typically have for breakfast?",
      options: [
        { label: "Whole grains, fruits, and protein ", value: 80 },
        { label: "Cereal or toast ", value: 80 },
        { label: "Fast food or processed breakfast", value: 30 },
        { label: "I skip breakfast", value: 10 },
      ],
    },
    water: {
      question: "How well do you maintain your daily water intake?",
      options: [
        { label: "Less than 1 liter", value: 20 },
        { label: "1-2 liters", value: 40 },
        { label: "2-3 liters", value: 60 },
        { label: "More than 3 liters", value: 80 },
      ],
    },
    stress: {
      question: "How much stress do you experience on a daily basis?",
      options: [
        { label: "Low", value: 80 },
        { label: "Moderate", value: 60 },
        { label: "High", value: 40 },
        { label: "Very high", value: 20 },
      ],
    },
    managestress: {
        question: "How do you manage stress?",
        options: [
          { label: " Regular exercise and meditation", value: 80 },
          { label: "Talking to friends or family", value: 60 },
          { label: "Watching TV or eating comfort food", value: 40 },
          { label: "I don’t manage stress", value: 10 },
        ],
      },
    sleep: {
      question: "How many hours of restful sleep do you get each week?",
      options: [
        { label: "Less than 5 hours", value: 20 },
        { label: "5-6 hours", value: 40 },
        { label: "7-8 hours", value: 60 },
        { label: "More than 8 hours", value: 80 },
      ],
    },
  };

  // Handle selecting an option
  const handleOptionChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: parseInt(e.target.value), // Store the score value
    });
  };

  // Handle next step
  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  // Handle back step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Handle final submission
  const handleSubmit = () => {
    // Calculate the total score
    const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
    const averageScore = totalScore / 6;

    // Show SweetAlert with the final score
    Swal.fire({
      title: "Your Healthy Life Score",
      text: `Your average score is ${averageScore}%`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  // Render questions based on the current step
  const renderQuestion = () => {
    const questionKeys = Object.keys(questions);
    const currentQuestionKey = questionKeys[step - 1];
    const currentQuestion = questions[currentQuestionKey];

    return (
      <div>
      <Navbar/>
        <div className="bg-white  flex justify-center items-center w-screen h-screen p-5">
        <div className="border shadow-teal-600 shadow-md max-w-2xl p-6 rounded-lg  text-black">
          <h1 className="text-2xl font-mono font-extrabold py-3">
            {currentQuestion.question}
          </h1>
          <div className="mt-5">
            {currentQuestion.options.map((option, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    name={currentQuestionKey}
                    value={option.value}
                    checked={answers[currentQuestionKey] === option.value}
                    onChange={handleOptionChange}
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-5">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded hover:bg-indigo-700 transition duration-300"
              >
                Back
              </button>
            )}
            {step < 6 ? (
              <button
                onClick={handleNext}
                className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded hover:bg-indigo-700 transition duration-300"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white font-semibold py-2 px-6 rounded hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
      </div>
    );
  };

  return <div>{renderQuestion()}</div>;
};

export default Quize;
