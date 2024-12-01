import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

export default function Home() {
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
          <div className="bg-black rounded-md h-56 flex items-center justify-center text-2xl text-white">
            <RocketLaunchIcon className="h-16 w-16 text-green-500 animate-pulse" />
            <span>Live Game Interface</span>
          </div>
          {/* Scoreboard */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Live Scores</h3>
            <ul className="mt-2">
              <li>Player1: 120x</li>
              <li>Player2: 95x</li>
              <li>Player3: 88x</li>
            </ul>
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
