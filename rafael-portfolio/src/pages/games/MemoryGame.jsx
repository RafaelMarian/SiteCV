import React, { useState, useCallback, useMemo } from 'react';
import './MiniGame.css';
import { miniLabels } from './labels';

const ICONS = ['🍎', '🍌', '🍒', '🍇', '🍊', '🥝'];
const COLS = 4;
const ROWS = 3;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MemoryGame({ lang }) {
  const t = miniLabels(lang);
  const [deck, setDeck] = useState(() =>
    shuffle([...ICONS, ...ICONS].map((icon, i) => ({ id: i, icon, matched: false })))
  );
  const [flipped, setFlipped] = useState([]);
  const [lock, setLock] = useState(false);
  const [moves, setMoves] = useState(0);

  const pairsFound = useMemo(() => deck.filter((c) => c.matched).length / 2, [deck]);
  const done = pairsFound === ICONS.length;

  const reset = useCallback(() => {
    setDeck(shuffle([...ICONS, ...ICONS].map((icon, i) => ({ id: i, icon, matched: false }))));
    setFlipped([]);
    setLock(false);
    setMoves(0);
  }, []);

  const onCard = (index) => {
    if (lock || done) return;
    const card = deck[index];
    if (card.matched || flipped.includes(index)) return;

    const next = [...flipped, index];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      setLock(true);
      const [a, b] = next;
      if (deck[a].icon === deck[b].icon) {
        setDeck((d) =>
          d.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c))
        );
        setFlipped([]);
        setLock(false);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setLock(false);
        }, 650);
      }
    }
  };

  const cellW = 72;
  const cellH = 80;

  return (
    <div className="mini-game-root">
      <div className="mini-game-score" style={{ fontSize: '0.5rem', paddingTop: 8 }}>
        {t.pairs}: {pairsFound}/{ICONS.length} · {lang === 'en' ? 'Moves' : 'Mutări'}: {moves}
      </div>
      <div
        className="mini-game-grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, ${cellW}px)`,
          paddingTop: 40,
          gap: 6,
        }}
      >
        {deck.map((card, index) => {
          const show = card.matched || flipped.includes(index);
          return (
            <button
              key={card.id}
              type="button"
              className="mini-game-cell"
              style={{
                width: cellW,
                height: cellH,
                fontSize: '1.35rem',
                background: show ? '#0f172a' : '#475569',
                borderColor: card.matched ? '#22c55e' : '#334155',
              }}
              onClick={() => onCard(index)}
              disabled={card.matched || lock}
            >
              {show ? card.icon : '?'}
            </button>
          );
        })}
      </div>
      {done && (
        <div className="mini-game-overlay">
          <h2>{t.win}</h2>
          <p style={{ fontSize: '0.42rem' }}>
            {lang === 'en' ? 'Moves:' : 'Mutări:'} {moves}
          </p>
          <button type="button" onClick={reset}>
            {t.again}
          </button>
        </div>
      )}
    </div>
  );
}
