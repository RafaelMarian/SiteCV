import React, { useRef, useEffect, useState, useCallback } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const W = 400;
const H = 400;

export default function AsteroidsGame({ lang }) {
  const canvasRef = useRef(null);
  const [phase, setPhase] = useState('menu');
  const [score, setScore] = useState(0);
  const t = miniLabels(lang);
  const activeRef = useRef(false);
  const keysRef = useRef({});
  const g = useRef({
    ship: { x: 200, y: 200, a: 0, vx: 0, vy: 0 },
    bullets: [],
    rocks: [],
    raf: 0,
    cd: 0,
  });

  const spawnRocks = () => {
    g.current.rocks = [];
    for (let i = 0; i < 6; i++) {
      g.current.rocks.push({
        x: 40 + Math.random() * 320,
        y: 40 + Math.random() * 320,
        r: 18,
        vx: (Math.random() - 0.5) * 1.8,
        vy: (Math.random() - 0.5) * 1.8,
      });
    }
  };

  const draw = (ctx) => {
    ctx.fillStyle = '#020617';
    ctx.fillRect(0, 0, W, H);
    const { ship, bullets, rocks } = g.current;
    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(ship.a);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(12, 0);
    ctx.lineTo(-10, 8);
    ctx.lineTo(-6, 0);
    ctx.lineTo(-10, -8);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
    ctx.fillStyle = '#fbbf24';
    bullets.forEach((b) => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    rocks.forEach((r) => {
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
      ctx.stroke();
    });
  };

  const loop = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !activeRef.current) return;
    const gr = g.current;
    const k = keysRef.current;
    const sh = gr.ship;
    if (k.ArrowLeft) sh.a -= 0.07;
    if (k.ArrowRight) sh.a += 0.07;
    if (k.ArrowUp) {
      sh.vx += Math.cos(sh.a) * 0.14;
      sh.vy += Math.sin(sh.a) * 0.14;
    }
    sh.vx *= 0.99;
    sh.vy *= 0.99;
    sh.x += sh.vx;
    sh.y += sh.vy;
    if (sh.x < 0) sh.x += W;
    if (sh.x > W) sh.x -= W;
    if (sh.y < 0) sh.y += H;
    if (sh.y > H) sh.y -= H;
    gr.cd = Math.max(0, gr.cd - 1);
    if (k[' '] && gr.cd === 0) {
      gr.bullets.push({
        x: sh.x + Math.cos(sh.a) * 16,
        y: sh.y + Math.sin(sh.a) * 16,
        vx: Math.cos(sh.a) * 8,
        vy: Math.sin(sh.a) * 8,
      });
      gr.cd = 14;
    }
    gr.bullets = gr.bullets.filter((b) => {
      b.x += b.vx;
      b.y += b.vy;
      return b.x > -5 && b.x < W + 5 && b.y > -5 && b.y < H + 5;
    });

    for (let ri = gr.rocks.length - 1; ri >= 0; ri--) {
      const rock = gr.rocks[ri];
      rock.x += rock.vx;
      rock.y += rock.vy;
      if (rock.x < -40) rock.x += W + 40;
      if (rock.x > W + 40) rock.x -= W + 40;
      if (rock.y < -40) rock.y += H + 40;
      if (rock.y > H + 40) rock.y -= H + 40;
      if (Math.hypot(sh.x - rock.x, sh.y - rock.y) < rock.r + 10) {
        activeRef.current = false;
        cancelAnimationFrame(gr.raf);
        setPhase('over');
        return;
      }
    }

    for (let bi = gr.bullets.length - 1; bi >= 0; bi--) {
      const b = gr.bullets[bi];
      for (let ri = gr.rocks.length - 1; ri >= 0; ri--) {
        const rock = gr.rocks[ri];
        if (Math.hypot(b.x - rock.x, b.y - rock.y) < rock.r) {
          gr.bullets.splice(bi, 1);
          gr.rocks.splice(ri, 1);
          setScore((s) => s + 10);
          break;
        }
      }
    }

    if (gr.rocks.length === 0) {
      spawnRocks();
      setScore((s) => s + 40);
    }

    draw(ctx);
    if (activeRef.current) gr.raf = requestAnimationFrame(loop);
  }, []);

  const start = () => {
    setScore(0);
    g.current.ship = { x: 200, y: 200, a: 0, vx: 0, vy: 0 };
    g.current.bullets = [];
    spawnRocks();
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
      keysRef.current[e.key] = true;
    };
    const up = (e) => {
      keysRef.current[e.key] = false;
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  return (
    <div className="mini-game-root">
      <canvas ref={canvasRef} className="mini-game-canvas" width={W} height={H} />
      <div className="mini-game-score">
        {t.score}: {score}
      </div>
      {phase === 'playing' && (
        <div className="mini-game-hint">
          {lang === 'en' ? '← → turn · ↑ thrust · Space shoot' : '← → · ↑ · Space'}
        </div>
      )}
      {phase === 'menu' && (
        <div className="mini-game-overlay">
          <h2>Asteroids</h2>
          <p>{lang === 'en' ? 'Shoot grey rings. Dodge them.' : 'Trage în cercuri. Evită-le.'}</p>
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
