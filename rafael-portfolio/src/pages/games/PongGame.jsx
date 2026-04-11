import React, { useRef, useEffect, useState, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const W = 400;
const H = 400;

export default function PongGame({ lang }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('menu');
  const [pScore, setPScore] = useState(0);
  const [cScore, setCScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const t = miniLabels(lang);
  const activeRef = useRef(false);
  const scoresRef = useRef({ p: 0, c: 0 });
  const g = useRef({
    py: 160,
    cy: 160,
    ball: { x: 200, y: 200, vx: 4, vy: 2.5 },
    raf: 0,
  });

  const draw = (ctx) => {
    const { py, cy, ball } = g.current;
    ctx.fillStyle = '#052e16';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = '#22c55e';
    ctx.setLineDash([8, 12]);
    ctx.beginPath();
    ctx.moveTo(W / 2, 0);
    ctx.lineTo(W / 2, H);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#fff';
    ctx.fillRect(12, py, 10, 70);
    ctx.fillRect(W - 22, cy, 10, 70);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, 8, 0, Math.PI * 2);
    ctx.fill();
  };

  const loop = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !activeRef.current) return;
    const gr = g.current;
    const b = gr.ball;
    b.x += b.vx;
    b.y += b.vy;
    if (b.y < 10 || b.y > H - 10) b.vy *= -1;
    if (b.x < 28 && b.y > gr.py && b.y < gr.py + 70) {
      b.vx = Math.abs(b.vx) * 1.02;
      b.vy += (b.y - (gr.py + 35)) * 0.08;
    }
    if (b.x > W - 28 && b.y > gr.cy && b.y < gr.cy + 70) {
      b.vx = -Math.abs(b.vx) * 1.02;
      b.vy += (b.y - (gr.cy + 35)) * 0.08;
    }
    const target = b.y - 35 + (b.vx > 0 ? 0 : (Math.random() - 0.5) * 40);
    gr.cy += (target - gr.cy) * 0.06;
    gr.cy = Math.max(20, Math.min(H - 90, gr.cy));
    if (b.x < 0) {
      scoresRef.current.c += 1;
      setCScore(scoresRef.current.c);
      if (scoresRef.current.c >= 7) {
        activeRef.current = false;
        cancelAnimationFrame(gr.raf);
        setWinner('cpu');
        setPhase('over');
        return;
      }
      resetBall(gr, 1);
    }
    if (b.x > W) {
      scoresRef.current.p += 1;
      setPScore(scoresRef.current.p);
      if (scoresRef.current.p >= 7) {
        activeRef.current = false;
        cancelAnimationFrame(gr.raf);
        setWinner('you');
        setPhase('over');
        return;
      }
      resetBall(gr, -1);
    }
    draw(ctx);
    gr.raf = requestAnimationFrame(loop);
  }, []);

  const resetBall = (gr, dir) => {
    gr.ball = { x: W / 2, y: H / 2, vx: 4 * dir, vy: 2 + Math.random() * 2 };
  };

  const start = () => {
    setWinner(null);
    scoresRef.current = { p: 0, c: 0 };
    setPScore(0);
    setCScore(0);
    g.current.py = 160;
    g.current.cy = 160;
    resetBall(g.current, Math.random() > 0.5 ? 1 : -1);
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
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        g.current.py = Math.max(10, g.current.py - 16);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        g.current.py = Math.min(H - 80, g.current.py + 16);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase]);

  return (
    <div className="mini-game-root">
      <canvas ref={canvasRef} className="mini-game-canvas" width={W} height={H} />
      <div className="mini-game-score">
        {pScore} — {cScore}
      </div>
      {phase === 'playing' && (
        <div className="mini-game-hint">{lang === 'en' ? '↑ ↓ you (left)' : '↑ ↓ tu (stânga)'}</div>
      )}
      {phase === 'menu' && (
        <div className="mini-game-overlay">
          <h2>Pong</h2>
          <p>{lang === 'en' ? 'First to 7 points. You are left.' : 'Primul la 7 puncte. Ești în stânga.'}</p>
          <button type="button" onClick={start}>
            {t.start}
          </button>
        </div>
      )}
      {phase === 'over' && (
        <div className="mini-game-overlay">
          <h2>{winner === 'you' ? t.win : t.lose}</h2>
          <p>
            {pScore} — {cScore}
          </p>
          <button type="button" onClick={start}>
            {t.again}
          </button>
        </div>
      )}
    </div>
  );
}
