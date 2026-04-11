import React, { useState, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const EMPTY = null;
const X = 'X';
const O = 'O';

function lineWinner(cells) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of wins) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) return cells[a];
  }
  return null;
}

function emptyIndices(cells) {
  return cells.map((v, i) => (v === EMPTY ? i : -1)).filter((i) => i >= 0);
}

function botMove(cells) {
  const empties = emptyIndices(cells);
  if (!empties.length) return -1;

  const tryWin = (sym) => {
    for (const i of empties) {
      const next = [...cells];
      next[i] = sym;
      if (lineWinner(next) === sym) return i;
    }
    return -1;
  };

  const block = tryWin(X);
  if (block >= 0) return block;

  const win = tryWin(O);
  if (win >= 0) return win;

  if (cells[4] === EMPTY) return 4;

  return empties[Math.floor(Math.random() * empties.length)];
}

export default function TicTacToeGame({ lang }) {
  const t = miniLabels(lang);
  const [cells, setCells] = useState(() => Array(9).fill(EMPTY));
  const [turn, setTurn] = useState(X);

  const winner = lineWinner(cells);
  const boardFull = !cells.includes(EMPTY);
  const over = Boolean(winner || boardFull);

  const reset = useCallback(() => {
    setCells(Array(9).fill(EMPTY));
    setTurn(X);
  }, []);

  const playHuman = (i) => {
    if (over || turn !== X || cells[i] !== EMPTY) return;
    const next = [...cells];
    next[i] = X;
    setCells(next);

    if (lineWinner(next) || !next.includes(EMPTY)) return;

    setTurn(O);
    window.setTimeout(() => {
      setCells((prev) => {
        if (lineWinner(prev) || !prev.includes(EMPTY)) return prev;
        const idx = botMove(prev);
        if (idx < 0) return prev;
        const n = [...prev];
        n[idx] = O;
        return n;
      });
      setTurn(X);
    }, 320);
  };

  let msg = '';
  if (winner === X) msg = t.win;
  else if (winner === O) msg = t.lose;
  else if (boardFull) msg = lang === 'en' ? 'Draw' : 'Egalitate';

  const size = 88;

  return (
    <div className="mini-game-root">
      <div className="mini-game-score" style={{ fontSize: '0.48rem', paddingTop: 6 }}>
        {turn === X
          ? lang === 'en'
            ? 'Your turn (X)'
            : 'Rândul tău (X)'
          : lang === 'en'
            ? 'Bot thinking…'
            : 'Bot gândește…'}
      </div>
      <div
        className="mini-game-grid"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          maxWidth: size * 3 + 24,
          margin: '0 auto',
          paddingTop: 36,
          gap: 6,
        }}
      >
        {cells.map((v, i) => (
          <button
            key={i}
            type="button"
            className="mini-game-cell"
            style={{
              width: size,
              height: size,
              fontSize: '1.6rem',
              background: '#1e293b',
            }}
            onClick={() => playHuman(i)}
            disabled={over || v !== EMPTY || turn !== X}
          >
            {v || ''}
          </button>
        ))}
      </div>
      <div className="mini-game-hint" style={{ bottom: 6, fontSize: '0.38rem' }}>
        {lang === 'en' ? 'You are X · bot is O' : 'Tu ești X · botul e O'}
      </div>
      {over && (
        <div className="mini-game-overlay">
          <h2>{msg}</h2>
          <button type="button" onClick={reset}>
            {t.again}
          </button>
        </div>
      )}
    </div>
  );
}
