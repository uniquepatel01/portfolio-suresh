import React, { useState, useEffect } from 'react';

type Word = {
    text: string;
};

interface TypewriterEffectProps {
    words: Word[];
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex].text;
        let typingSpeed = 150;
        if (isDeleting) {
            typingSpeed = 100;
        }

        const handleTyping = () => {
            if (!isDeleting) {
                // Add next character
                setDisplayedText(currentWord.substring(0, displayedText.length + 1));
                if (displayedText.length + 1 === currentWord.length) {
                    // Pause at the end before deleting
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000);
                }
            } else {
                // Remove one character
                setDisplayedText(currentWord.substring(0, displayedText.length - 1));
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, words, currentWordIndex]);

    return <span>{displayedText}</span>;
};