import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Create navigate object for navigation

 const handleLogin = async (e) => {
  e.preventDefault(); // Prevent the default form submission

  try {
    const response = await fetch('http://localhost:8000/api/v1/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      const { username } = data; // Extract username from the response
      console.log(data); // Log the full response to check its structure
      localStorage.setItem('username', username); // Store username in local storage
      navigate('/profile'); // Use navigate to go to the profile page
    } else {
      console.error(data.message);
      alert(data.message);
    }    
  } catch (error) {
    console.error('Error logging in:', error);
    alert('An error occurred. Please try again.');
  }
};


  return (
    <div className='bg-white'>
      <div
        className="bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}
      >
        <div className="h-screen flex justify-center items-center">
          <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
            <form onSubmit={handleLogin}> {/* Attach handleLogin to the form */}
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email} // Bind email state
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password} // Bind password state
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                />
                <a className="text-gray-600 hover:text-gray-800" href="#">
                  Forgot your password?
                </a>
              </div>
              <div className="mb-6 space-x-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit" // Change type to submit
                >
                  Login
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
