import React, { useState } from 'react';

export default function ProfilePhoto({ src, alt, onError }) {
  const [scopeActive, setScopeActive] = useState(false);

  const onDoubleClick = () => {
    setScopeActive(true);
    window.setTimeout(() => setScopeActive(false), 3200);
  };

  return (
    <div
      className={`profile-frame ${scopeActive ? 'profile-frame--scope' : ''}`}
      onDoubleClick={onDoubleClick}
      title="Double-click"
    >
      {scopeActive && (
        <svg
          className="profile-scope-wave"
          viewBox="0 0 400 48"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            className="profile-scope-path"
            d="M0,24 Q25,8 50,24 T100,24 T150,24 T200,24 T250,24 T300,24 T350,24 T400,24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            className="profile-scope-path profile-scope-path--dim"
            d="M0,30 Q25,18 50,30 T100,30 T150,30 T200,30 T250,30 T300,30 T350,30 T400,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.45"
          />
        </svg>
      )}
      {scopeActive && (
        <div className="profile-scope-hud" aria-hidden>
          <span>CH1</span>
          <span>1.00 kHz</span>
          <span>500 mV/div</span>
        </div>
      )}
      <img src={src} alt={alt} className="profile-img" onError={onError} />
    </div>
  );
}
