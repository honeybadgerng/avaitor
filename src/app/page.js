"use client"; // Add this line at the very top

import React, { useEffect, useState } from "react";

export default function Home() {
  // State to track time spent in the air (in microseconds)
  const [timeInAir, setTimeInAir] = useState(0);
  const [isFlying, setIsFlying] = useState(false);

  // Function to handle the flying animation and time tracking
  useEffect(() => {
    let timer; // No need for types in plain JavaScript

    // Start flying when the game starts
    if (isFlying) {
      const startTime = Date.now();

      // Update the time in air every millisecond
      timer = window.setInterval(() => {
        setTimeInAir(Math.floor((Date.now() - startTime) / 1000)); // Convert ms to microseconds
      }, 1);
    } else {
      setTimeInAir(0); // Reset time when flying stops
    }

    // Clean up interval when flying stops
    return () => clearInterval(timer);
  }, [isFlying]);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="p-4 flex justify-between items-center bg-gray-800">
        <h1 className="text-lg font-bold">Aviator</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline">Home</li>
            <li className="hover:underline">Games</li>
            <li className="hover:underline">Profile</li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* Game Interface */}
        <div className="bg-gray-700 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Aviator Game</h2>
          <div className="relative bg-black rounded-md h-56 flex items-center justify-center text-2xl text-white">
            {/* Superhero Flying Animation */}
            <div
              className={`absolute transition-all duration-1000 ease-in-out ${
                isFlying
                  ? "transform translate-y-[-150px]"
                  : "transform translate-y-0"
              }`}
              style={{ top: `${Math.random() * 50}%` }} // Randomized Y position
            >
              <img
                src="/angel.png"
                alt="Flying Hero"
                className="h-16 w-16 object-contain"
              />
            </div>
            {/* <span>Live Game Interface</span> */}
          </div>

          {/* Microseconds Display */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">
              Time in Air: {timeInAir} secs
            </h3>
          </div>

          {/* Button to start/stop flying */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setIsFlying(!isFlying)}
              className="bg-green-500 text-white py-2 px-4 rounded-md"
            >
              {isFlying ? "Stop Flying" : "Start Flying"}
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 flex justify-around items-center">
        <button className="bg-green-500 text-white py-2 px-4 rounded-md">
          Bet
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Cash Out
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md">
          History
        </button>
      </footer>
    </div>
  );
}
