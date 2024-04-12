import React, { useRef, useEffect } from 'react'

const ScrollableTextarea = ({ senderMessage, messageHandler }) => {
    const textareaRef = useRef(null);

    useEffect(() => {
        // Scroll textarea to the bottom on initial render
        textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }, []);

    const handleInput = (e) => {
        // Scroll textarea to the bottom whenever new text is added
        textareaRef.current.scrollTop = textareaRef.current.scrollHeight - textareaRef.current.clientHeight;

        // Call the message handler function to update the senderMessage state
        messageHandler(e);
    };

    return (
        <textarea
            ref={textareaRef}
            className="bg-transparent border-b border-b-white outline-none resize-none"
            rows="3"
            name="user_message"
            value={senderMessage}
            onChange={handleInput}
        />
    );
};

export default ScrollableTextarea