import { useEffect, useRef, useState } from "react";

import { getOctaveKeyValues } from "../components/Piano/octavesConfig";

const octaveKeyValues = getOctaveKeyValues();

export function useKeyboard() {
  // Stores pressed keyboard keys at the same time
  const [pressedKeys, setPressedKeys] = useState([]);
  // Stores ref of piano container to handle keyboard events
  const pianoAreaRef = useRef();

  useEffect(() => {
    if (pianoAreaRef.current) {
      // Focus Piano area from the beginning
      pianoAreaRef.current.focus();

      // Listen to keydown and keyup events
      pianoAreaRef.current.addEventListener("keydown", _handleKeyDown);
      pianoAreaRef.current.addEventListener("keyup", _handleKeyUp);
    }
  }, []);

  // Add pressed key to state
  const _handleKeyDown = (e) => {
    if (octaveKeyValues.includes(e.key)) {
      setPressedKeys((keys) => {
        if (keys.includes(e.key)) {
          return keys;
        }

        return [...keys, e.key];
      });
    }
  };

  // Remove pressed key from state
  const _handleKeyUp = (e) => {
    if (octaveKeyValues.includes(e.key)) {
      setPressedKeys((keys) => {
        const index = keys.indexOf(e.key);
        keys.splice(index, 1);

        return [...keys];
      });
    }
  };

  return { pressedKeys, pianoAreaRef };
}
