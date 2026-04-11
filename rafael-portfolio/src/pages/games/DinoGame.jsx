import React, { useRef, useEffect, useState, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const W = 400;
const H = 400;
const GROUND = 320;
const GRAVITY = 0.65;
const JUMP = -12;

export default function DinoGame({ lang }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('menu');
  const [score, setScore] = useState(0);
  const t = miniLabels(lang);
  const activeRef = useRef(false);
  const g = useRef({
    dinoY: GROUND - 40,
    vy: 0,
    obs: [],
    tick: 0,
    speed: 5,
    raf: 0,
  });

  const draw = (ctx) => {
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, GROUND);
    ctx.lineTo(W, GROUND);
    ctx.stroke();
    const { dinoY, obs } = g.current;
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(48, dinoY, 36, 40);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(48, dinoY, 36, 40);
    ctx.fillStyle = '#14532d';
    obs.forEach((o) => {
      ctx.fillRect(o.x, GROUND - o.h, 20, o.h);
      ctx.strokeRect(o.x, GROUND - o.h, 20, o.h);
    });
  };

  const loop = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !activeRef.current) return;
    const gr = g.current;
    gr.vy += GRAVITY;
    gr.dinoY += gr.vy;
    if (gr.dinoY > GROUND - 40) {
      gr.dinoY = GROUND - 40;
      gr.vy = 0;
    }
    gr.tick += 1;
    gr.speed = 5 + Math.min(6, gr.tick / 400);
    if (gr.tick % Math.max(45, 120 - Math.floor(gr.tick / 80)) === 0) {
      gr.obs.push({ x: W, h: 28 + Math.floor(Math.random() * 22) });
    }
    gr.obs = gr.obs.filter((o) => {
      o.x -= gr.speed;
      if (o.x < 50 && o.x + 20 > 48 && gr.dinoY + 40 > GROUND - o.h) {
        activeRef.current = false;
        cancelAnimationFrame(gr.raf);
        setPhase('over');
        return false;
      }
      if (o.x < -30) {
        setScore((s) => s + 1);
        return false;
      }
      return true;
    });
    draw(ctx);
    if (activeRef.current) gr.raf = requestAnimationFrame(loop);
  }, []);

  const start = () => {
    setScore(0);
    g.current = {
      dinoY: GROUND - 40,
      vy: 0,
      obs: [],
      tick: 0,
      speed: 5,
      raf: 0,
    };
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
    const jump = () => {
      if (phase !== 'playing') return;
      if (g.current.dinoY >= GROUND - 41) g.current.vy = JUMP;
    };
    const onKey = (e) => {
      if (e.code === 'Space' || e.key === 'ArrowUp') {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase]);

  return (
    <div className="mini-game-root" onPointerDown={() => phase === 'playing' && g.current.dinoY >= GROUND - 41 && (g.current.vy = JUMP)}>
      <canvas ref={canvasRef} className="mini-game-canvas" width={W} height={H} />
      <div className="mini-game-score">
        {t.score}: {score}
      </div>
      {phase === 'playing' && (
        <div className="mini-game-hint">{lang === 'en' ? 'Space / tap to jump' : 'Space / tap să sari'}</div>
      )}
      {phase === 'menu' && (
        <div className="mini-game-overlay">
          <h2>Dino Run</h2>
          <p>{lang === 'en' ? 'Jump the cacti.' : 'Sari peste obstacole.'}</p>
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
