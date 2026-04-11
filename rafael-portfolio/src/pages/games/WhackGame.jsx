import React, { useState, useRef, useEffect, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const GRID = 3;
const DURATION_MS = 30000;
const SPAWN_MIN = 400;
const SPAWN_MAX = 1100;

export default function WhackGame({ lang }) {
  const t = miniLabels(lang);
  const [phase, setPhase] = useState('menu');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_MS);
  const [mole, setMole] = useState(-1);
  const timerRef = useRef(null);
  const spawnRef = useRef(null);
  const endAtRef = useRef(0);

  const clearTimers = useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (spawnRef.current) window.clearTimeout(spawnRef.current);
    timerRef.current = null;
    spawnRef.current = null;
  }, []);

  const scheduleSpawn = useCallback(() => {
    const delay = SPAWN_MIN + Math.random() * (SPAWN_MAX - SPAWN_MIN);
    spawnRef.current = window.setTimeout(() => {
      if (Date.now() >= endAtRef.current) return;
      setMole(Math.floor(Math.random() * GRID * GRID));
      scheduleSpawn();
    }, delay);
  }, []);

  const start = () => {
    clearTimers();
    setScore(0);
    setTimeLeft(DURATION_MS);
    setMole(-1);
    endAtRef.current = Date.now() + DURATION_MS;
    setPhase('play');

    timerRef.current = window.setInterval(() => {
      const left = Math.max(0, endAtRef.current - Date.now());
      setTimeLeft(left);
      if (left <= 0) {
        clearTimers();
        setPhase('over');
        setMole(-1);
      }
    }, 100);

    scheduleSpawn();
  };

  useEffect(() => () => clearTimers(), [clearTimers]);

  const whack = (i) => {
    if (phase !== 'play') return;
    if (i === mole) {
      setScore((s) => s + 1);
      setMole(-1);
    }
  };

  const holeSize = 92;

  return (
    <div className="mini-game-root">
      <div className="mini-game-score" style={{ fontSize: '0.48rem', paddingTop: 6 }}>
        {t.score}: {score} · {t.time}: {(timeLeft / 1000).toFixed(1)}s
      </div>
      <div
        className="mini-game-grid"
        style={{
          gridTemplateColumns: `repeat(${GRID}, ${holeSize}px)`,
          paddingTop: 38,
          gap: 8,
        }}
      >
        {Array.from({ length: GRID * GRID }, (_, i) => (
          <button
            key={i}
            type="button"
            className="mini-game-cell"
            style={{
              width: holeSize,
              height: holeSize,
              fontSize: '1.8rem',
              background: i === mole ? '#3d2c1e' : '#292524',
              borderColor: '#1c1917',
            }}
            onClick={() => whack(i)}
            disabled={phase === 'menu'}
          >
            {i === mole ? '🐹' : ''}
          </button>
        ))}
      </div>
      <div className="mini-game-hint" style={{ bottom: 4, fontSize: '0.38rem' }}>
        {lang === 'en' ? 'Tap the mole' : 'Lovește animalul'}
      </div>
      {phase === 'menu' && (
        <div className="mini-game-overlay">
          <p style={{ fontSize: '0.45rem', marginBottom: 10 }}>
            {lang === 'en' ? `${DURATION_MS / 1000}s · score hits` : `${DURATION_MS / 1000}s · lovește`}
          </p>
          <button type="button" onClick={start}>
            {t.start}
          </button>
        </div>
      )}
      {phase === 'over' && (
        <div className="mini-game-overlay">
          <h2>{t.over}</h2>
          <p style={{ fontSize: '0.5rem' }}>
            {t.score}: {score}
          </p>
          <button type="button" onClick={start}>
            {t.again}
          </button>
        </div>
      )}
    </div>
  );
}
