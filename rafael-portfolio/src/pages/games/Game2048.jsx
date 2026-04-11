import React, { useState, useCallback, useEffect } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const SIZE = 3;

function emptyGrid() {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
}

function addRandom(g) {
  const flat = [];
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (g[r][c] === 0) flat.push([r, c]);
    }
  }
  if (flat.length === 0) return g;
  const [r, c] = flat[Math.floor(Math.random() * flat.length)];
  const copy = g.map((row) => [...row]);
  copy[r][c] = Math.random() < 0.9 ? 2 : 4;
  return copy;
}

function slideLine(line) {
  const nums = line.filter((x) => x !== 0);
  const out = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      out.push(nums[i] * 2);
      i++;
    } else {
      out.push(nums[i]);
    }
  }
  while (out.length < SIZE) out.push(0);
  return out;
}

function canMove(g) {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (g[r][c] === 0) return true;
      if (c < SIZE - 1 && g[r][c] === g[r][c + 1]) return true;
      if (r < SIZE - 1 && g[r][c] === g[r + 1][c]) return true;
    }
  }
  return false;
}

export default function Game2048({ lang }) {
  const t = miniLabels(lang);
  const [grid, setGrid] = useState(() => addRandom(addRandom(emptyGrid())));
  const [over, setOver] = useState(false);
  const [won, setWon] = useState(false);

  const tryMove = useCallback(
    (dir) => {
      if (over) return;
      setGrid((g) => {
        let next = emptyGrid();
        if (dir === 'l') {
          for (let r = 0; r < SIZE; r++) next[r] = slideLine(g[r]);
        } else if (dir === 'r') {
          for (let r = 0; r < SIZE; r++) next[r] = slideLine([...g[r]].reverse()).reverse();
        } else if (dir === 'u') {
          for (let c = 0; c < SIZE; c++) {
            const col = [g[0][c], g[1][c], g[2][c]];
            const s = slideLine(col);
            for (let r = 0; r < SIZE; r++) next[r][c] = s[r];
          }
        } else if (dir === 'd') {
          for (let c = 0; c < SIZE; c++) {
            const col = [g[2][c], g[1][c], g[0][c]];
            const s = slideLine(col);
            for (let r = 0; r < SIZE; r++) next[SIZE - 1 - r][c] = s[r];
          }
        }
        const same = next.every((row, ri) => row.every((v, ci) => v === g[ri][ci]));
        if (same) return g;
        next = addRandom(next);
        if (next.some((row) => row.some((v) => v >= 128))) setWon(true);
        if (!canMove(next)) setOver(true);
        return next;
      });
    },
    [over]
  );

  useEffect(() => {
    const onKey = (e) => {
      const m = { ArrowLeft: 'l', ArrowRight: 'r', ArrowUp: 'u', ArrowDown: 'd' };
      if (m[e.key]) {
        e.preventDefault();
        tryMove(m[e.key]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tryMove]);

  const reset = () => {
    setOver(false);
    setWon(false);
    setGrid(addRandom(addRandom(emptyGrid())));
  };

  const colors = {
    0: '#334155',
    2: '#e2e8f0',
    4: '#cbd5e1',
    8: '#94a3b8',
    16: '#64748b',
    32: '#475569',
    64: '#f97316',
    128: '#ea580c',
  };

  return (
    <div className="mini-game-root">
      <div
        className="mini-game-grid"
        style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)`, maxWidth: 360, margin: '0 auto' }}
      >
        {grid.flatMap((row, ri) =>
          row.map((v, ci) => (
            <div
              key={`${ri}-${ci}`}
              className="mini-game-cell"
              style={{
                width: 110,
                height: 110,
                fontSize: v >= 100 ? '1.4rem' : '1.75rem',
                background: colors[v] || '#7c2d12',
                color: v <= 4 ? '#0f172a' : '#fff',
              }}
            >
              {v || ''}
            </div>
          ))
        )}
      </div>
      <div className="mini-game-hint" style={{ position: 'absolute', bottom: 6 }}>
        {lang === 'en' ? 'Arrows — merge tiles (goal 128)' : 'Săgeți — ținta 128'}
      </div>
      {won && !over && (
        <div className="mini-game-score" style={{ top: 44, fontSize: '0.55rem', color: '#4ade80' }}>
          128 ✓
        </div>
      )}
      {over && (
        <div className="mini-game-overlay">
          <h2>{won ? t.win : t.over}</h2>
          <button type="button" onClick={reset}>
            {t.again}
          </button>
        </div>
      )}
    </div>
  );
}
