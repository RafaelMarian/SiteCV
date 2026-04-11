// src/pages/HobbyDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { hobbies } from '../data';
import BookLayout from './BookLayout';
import FitnessCoachPage from './FitnessCoachPage';
import HikingNaturePage from './HikingNaturePage';
import GamerPage from './GamerPage';
import '../BookLayout.css';
import '../GamerPage.css';
import { ArrowLeft } from 'lucide-react';

const HobbyDetail = ({ lang }) => {
  const { hobbyId } = useParams();
  const hobby = hobbies.find((h) => h.id === hobbyId);

  if (!hobby) {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>Hobby not found</h2>
        <Link to="/hobbies">Go back to hobbies</Link>
      </div>
    );
  }

  const backLabel =
    lang === 'ro' ? 'Înapoi la hobby-uri' : 'Back to Hobbies';

  const scrollLayouts = ['fitness-coach', 'hiking-nature'];
  const pageClassName = scrollLayouts.includes(hobby.layout)
    ? 'hobby-detail-page hobby-detail-scroll'
    : 'hobby-detail-page book-background';

  const renderHobbyLayout = () => {
    switch (hobby.layout) {
      case 'book':
        return <BookLayout hobby={hobby} lang={lang} />;
      case 'fitness-coach':
        return <FitnessCoachPage hobby={hobby} lang={lang} />;
      case 'hiking-nature':
        return <HikingNaturePage hobby={hobby} lang={lang} />;
      case 'gamer-page':
        return <GamerPage hobby={hobby} lang={lang} />;
      default:
        return <div>Default layout for {hobby.title[lang]}</div>;
    }
  };

  return (
    <div className={pageClassName}>
      <Link to="/hobbies" className="back-link-book">
        <ArrowLeft size={16} /> {backLabel}
      </Link>
      {renderHobbyLayout()}
    </div>
  );
};

export default HobbyDetail;
