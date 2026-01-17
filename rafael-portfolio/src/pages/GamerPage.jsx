// src/pages/GamerPage.jsx
import React from 'react';
import '../GamerPage.css';
import FlappyBird from './FlappyBird';

const GamerPage = ({ hobby, lang }) => {
    return (
        <div className="gamer-page-container">
            <div className="gamer-header">
                <h1 className="gamer-title">{hobby.title[lang]}</h1>
            </div>
            <div className="gamer-content">
                <div className="pc-animation">
                    <div className="monitor">
                        <div className="screen">
                            <FlappyBird />
                        </div>
                    </div>
                    <div className="keyboard"></div>
                </div>
                <div className="gamer-text">
                    <p>{hobby.summary[lang]}</p>
                </div>
            </div>
        </div>
    );
};

export default GamerPage;
