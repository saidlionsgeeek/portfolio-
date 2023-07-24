import React, { useEffect, useState } from 'react'

export default function Sectionone() {
    const typedStrings = ['Developer', 'Freelancer', 'Photographer'];
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentString, setCurrentString] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentString((prevString) => {
                if (prevString === typedStrings[currentStringIndex]) {
                    setCurrentStringIndex((prevIndex) => (prevIndex + 1) % typedStrings.length);
                    return '';
                } else {
                    const nextCharacter = typedStrings[currentStringIndex][prevString.length];
                    return prevString + nextCharacter;
                }
            });
        }, 600);

       
        return () => clearInterval(interval);
    }, [currentString, currentStringIndex]);
    return (
        <section id="home" className="d-flex flex-column justify-content-center align-items-center">
            <div class="hero-container" data-aos="fade-in">
                <h1 >Said Issabbane</h1>
                <p>I'm <span className="typed ">{currentString}</span></p>
            </div>
        </section>
    )
}
