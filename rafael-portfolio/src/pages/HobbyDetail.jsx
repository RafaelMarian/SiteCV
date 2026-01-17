// src/pages/HobbyDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { hobbies } from '../data';
import BookLayout from './BookLayout';
import SportsBook from './SportsBook';
import GamerPage from './GamerPage';
import '../BookLayout.css';
import '../SportsBook.css';
import '../GamerPage.css';
import { ArrowLeft } from 'lucide-react';

const HobbyDetail = ({ lang }) => {
    const { hobbyId } = useParams();
    const hobby = hobbies.find(h => h.id === hobbyId);

    if (!hobby) {
        return (
            <div className="container" style={{ textAlign: 'center' }}>
                <h2>Hobby not found</h2>
                <Link to="/hobbies">Go back to hobbies</Link>
            </div>
        );
    }
    
    const renderHobbyLayout = () => {
        switch (hobby.layout) {
            case 'book':
                return <BookLayout hobby={hobby} lang={lang} />;
            case 'sports-book':
                return <SportsBook hobby={hobby} lang={lang} />;
            case 'gamer-page':
                return <GamerPage hobby={hobby} lang={lang} />;
            default:
                return <div>Default layout for {hobby.title[lang]}</div>;
        }
    };

    return (
        <div className="hobby-detail-page book-background">
             <Link to="/hobbies" className="back-link-book">
                <ArrowLeft size={16} /> Back to Hobbies
            </Link>
            {renderHobbyLayout()}
        </div>
    );
};

export default HobbyDetail;

