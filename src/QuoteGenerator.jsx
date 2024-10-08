import React from 'react';


const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
];

const QuoteGenerator = () => {
    
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    
    const quote = getRandomQuote();

    return (
        <div style={{ textAlign: 'center', margin: '20px', fontFamily: 'Arial, sans-serif' , backgroundColor:'green' ,color:'white' }}>
            <h2>Random Quote</h2>
            <p style={{ fontStyle: 'italic' }}>{quote}</p>
        </div>
    );
};

export default QuoteGenerator;
