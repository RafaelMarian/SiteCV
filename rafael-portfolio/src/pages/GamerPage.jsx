import React, { useState, useMemo } from 'react';
import '../GamerPage.css';
import { MINI_GAME_LIST, miniGameLabel } from './games/gameRegistry';

const GamerPage = ({ hobby, lang }) => {
  const [gameId, setGameId] = useState('flappy');
  const Active = useMemo(
    () => MINI_GAME_LIST.find((g) => g.id === gameId)?.component ?? MINI_GAME_LIST[0].component,
    [gameId]
  );

  return (
    <div className="gamer-page-container">
      <div className="gamer-header">
        <h1 className="gamer-title">{hobby.title[lang]}</h1>
      </div>
      <div className="gamer-content">
        <div className="pc-animation">
          <div className="monitor">
            <div className="gamer-game-bar">
              <label className="gamer-game-label" htmlFor="gamer-game-select">
                {lang === 'ro' ? 'Joc' : 'Game'}
              </label>
              <select
                id="gamer-game-select"
                className="gamer-game-select"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
              >
                {MINI_GAME_LIST.map(({ id }) => (
                  <option key={id} value={id}>
                    {miniGameLabel(id, lang)}
                  </option>
                ))}
              </select>
            </div>
            <div className="screen">
              <Active lang={lang} />
            </div>
          </div>
          <div className="keyboard" />
        </div>
        <div className="gamer-text">
          <p>{hobby.summary[lang]}</p>
        </div>
      </div>
    </div>
  );
};

export default GamerPage;
