// pages/login.js
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import Popup from "@/app/pops/popupmesg";
import Navbar from "../components/Navbar";  // Import the Navbar component

function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupColor, setPopupColor] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSignUpNow = () => {
    router.push("/signup"); 
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successfully");
      setPopupMessage("Signed in successfully");
      setPopupColor("green");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        router.push("/language");
      }, 500); // Redirect after 2 seconds
    } catch (error) {
      console.error("Error signing in:", error);
      setPopupMessage("Username or password wrong");
      setPopupColor("red");
      setShowPopup(true);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("Signed in with Google successfully");
      setPopupMessage("Signed in with Google successfully");
      setPopupColor("green");
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        router.push("/language");
      }, 500); // Redirect after 2 seconds
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setPopupMessage("Failed to sign in with Google");
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
      <div className="flex flex-col md:flex-row h-screen items-center justify-center p-4 bg-white-200 pt-60 md:pt-16">
        {/* Login Form */}
        <div className="flex flex-col items-center gap-6 bg-white p-8 shadow-md rounded-md bg-opacity-80 backdrop-blur-md">
          <h2 className="text-2xl font-bold text-black">Welcome back</h2>
          <form className="flex flex-col items-center gap-4" onSubmit={handleSignIn}>
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
            <button
              type="submit"
              className="w-full p-3 bg-teal-600 text-white rounded hover:bg-teal-700"
            >
              Sign in
            </button>
           
            <p className="mt-4 text-gray-600">
              Don't have an account?{" "}
              <span
                className="text-teal-600 cursor-pointer"
                onClick={handleSignUpNow}
              >
                Sign up now
              </span>
            </p>
          </form>
        </div>
        {showPopup && <Popup message={popupMessage} color={popupColor} onClose={closePopup} />}
      </div>
    </div>
  );
}

export default SignInPage;
