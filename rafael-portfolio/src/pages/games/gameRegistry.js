import FlappyBird from '../FlappyBird';
import SnakeGame from './SnakeGame';
import BreakoutGame from './BreakoutGame';
import PongGame from './PongGame';
import AsteroidsGame from './AsteroidsGame';
import DinoGame from './DinoGame';
import JetpackGame from './JetpackGame';
import LaneRunnerGame from './LaneRunnerGame';
import Game2048 from './Game2048';
import MinesweeperGame from './MinesweeperGame';
import MemoryGame from './MemoryGame';
import TicTacToeGame from './TicTacToeGame';
import WhackGame from './WhackGame';
import { GAME_LABELS } from './labels';

export const MINI_GAME_LIST = [
  { id: 'flappy', component: FlappyBird },
  { id: 'snake', component: SnakeGame },
  { id: 'breakout', component: BreakoutGame },
  { id: 'pong', component: PongGame },
  { id: 'asteroids', component: AsteroidsGame },
  { id: 'dino', component: DinoGame },
  { id: 'jetpack', component: JetpackGame },
  { id: 'lanes', component: LaneRunnerGame },
  { id: 'g2048', component: Game2048 },
  { id: 'mines', component: MinesweeperGame },
  { id: 'memory', component: MemoryGame },
  { id: 'ttt', component: TicTacToeGame },
  { id: 'whack', component: WhackGame },
];

export function miniGameLabel(id, lang) {
  const L = lang === 'ro' ? 'ro' : 'en';
  const row = GAME_LABELS[id];
  return row ? row[L] : id;
}
