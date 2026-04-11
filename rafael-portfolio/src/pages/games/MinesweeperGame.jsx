import React, { useState, useMemo, useRef, useEffect } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const ROWS = 8;
const COLS = 8;
const MINES = 10;

function makeEmpty() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
}

function placeMines(firstR, firstC) {
  const g = makeEmpty();
  let n = 0;
  while (n < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (g[r][c] === -1) continue;
    if (r === firstR && c === firstC) continue;
    g[r][c] = -1;
    n++;
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (g[r][c] === -1) continue;
      let cnt = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && g[nr][nc] === -1) cnt++;
        }
      }
      g[r][c] = cnt;
    }
  }
  return g;
}

export default function MinesweeperGame({ lang }) {
  const t = miniLabels(lang);
  const [board, setBoard] = useState(null);
  const [revealed, setRevealed] = useState(() =>
    Array.from({ length: ROWS }, () => Array(COLS).fill(false))
  );
  const [flags, setFlags] = useState(() =>
    Array.from({ length: ROWS }, () => Array(COLS).fill(false))
  );
  const [over, setOver] = useState(false);
  const [win, setWin] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const flagsRef = useRef(flags);
  flagsRef.current = flags;

  const flagCount = useMemo(() => flags.flat().filter(Boolean).length, [flags]);

  useEffect(() => {
    if (!board || over || win || showMenu) return;
    let hidden = 0;
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (!revealed[i][j] && board[i][j] !== -1) hidden++;
      }
    }
    if (hidden === 0) setWin(true);
  }, [board, revealed, over, win, showMenu]);

  const reset = () => {
    setBoard(null);
    setRevealed(Array.from({ length: ROWS }, () => Array(COLS).fill(false)));
    setFlags(Array.from({ length: ROWS }, () => Array(COLS).fill(false)));
    setOver(false);
    setWin(false);
    setShowMenu(true);
  };

  const reveal = (r, c) => {
    if (over || win || showMenu) return;
    if (flagsRef.current[r][c]) return;

    let b = board;
    if (!b) {
      b = placeMines(r, c);
      setBoard(b);
    }
    if (b[r][c] === -1) {
      setOver(true);
      return;
    }

    setRevealed((prev) => {
      const rev = prev.map((row) => [...row]);
      const flood = (rr, cc) => {
        if (rr < 0 || rr >= ROWS || cc < 0 || cc >= COLS) return;
        if (rev[rr][cc]) return;
        const fl = flagsRef.current[rr][cc];
        if (fl) return;
        rev[rr][cc] = true;
        if (b[rr][cc] === 0) {
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) flood(rr + dr, cc + dc);
          }
        }
      };
      flood(r, c);
      return rev;
    });
  };

  const toggleFlag = (e, r, c) => {
    e.preventDefault();
    if (over || win || showMenu) return;
    if (revealed[r][c]) return;
    setFlags((f) => {
      const n = f.map((row) => [...row]);
      n[r][c] = !n[r][c];
      return n;
    });
  };

  const cellSize = 44;

  return (
    <div className="mini-game-root">
      <div className="mini-game-score" style={{ fontSize: '0.55rem' }}>
        {t.flags}: {flagCount}/{MINES}
      </div>
      <div
        className="mini-game-grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${cellSize}px)`,
          paddingTop: 36,
        }}
      >
        {Array.from({ length: ROWS }, (_, r) =>
          Array.from({ length: COLS }, (_, c) => {
            const v = board ? board[r][c] : 0;
            const rev = revealed[r][c];
            const fl = flags[r][c];
            return (
              <button
                key={`${r}-${c}`}
                type="button"
                className="mini-game-cell"
                style={{
                  width: cellSize,
                  height: cellSize,
                  fontSize: '0.65rem',
                  padding: 0,
                  background: rev ? '#1e293b' : '#475569',
                  borderColor: '#000',
                }}
                onClick={() => reveal(r, c)}
                onContextMenu={(e) => toggleFlag(e, r, c)}
              >
                {fl && !rev ? '🚩' : ''}
                {rev && v === -1 ? '💥' : ''}
                {rev && v > 0 ? v : ''}
              </button>
            );
          })
        )}
      </div>
      <div className="mini-game-hint" style={{ position: 'absolute', bottom: 4, fontSize: '0.4rem' }}>
        {lang === 'en' ? 'Click · right-click flag' : 'Click · dreapta steag'}
      </div>
      {showMenu && (
        <div className="mini-game-overlay" style={{ padding: '14px' }}>
          <p style={{ fontSize: '0.45rem', marginBottom: 8 }}>8×8 · {MINES} mines</p>
          <button type="button" onClick={() => setShowMenu(false)}>
            {t.start}
          </button>
        </div>
      )}
      {(over || win) && (
        <div className="mini-game-overlay">
          <h2>{win ? t.win : t.over}</h2>
          <button type="button" onClick={reset}>
            {t.again}
          </button>
        </div>
      )}
    </div>
  );
}
