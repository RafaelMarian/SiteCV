// src/pages/SportsBook.jsx
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import '../SportsBook.css';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="book-page sports-page" ref={ref}>
            <div className="page-content">
                {props.children}
            </div>
        </div>
    );
});

const SportsBook = ({ hobby, lang }) => {
    return (
        <div className="book-container">
            <HTMLFlipBook
                width={450}
                height={600}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={420}
                maxHeight={1350}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                className="hobby-book sports-book"
            >
                {/* Cover Page */}
                <Page number={1}>
                    <div className="book-cover sports-cover">
                        <h1>{lang === 'en' ? 'The Book of Strength' : 'Cartea Forței'}</h1>
                        <p>{hobby.title[lang]}</p>
                    </div>
                </Page>

                {/* Introduction */}
                <Page number={2}>
                    <div className="page-text-content">
                        <h2 className="sports-title">{lang === 'en' ? 'Chapter 1: The Beginning' : 'Capitolul 1: Începutul'}</h2>
                        <p>{lang === 'en' ? 'My journey into the world of fitness and strength.' : 'Călătoria mea în lumea fitness-ului și a forței.'}</p>
                        <p>{hobby.summary[lang]}</p>
                    </div>
                </Page>
                <Page number={3}>
                     <div className="page-text-content">
                        <p>{lang === 'en' ? 'Placeholder text about the early days of training...' : 'Text placeholder despre primele zile de antrenament...'}</p>
                    </div>
                </Page>

                 {/* Chapter 2 */}
                <Page number={4}>
                    <div className="page-text-content">
                        <h2 className="sports-title">{lang === 'en' ? 'Chapter 2: Core Principles' : 'Capitolul 2: Principii de Bază'}</h2>
                        <p>{lang === 'en' ? 'The fundamental principles that guide my training.' : 'Principiile fundamentale care îmi ghidează antrenamentul.'}</p>
                    </div>
                </Page>
                <Page number={5}>
                     <div className="page-text-content">
                        {hobby.principles.map((principle, index) => (
                            <div key={index} className="principle-item-sports">
                                <h4>{principle.title[lang]}</h4>
                            </div>
                        ))}
                    </div>
                </Page>

                {/* Back Cover */}
                <Page number={6}>
                    <div className="book-back-cover sports-back-cover">
                        <p>{lang === 'en' ? 'To be continued...' : 'Va urma...'}</p>
                    </div>
                </Page>
            </HTMLFlipBook>
        </div>
    );
};

export default SportsBook;
