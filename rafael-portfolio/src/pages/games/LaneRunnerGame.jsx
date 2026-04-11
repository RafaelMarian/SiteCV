import React, { useRef, useEffect, useState, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const W = 400;
const H = 400;
const LANES = [100, 200, 300];
const PY = 320;

export default function LaneRunnerGame({ lang }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('menu');
  const [score, setScore] = useState(0);
  const t = miniLabels(lang);
  const activeRef = useRef(false);
  const g = useRef({ lane: 1, rows: [], raf: 0, speed: 4, tick: 0 });

  const draw = (ctx) => {
    ctx.fillStyle = '#18181b';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = '#3f3f46';
    LANES.forEach((lx) => {
      ctx.beginPath();
      ctx.moveTo(lx, 0);
      ctx.lineTo(lx, H);
      ctx.stroke();
    });
    const { rows, lane } = g.current;
    rows.forEach((row) => {
      row.blocks.forEach((has, i) => {
        if (!has) return;
        const x = LANES[i];
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(x - 22, row.y, 44, 28);
        ctx.strokeStyle = '#000';
        ctx.strokeRect(x - 22, row.y, 44, 28);
      });
    });
    const px = LANES[lane];
    ctx.fillStyle = '#3b82f6';
    ctx.fillRect(px - 20, PY, 40, 36);
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(px - 20, PY, 40, 36);
  };

  const loop = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !activeRef.current) return;
    const gr = g.current;
    gr.tick += 1;
    gr.speed = 3.5 + Math.min(5, gr.tick / 200);
    if (gr.tick % 55 === 0) {
      const blocks = [false, false, false];
      const danger = Math.floor(Math.random() * 3);
      blocks[danger] = true;
      if (Math.random() > 0.5) {
        const d2 = (danger + 1 + Math.floor(Math.random() * 2)) % 3;
        blocks[d2] = true;
      }
      gr.rows.push({ y: -30, blocks });
    }
    gr.rows = gr.rows.filter((row) => {
      row.y += gr.speed;
      if (row.y > PY - 28 && row.y < PY + 20) {
        if (row.blocks[gr.lane]) {
          activeRef.current = false;
          cancelAnimationFrame(gr.raf);
          setPhase('over');
          return false;
        }
      }
      if (row.y > H) {
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
    g.current = { lane: 1, rows: [], raf: 0, speed: 4, tick: 0 };
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
        g.current.lane = Math.max(0, g.current.lane - 1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        g.current.lane = Math.min(2, g.current.lane + 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase]);

  return (
    <div className="mini-game-root">
      <canvas ref={canvasRef} className="mini-game-canvas" width={W} height={H} />
      <div className="mini-game-score">
        {t.score}: {score}
      </div>
      {phase === 'playing' && (
        <div className="mini-game-hint">{lang === 'en' ? '← → switch lane' : '← → schimbă banda'}</div>
      )}
      {phase === 'menu' && (
        <div className="mini-game-overlay">
          <h2>Lane Run</h2>
          <p>{lang === 'en' ? 'Dodge red blocks in 3 lanes.' : 'Evită blocurile roșii.'}</p>
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
