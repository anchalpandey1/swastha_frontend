import { useState } from 'react';

const GoalForm = ({ onSubmit }) => {
  const [goalData, setGoalData] = useState({
    goalType: 'weight-loss',  // Weight loss or gain
    gender: '',
    dob: '',
    currentWeight: '',
    goalWeight: '',
    height: '',
    activityLevel: '',
    timeFrame: '', // Number of weeks/months
  });

  const handleChange = (e) => {
    setGoalData({ ...goalData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(goalData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Goal</label>
        <select name="goalType" value={goalData.goalType} onChange={handleChange} className="mt-1 block w-full border border-gray-300 p-2 rounded-md">
          <option value="weight-loss">Weight Loss</option>
          <option value="weight-gain">Weight Gain</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Gender</label>
        <select name="gender" value={goalData.gender} onChange={handleChange} className="mt-1 block w-full border border-gray-300 p-2 rounded-md">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Date of Birth</label>
        <input type="date" name="dob" value={goalData.dob} onChange={handleChange} className="mt-1 block w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Current Weight (kg)</label>
        <input type="number" name="currentWeight" value={goalData.currentWeight} onChange={handleChange} className="mt-1 block w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Goal Weight (kg)</label>
        <input type="number" name="goalWeight" value={goalData.goalWeight} onChange={handleChange} className="mt-1 block w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Height (cm)</label>
        <input type="number" name="height" value={goalData.height} onChange={handleChange} className="mt-1 block w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Activity Level</label>
        <select name="activityLevel" value={goalData.activityLevel} onChange={handleChange} className="mt-1 block w-full border border-gray-300 p-2 rounded-md">
          <option value="">Select Activity Level</option>
          <option value="sedentary">Sedentary (Little to no exercise)</option>
          <option value="light">Light (Exercise 1-3 days/week)</option>
          <option value="moderate">Moderate (Exercise 3-5 days/week)</option>
          <option value="active">Active (Exercise 6-7 days/week)</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Time Frame (weeks)</label>
        <input type="number" name="timeFrame" value={goalData.timeFrame} onChange={handleChange} className="mt-1 block w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Get Plan</button>
    </form>
  );
};

export default GoalForm;
