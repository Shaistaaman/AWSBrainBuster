import React from 'react';
import { LogOut, ArrowRight } from 'lucide-react';

interface FeedbackActionsProps {
  score: number;
  onClose: () => void;
  onFinish: () => void;
}

export const FeedbackActions: React.FC<FeedbackActionsProps> = ({ score, onClose, onFinish }) => {
  return (
    <div className="flex flex-col w-full gap-3 mt-4">
      <button
        onClick={onClose}
        className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all"
      >
        <ArrowRight className="w-5 h-5" />
        Continue Playing
      </button>
      <button
        onClick={onFinish}
        className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all"
      >
        <LogOut className="w-5 h-5" />
        Finish Game (Score: {score})
      </button>
    </div>
  );
};