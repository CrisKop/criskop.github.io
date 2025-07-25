import { useState, useEffect } from "react";

const useTypingEffect = (
  phrases,
  textContainerRef,
  cursorRef,
  typingSpeed = 50,
  eraseSpeed = 35,
  pauseBetweenPhrases = 2000,
  pauseBeforeTyping = 500
) => {
  const [typingState, setTypingState] = useState({
    phraseIndex: 0,
    charIndex: 0,
    isTyping: true,
  });

  useEffect(() => {
    const textContainer = textContainerRef.current;
    textContainer.style.minHeight = textContainer.clientHeight + "px";

    let typingTimeout;
    let eraseTimeout;

    function typeText() {
      if (typingState.charIndex < phrases[typingState.phraseIndex].length) {
        typingTimeout = setTimeout(() => {
          setTypingState((prevState) => ({
            ...prevState,
            charIndex: prevState.charIndex + 1,
          }));
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setTypingState((prevState) => ({
            ...prevState,
            isTyping: false,
          }));
          eraseText();
        }, pauseBetweenPhrases);
      }
    }

    function eraseText() {
      if (typingState.charIndex > 0) {
        eraseTimeout = setTimeout(() => {
          setTypingState((prevState) => ({
            ...prevState,
            charIndex: prevState.charIndex - 1,
          }));
        }, eraseSpeed);
      } else {
        setTypingState((prevState) => ({
          ...prevState,
          phraseIndex: (prevState.phraseIndex + 1) % phrases.length,
          isTyping: true,
        }));
        setTimeout(() => {
          typeText();
        }, pauseBeforeTyping);
      }
    }

    if (typingState.isTyping) {
      typeText();
    } else {
      eraseText();
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(eraseTimeout);
    };
  }, [typingState, phrases, typingSpeed, eraseSpeed, pauseBetweenPhrases, pauseBeforeTyping]);

  return { currentText: phrases[typingState.phraseIndex].substring(0, typingState.charIndex) };
};

export default useTypingEffect;
