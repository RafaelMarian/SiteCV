import React, { useRef, useEffect, useState, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const W = 400;
const H = 400;
const GRAVITY = 0.35;
const LIFT = -0.55;
const GAP_H = 108;
const PLAYER_X = 90;

export default function JetpackGame({ lang }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('menu');
  const [score, setScore] = useState(0);
  const t = miniLabels(lang);
  const activeRef = useRef(false);
  const thrustRef = useRef(false);
  const g = useRef({
    y: 200,
    vy: 0,
    walls: [],
    raf: 0,
  });

  const draw = (ctx) => {
    ctx.fillStyle = '#1e1b4b';
    ctx.fillRect(0, 0, W, H);
    g.current.walls.forEach((w) => {
      ctx.fillStyle = '#4c1d95';
      ctx.fillRect(w.x, 0, 26, w.gapY);
      ctx.fillRect(w.x, w.gapY + GAP_H, 26, H);
      ctx.strokeStyle = '#000';
      ctx.strokeRect(w.x, 0, 26, w.gapY);
      ctx.strokeRect(w.x, w.gapY + GAP_H, 26, H);
    });
    ctx.fillStyle = '#facc15';
    ctx.beginPath();
    ctx.arc(PLAYER_X, g.current.y, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();
  };

  const loop = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !activeRef.current) return;
    const gr = g.current;
    gr.vy += thrustRef.current ? LIFT : GRAVITY;
    gr.y += gr.vy;
    if (gr.y < 16 || gr.y > H - 16) {
      activeRef.current = false;
      cancelAnimationFrame(gr.raf);
      setPhase('over');
      return;
    }
    gr.walls.forEach((w) => {
      if (w.x < PLAYER_X + 14 && w.x + 26 > PLAYER_X - 14) {
        if (gr.y - 14 < w.gapY || gr.y + 14 > w.gapY + GAP_H) {
          activeRef.current = false;
          cancelAnimationFrame(gr.raf);
          setPhase('over');
        }
      }
    });
    gr.walls = gr.walls
      .map((w) => {
        const nx = w.x - 4;
        if (!w.passed && nx + 26 < PLAYER_X - 14) {
          w.passed = true;
          setScore((s) => s + 1);
        }
        return { ...w, x: nx };
      })
      .filter((w) => w.x > -50);
    if (gr.walls.length === 0 || gr.walls[gr.walls.length - 1].x < W - 220) {
      gr.walls.push({
        x: W + 30,
        gapY: 70 + Math.random() * (H - GAP_H - 140),
        passed: false,
      });
    }
    draw(ctx);
    if (activeRef.current) gr.raf = requestAnimationFrame(loop);
  }, []);

  const start = () => {
    setScore(0);
    g.current.y = 200;
    g.current.vy = 0;
    g.current.walls = [
      { x: W + 30, gapY: 120, passed: false },
    ];
    setPhase('playing');
  };

  useEffect(() => {
    if (phase !== 'playing') return undefined;
    activeRef.current = true;
    g.current.raf = requestAnimationFrame(loop);
    return () => {
      activeRef.current = false;
      cancelAnimationFrame(g.current.raf);
    };
  }, [phase, loop]);

  useEffect(() => {
    const down = (e) => {
      if (e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault();
        thrustRef.current = true;
      }
    };
    const up = (e) => {
      if (e.code === 'Space' || e.key === 'ArrowUp') thrustRef.current = false;
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  return (
    <div
      className="mini-game-root"
      onPointerDown={() => {
        thrustRef.current = true;
      }}
      onPointerUp={() => {
        thrustRef.current = false;
      }}
      onPointerLeave={() => {
        thrustRef.current = false;
      }}
    >
      <canvas ref={canvasRef} className="mini-game-canvas" width={W} height={H} />
      <div className="mini-game-score">
        {t.score}: {score}
      </div>
      {phase === 'playing' && (
        <div className="mini-game-hint">{lang === 'en' ? 'Hold Space / click to rise' : 'Ține Space / click'}</div>
      )}
      {phase === 'menu' && (
        <div className="mini-game-overlay">
          <h2>Jetpack</h2>
          <p>{lang === 'en' ? 'Fly through gaps.' : 'Zboară prin goluri.'}</p>
          <button type="button" onClick={start}>
            {t.start}
          </button>
        </div>
      )}
      {phase === 'over' && (
        <div className="mini-game-overlay">
          <h2>{t.over}</h2>
          <p>
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
