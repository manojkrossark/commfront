// pages/signup.js
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Popup from "@/app/pops/popupmesg";
import Navbar from "../components/Navbar";  // Import the Navbar component

function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupColor, setPopupColor] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSignInNow = () => {
    router.push("/login"); 
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPopupMessage("Passwords do not match");
      setPopupColor("red");
      setShowPopup(true);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up successfully");
      setPopupMessage("Signed up successfully");
      setPopupColor("green");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        router.push("/language");
      }, 500); // Redirect after 2 seconds
    } catch (error) {
      console.error("Error signing up:", error);
      setPopupMessage("Error signing up");
      setPopupColor("red");
      setShowPopup(true);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("Signed up with Google successfully");
      setPopupMessage("Signed up with Google successfully");
      setPopupColor("green");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        router.push("/language");
      }, 500); // Redirect after 2 seconds
    } catch (error) {
      console.error("Error signing up with Google:", error);
      setPopupMessage("Failed to sign up with Google");
      setPopupColor("red");
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <Navbar />  {/* Include the Navbar component */}
      <div className="flex flex-col md:flex-row h-screen items-center justify-center p-4 bg-white-green-200 pt-60 md:pt-16">
        {/* Sign Up Form */}
         <div className="flex flex-col items-center gap-6 bg-white p-8 shadow-md rounded-md bg-opacity-80 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-black">Create an account</h2>
          <form className="flex flex-col items-center gap-4" onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-72 p-3 bg-gray-200 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-72 p-3 bg-gray-200 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-72 p-3 bg-gray-200 text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full p-3 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Sign up
            </button>            
            <p className="mt-4 text-gray-600">
              Already have an account?{" "}
              <span
                className="text-teal-600 cursor-pointer"
                onClick={handleSignInNow}
              >
                Sign in
              </span>
            </p>
          </form>
        </div>
        {showPopup && <Popup message={popupMessage} color={popupColor} onClose={closePopup} />}
      </div>
    </div>
  );
}

export default SignUpPage;
