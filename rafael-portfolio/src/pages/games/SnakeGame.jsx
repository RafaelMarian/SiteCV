import React, { useRef, useEffect, useState, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const W = 400;
const H = 400;
const COLS = 20;
const ROWS = 20;
const CS = W / COLS;

export default function SnakeGame({ lang }) {
  const canvasRef = useRef(null);
  const rootRef = useRef(null);
  const [phase, setPhase] = useState('menu');
  const [score, setScore] = useState(0);
  const t = miniLabels(lang);
  const g = useRef({
    snake: [],
    dir: [1, 0],
    nextDir: [1, 0],
    food: [10, 10],
    timer: null,
  });

  const randFood = (snake) => {
    let c, r;
    do {
      c = Math.floor(Math.random() * COLS);
      r = Math.floor(Math.random() * ROWS);
    } while (snake.some(([x, y]) => x === c && y === r));
    return [c, r];
  };

  const draw = useCallback((ctx, snake, food) => {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = '#1e293b';
    for (let i = 0; i <= COLS; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CS, 0);
      ctx.lineTo(i * CS, H);
      ctx.stroke();
    }
    for (let j = 0; j <= ROWS; j++) {
      ctx.beginPath();
      ctx.moveTo(0, j * CS);
      ctx.lineTo(W, j * CS);
      ctx.stroke();
    }
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(food[0] * CS + 1, food[1] * CS + 1, CS - 2, CS - 2);
    ctx.fillStyle = '#22c55e';
    snake.forEach(([x, y], i) => {
      ctx.fillStyle = i === 0 ? '#4ade80' : '#22c55e';
      ctx.fillRect(x * CS + 1, y * CS + 1, CS - 2, CS - 2);
    });
  }, []);

  const start = useCallback(() => {
    const snake = [[8, 10], [7, 10], [6, 10]];
    g.current.snake = snake;
    g.current.dir = [1, 0];
    g.current.nextDir = [1, 0];
    g.current.food = randFood(snake);
    setScore(0);
    setPhase('playing');
  }, []);

  const tick = useCallback(() => {
    const gr = g.current;
    gr.dir = gr.nextDir;
    const head = gr.snake[0];
    const nh = [head[0] + gr.dir[0], head[1] + gr.dir[1]];
    if (nh[0] < 0 || nh[0] >= COLS || nh[1] < 0 || nh[1] >= ROWS) {
      clearInterval(gr.timer);
      gr.timer = null;
      setPhase('over');
      return;
    }
    if (gr.snake.some(([x, y]) => x === nh[0] && y === nh[1])) {
      clearInterval(gr.timer);
      gr.timer = null;
      setPhase('over');
      return;
    }
    gr.snake.unshift(nh);
    if (nh[0] === gr.food[0] && nh[1] === gr.food[1]) {
      setScore((s) => s + 1);
      gr.food = randFood(gr.snake);
    } else {
      gr.snake.pop();
    }
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) draw(ctx, gr.snake, gr.food);
  }, [draw]);

  useEffect(() => {
    if (phase !== 'playing') return undefined;
    g.current.timer = setInterval(tick, 140);
    return () => {
      clearInterval(g.current.timer);
      g.current.timer = null;
    };
  }, [phase, tick]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx && phase === 'menu') {
      draw(ctx, g.current.snake.length ? g.current.snake : [[8, 10], [7, 10]], [12, 10]);
    }
  }, [phase, draw]);

  useEffect(() => {
    const onKey = (e) => {
      const op = ([x, y], [dx, dy]) => x === -dx && y === -dy;
      if (phase === 'menu' || phase === 'over') {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
          e.preventDefault();
          if (phase === 'menu') start();
        }
        return;
      }
      const m = {
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
      };
      if (m[e.key]) {
        e.preventDefault();
        const nd = m[e.key];
        if (!op(nd, g.current.dir)) g.current.nextDir = nd;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, start]);

  return (
    <div className="mini-game-root" ref={rootRef}>
      <canvas ref={canvasRef} className="mini-game-canvas" width={W} height={H} />
      <div className="mini-game-score">
        {t.score}: {score}
      </div>
      {phase === 'playing' && (
        <div className="mini-game-hint">
          {lang === 'en' ? 'Arrows to steer' : 'Săgeți pentru direcție'}
        </div>
      )}
      {phase === 'menu' && (
        <div className="mini-game-overlay">
          <h2>Snake</h2>
          <p>{lang === 'en' ? 'Eat red squares. Avoid walls & yourself.' : 'Mănâncă pătratele roșii. Evită pereții și coada.'}</p>
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
