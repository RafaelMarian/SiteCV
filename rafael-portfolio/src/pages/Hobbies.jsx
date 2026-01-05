// src/pages/Hobbies.jsx
import React, { useState } from 'react';
import { labels, hobbies } from '../data';
import { Dumbbell, Mountain, Gamepad2, Lightbulb, Smile } from 'lucide-react';

const Hobbies = ({ lang }) => {
  // Mapam string-ul din data.js la componenta reala Lucide
  const iconMap = {
    Dumbbell: Dumbbell,
    Mountain: Mountain,
    Gamepad2: Gamepad2
  };

  const [activeFunFact, setActiveFunFact] = useState(null);

  const toggleFunFact = (id) => {
    setActiveFunFact(activeFunFact === id ? null : id);
  };

  return (
    <div className="hobbies-container">
      <div style={{textAlign: 'center', marginBottom: '50px'}}>
        <h2 className="section-title">{labels[lang].titles.hobbies}</h2>
        <p style={{maxWidth: '600px', margin: '0 auto', color: 'var(--secondary-text)'}}>
          {lang === 'en' 
            ? "When I'm not coding or designing circuits, here's how I spend my time." 
            : "Când nu scriu cod sau proiectez circuite, iată cum îmi petrec timpul."}
          <Smile style={{display: 'inline', marginLeft: '8px', verticalAlign: 'middle'}} color="var(--accent-color)"/>
        </p>
      </div>

      <div className="hobbies-grid">
        {hobbies.map((hobby) => {
          const IconComponent = iconMap[hobby.icon];
          const isFunFactVisible = activeFunFact === hobby.id;

          return (
            <div key={hobby.id} className="hobby-card">
              
              {/* Imaginea de fundal cu overlay */}
              <div className="hobby-image-wrapper">
                <img src={hobby.image} alt={hobby.title[lang]} className="hobby-img" />
                <div className="hobby-overlay"></div>
                
                {/* Iconita plutitoare */}
                <div className="hobby-icon-circle" style={{backgroundColor: hobby.color}}>
                  <IconComponent size={28} color="white" />
                </div>
              </div>

              <div className="hobby-content">
                <h3 className="hobby-title">{hobby.title[lang]}</h3>
                <p className="hobby-desc">{hobby.desc[lang]}</p>

                {/* Zona de Fun Fact */}
                <div 
                  className={`fun-fact-box ${isFunFactVisible ? 'visible' : ''}`}
                  style={{borderColor: hobby.color}}
                >
                  <div style={{display:'flex', gap:'10px', alignItems:'start'}}>
                    <Lightbulb size={20} color={hobby.color} style={{flexShrink:0, marginTop:'3px'}} />
                    <span style={{fontSize: '0.9rem', fontStyle: 'italic'}}>
                      {hobby.funFact[lang]}
                    </span>
                  </div>
                </div>

                <button 
                  className="fun-fact-btn"
                  onClick={() => toggleFunFact(hobby.id)}
                  style={{color: hobby.color, borderColor: hobby.color}}
                >
                  {isFunFactVisible ? (lang === 'en' ? "Close" : "Închide") : labels[lang].buttons.funFact}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;