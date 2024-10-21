import React, { useState } from "react";
import { Link,useNavigate  } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState(null);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileUrl(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("gender", gender);
    formData.append("country", country);

    if (profileUrl) {
      formData.append("profileUrl", profileUrl); // Change 'profileImage' to 'profileUrl'

    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/signup", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage("User registered successfully!");
        navigate("/login"); 
      } else {
        setErrorMessage(result.message || "Registration failed.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold mb-4">Sign up</h1>
            <form onSubmit={handleSubmit} className="w-full flex-1">
              <div className="mx-auto max-w-xs">
                {/* Error and Success messages */}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                
                {/* Name input */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                
                {/* Email input */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                {/* Password input */}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
                {/* Profile Image upload */}
                <div className="mt-5 font-medium px-8 py-4 text-sm">
                  <label className="block text-gray-700">Profile Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100"
                  />
                  {profileUrl && (
                    <img
                      src={URL.createObjectURL(profileUrl)}
                      alt="Profile Preview"
                      className="mt-3 h-16 w-16 rounded-full object-cover"
                    />
                  )}
                </div>

                {/* Gender selection */}
                <div className="mt-5 font-medium px-8 py-4 text-sm">
                  <label className="block text-gray-700">Gender</label>
                  <div className="flex items-center">
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="mr-2"
                        onChange={() => setGender("male")}
                      />
                      Male
                    </label>
                    <label className="mr-4">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="mr-2"
                        onChange={() => setGender("female")}
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        className="mr-2"
                        onChange={() => setGender("other")}
                      />
                      Other
                    </label>
                  </div>
                </div>

                {/* Country selection */}
                <div className="mt-5 font-medium px-8 py-4 text-sm">
                  <label className="block text-gray-700">Country</label>
                  <select
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                     <option value="">Select Country</option> {/* Add a default option */}
  <option value="india">India</option>
  <option value="other">Other</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3">Submit</span>
                </button>

                <Link to="/login">
                  <button
                    type="button"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <span className="ml-3">Login</span>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
