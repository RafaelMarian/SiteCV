/** Shared UI strings for mini-games (EN / RO) */
export function miniLabels(lang) {
  const L = lang === 'ro' ? 'ro' : 'en';
  const t = {
    en: {
      start: 'Start',
      again: 'Again',
      over: 'Game Over',
      score: 'Score',
      win: 'You win!',
      lose: 'You lose',
      time: 'Time',
      flags: 'Flags',
      pairs: 'Pairs',
    },
    ro: {
      start: 'Start',
      again: 'Încă o dată',
      over: 'Joc terminat',
      score: 'Scor',
      win: 'Ai câștigat!',
      lose: 'Ai pierdut',
      time: 'Timp',
      flags: 'Steaguri',
      pairs: 'Perechi',
    },
  };
  return t[L];
}

export const GAME_LABELS = {
  flappy: { en: 'Flappy Bird', ro: 'Flappy Bird' },
  snake: { en: 'Snake', ro: 'Șarpe' },
  breakout: { en: 'Breakout', ro: 'Breakout' },
  pong: { en: 'Pong', ro: 'Pong' },
  asteroids: { en: 'Asteroids', ro: 'Asteroizi' },
  dino: { en: 'Dino Run', ro: 'Dino' },
  jetpack: { en: 'Jetpack', ro: 'Jetpack' },
  lanes: { en: 'Lane Run', ro: '3 benzi' },
  g2048: { en: '2048 (3×3)', ro: '2048 (3×3)' },
  mines: { en: 'Minesweeper', ro: 'Mine' },
  memory: { en: 'Memory', ro: 'Memorie' },
  ttt: { en: 'Tic-Tac-Toe', ro: 'X și 0' },
  whack: { en: 'Whack-a-mole', ro: 'Lovește cartoful' },
};
