import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);



const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);

}


  return (
    <div>
      <div className="absolute">
        <Header />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/IN-en-20251215-TRIFECTA-perspective_a8575e53-99ab-4f16-a2d6-c037acaf12a6_medium.jpg"
          alt="Netflix Background"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto opacity-90 rounded-lg text-white  left-1/2 transform -translate-x-1/2">
        <span className="centered-container flex flex-col">
        <h1 className="text-white text-3xl font-bold p-4">{isSignInForm?"Sign In":"Sign up"}</h1>


        {!isSignInForm &&<input
          type="text"
          placeholder="Full Name"
          className="p-4 m-3 placeholder:text-white bg-gray-700 border-white w-full"
        />}
        
        <input
          type="text"
          placeholder="Email Address "
          className="p-4 m-3  placeholder:text-white bg-gray-700 border-white w-full"
        />
       
        <input
          type="text"
          placeholder="Password"
          className="p-4 m-3 placeholder:text-white bg-gray-700 border-white w-full"
        />
        <button className="p-4 m-3 w-full bg-red-600 text-white font-bold rounded">
         {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white py-4 m-3"   onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign up now." : "Already Registered? Sign In Now."}</p>
        </span>
      </form>
    </div> 
  );
};

export default Login;
