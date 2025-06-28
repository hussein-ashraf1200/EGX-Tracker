import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStart = () => {
    navigate("/login");
  };

  return (
    <main className="flex flex-col mt-5 justify-center items-center font-news">
      {/* SEO Meta Tags */}
      <title>Welcome | EGX Tracker</title>
      <meta
        name="description"
        content="Track the Egyptian Stock Market (EGX) in real time. Stay informed with live data and expert analysis."
      />
      touch .gitignore
      {/* Hero Image */}
      <img
        className="p-2"
        src="https://res.cloudinary.com/ddigrrkv7/image/upload/f_auto,q_auto,w_800/v1751109880/welcome_clspg2.png"
        loading="lazy"
        alt="Illustration welcoming users to EGX Tracker"
        width="100%"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      {/* Heading and Description */}
      <h1 className="font-bold sm:text-3xl text-xl text-center mt-4">
        Welcome to EGX Tracker
      </h1>
      <p className="text-xs sm:text-xl p-2 text-center">
        Stay ahead in the Egyptian stock market with real-time data and expert
        analysis.
      </p>
      {/* CTA Button */}
      <button
        onClick={handleGetStart}
        aria-label="Get started with EGX Tracker"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm sm:text-base transition-all"
      >
        Get Started
      </button>
    </main>
  );
};

export default Welcome;
