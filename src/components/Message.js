import React, { useState, useEffect } from 'react';
import './Message.css';

const Message = () => {
    const [text, setText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const sentence = " Welcome to Brooklyn stoop sale invitation";

    useEffect(() => {
        let index = 0;
        setText(''); // Reset text when component mounts
        setIsTypingComplete(); // Reset typing state

        const interval = setInterval(() => {
            if (index < sentence.length - 1) {
                setText((prevText) => prevText + sentence[index]);
                index++;
            } else {
                clearInterval(interval);
                setIsTypingComplete(true); // Mark typing as complete
            }
        }, 100);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []); // Removed sentence as a dependency

    return (
        <div className="message-container">
            <h1 className={`typewriter ${isTypingComplete ? 'typing-complete' : ''}`}>{text}</h1>
        </div>
    );
};

export default Message;
