import React, { useRef, useEffect, useState, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const W = 400;
const H = 400;
const BRICKS_TOTAL = 40;

export default function BreakoutGame({ lang }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('menu');
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const t = miniLabels(lang);
  const activeRef = useRef(false);
  const g = useRef({
    paddleX: 160,
    ball: { x: 200, y: 300, vx: 3, vy: -3 },
    bricks: [],
    raf: 0,
  });

  const initBricks = () => {
    const b = [];
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 8; col++) {
        b.push({ x: 20 + col * 46, y: 40 + row * 22, w: 42, h: 18, alive: true });
      }
    }
    g.current.bricks = b;
  };

  const draw = (ctx, paddleX, ball, bricks) => {
    ctx.fillStyle = '#0c1929';
    ctx.fillRect(0, 0, W, H);
    bricks.forEach((br) => {
      if (!br.alive) return;
      ctx.fillStyle = '#f97316';
      ctx.fillRect(br.x, br.y, br.w, br.h);
      ctx.strokeStyle = '#000';
      ctx.strokeRect(br.x, br.y, br.w, br.h);
    });
    ctx.fillStyle = '#38bdf8';
    ctx.fillRect(paddleX, H - 28, 80, 12);
    ctx.strokeStyle = '#000';
    ctx.strokeRect(paddleX, H - 28, 80, 12);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#fef08a';
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.stroke();
  };

  const loop = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !activeRef.current) return;
    const gr = g.current;
    const { ball, bricks } = gr;
    ball.x += ball.vx;
    ball.y += ball.vy;
    if (ball.x < 8 || ball.x > W - 8) ball.vx *= -1;
    if (ball.y < 8) ball.vy *= -1;
    if (ball.y > H - 12) {
      activeRef.current = false;
      cancelAnimationFrame(gr.raf);
      setWon(false);
      setPhase('over');
      return;
    }
    const py = H - 28;
    if (ball.y > py - 8 && ball.y < py + 14 && ball.x > gr.paddleX && ball.x < gr.paddleX + 80) {
      ball.vy = -Math.abs(ball.vy);
      const hit = (ball.x - (gr.paddleX + 40)) / 40;
      ball.vx += hit * 2;
    }
    bricks.forEach((br) => {
      if (!br.alive) return;
      if (
        ball.x > br.x &&
        ball.x < br.x + br.w &&
        ball.y > br.y &&
        ball.y < br.y + br.h
      ) {
        br.alive = false;
        ball.vy *= -1;
        setScore((s) => s + 1);
      }
    });
    if (bricks.every((b) => !b.alive)) {
      activeRef.current = false;
      cancelAnimationFrame(gr.raf);
      setWon(true);
      setPhase('over');
      return;
    }
    draw(ctx, gr.paddleX, ball, bricks);
    gr.raf = requestAnimationFrame(loop);
  }, []);

  const start = () => {
    setScore(0);
    setWon(false);
    g.current.paddleX = 160;
    g.current.ball = { x: 200, y: 300, vx: 2.8, vy: -3 };
    initBricks();
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
    const onKey = (e) => {
      if (phase !== 'playing') return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        g.current.paddleX = Math.max(0, g.current.paddleX - 14);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        g.current.paddleX = Math.min(W - 80, g.current.paddleX + 14);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase]);

  return (
    <div className="mini-game-root">
      <canvas ref={canvasRef} className="mini-game-canvas" width={W} height={H} />
      <div className="mini-game-score">
        {t.score}: {score}/{BRICKS_TOTAL}
      </div>
      {phase === 'playing' && (
        <div className="mini-game-hint">{lang === 'en' ? '← → paddle' : '← → paleta'}</div>
      )}
      {phase === 'menu' && (
        <div className="mini-game-overlay">
          <h2>Breakout</h2>
          <p>{lang === 'en' ? 'Clear all bricks.' : 'Sparge toate cărămizile.'}</p>
          <button type="button" onClick={start}>
            {t.start}
          </button>
        </div>
      )}
      {phase === 'over' && (
        <div className="mini-game-overlay">
          <h2>{won ? t.win : t.over}</h2>
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
