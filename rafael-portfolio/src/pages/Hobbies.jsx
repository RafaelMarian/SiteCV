import React from 'react';
import { Link } from 'react-router-dom';
import { labels, hobbies } from '../data';
import { Dumbbell, Mountain, Gamepad2, Smile, ArrowRight, Plane } from 'lucide-react';

const Hobbies = ({ lang }) => {
  const iconMap = {
    Dumbbell,
    Mountain,
    Gamepad2,
    Plane
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

          return (
            <Link to={`/hobbies/${hobby.id}`} key={hobby.id} className="hobby-card-link">
              <div className="hobby-card">
                <div className="hobby-image-wrapper">
                  <img src={hobby.image} alt={hobby.title[lang]} className="hobby-img" />
                  <div className="hobby-overlay"></div>
                  <div className="hobby-icon-circle" style={{backgroundColor: hobby.color}}>
                    <IconComponent size={28} color="white" />
                  </div>
                </div>

                <div className="hobby-content">
                  <h3 className="hobby-title">{hobby.title[lang]}</h3>
                  <p className="hobby-desc">{hobby.summary[lang]}</p>
                  <div className="hobby-card-footer">
                    <span>{lang === 'en' ? 'Explore More' : 'Explorează'}</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;