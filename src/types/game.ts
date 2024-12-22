export interface Question {
  id: string;
  serviceName: string;
  logoUrl: string;
  hints: string[];
  description: string;
  options: string[];
}

export interface GameState {
  currentScore: number;
  currentLevel: number;
  questions: Question[];
  currentQuestion: Question | null;
  isGameOver: boolean;
}

export interface PlayerStats {
  highScore: number;
  gamesPlayed: number;
  correctAnswers: number;
  totalAttempts: number;
}