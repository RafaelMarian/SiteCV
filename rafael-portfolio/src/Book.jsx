// src/Book.jsx
import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="book-page" ref={ref}>
            <div className="page-content">
                {props.children}
            </div>
        </div>
    );
});

const Book = ({ hobby, lang }) => {

    const allImages = [hobby.image, ...(hobby.gallery || [])];
    let pageIndex = 0;

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
                className="hobby-book"
            >
                {/* Cover Page */}
                <Page number={pageIndex++}>
                    <div className="book-cover">
                        <img src={hobby.image} alt={hobby.title[lang]} className="cover-img" />
                        <h1>{hobby.title[lang]}</h1>
                    </div>
                </Page>

                {/* --- First Text Page --- */}
                <Page number={pageIndex++}>
                    <div className="page-text-content">
                        <h2 className="beautiful-title">{lang === 'en' ? 'An Introduction' : 'O Introducere'}</h2>
                        <p>{hobby.summary[lang]}</p>
                    </div>
                </Page>

                {/* --- Image Pages --- */}
                {allImages.slice(1, 6).map((img, index) => (
                    <Page key={index} number={pageIndex++}>
                        <div className="page-image-content">
                            <img src={img} alt={`Page ${index + 1}`} />
                        </div>
                    </Page>
                ))}

                 {/* --- Second Text Page --- */}
                <Page number={pageIndex++}>
                    <div className="page-text-content">
                        <h2 className="beautiful-title">{lang === 'en' ? 'The Journey' : 'Călătoria'}</h2>
                        {hobby.journey.map((item, index) => (
                            <div key={index} className="journey-item-book">
                                <h4>{item.title[lang]}</h4>
                                <p>{item.description[lang]}</p>
                            </div>
                        ))}
                    </div>
                </Page>

                {/* --- More Image Pages --- */}
                {allImages.slice(6, 11).map((img, index) => (
                    <Page key={index} number={pageIndex++}>
                        <div className="page-image-content">
                            <img src={img} alt={`Page ${index + 6}`} />
                        </div>
                    </Page>
                ))}

                {/* Back Cover */}
                <Page number={pageIndex++}>
                    <div className="book-back-cover">
                        <p>{lang === 'en' ? 'The End' : 'Sfârșit'}</p>
                    </div>
                </Page>
            </HTMLFlipBook>
        </div>
    );
};

export default Book;
