import React from 'react';
import { Trophy, ArrowLeft, Medal } from 'lucide-react';

interface LeaderboardEntry {
  username: string;
  score: number;
  level: number;
}

interface LeaderboardScreenProps {
  onBackToStart: () => void;
  currentEntry?: LeaderboardEntry;
}

const mockLeaderboard: LeaderboardEntry[] = [
  { username: "AWSMaster", score: 450, level: 10 },
  { username: "CloudNinja", score: 380, level: 8 },
  { username: "ServerlessGuru", score: 350, level: 7 },
];

const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ onBackToStart, currentEntry }) => {
  const allEntries = currentEntry 
    ? [...mockLeaderboard, currentEntry].sort((a, b) => b.score - a.score)
    : mockLeaderboard;

  return (
    <div className="min-h-screen bg-indigo-950 p-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBackToStart}
          className="flex items-center gap-2 text-indigo-200 hover:text-orange-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Start
        </button>

        <div className="bg-gradient-to-b from-indigo-800/50 to-indigo-900/50 rounded-xl p-6 shadow-lg border border-indigo-600/20">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-orange-400" />
            <h1 className="text-3xl font-modak text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Leaderboard
            </h1>
          </div>

          <div className="space-y-4">
            {allEntries.map((entry, index) => (
              <div
                key={entry.username}
                className={`flex items-center gap-4 ${
                  currentEntry?.username === entry.username
                    ? 'bg-orange-500/20 border-orange-500/50'
                    : 'bg-indigo-800/30 border-indigo-600/20'
                } p-4 rounded-lg border`}
              >
                <div className="flex-shrink-0 w-8 text-center">
                  {index === 0 && <Medal className="w-6 h-6 text-yellow-400" />}
                  {index === 1 && <Medal className="w-6 h-6 text-gray-400" />}
                  {index === 2 && <Medal className="w-6 h-6 text-orange-700" />}
                  {index > 2 && <span className="text-indigo-200">{index + 1}</span>}
                </div>
                <div className="flex-grow">
                  <h3 className="text-orange-200 font-semibold">{entry.username}</h3>
                  <p className="text-indigo-300 text-sm">Level {entry.level}</p>
                </div>
                <div className="text-right">
                  <p className="text-orange-400 font-bold text-xl">{entry.score}</p>
                  <p className="text-indigo-400 text-sm">points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScreen;