import { useEffect, useRef, useState } from "react";
import { Piano as PianoTone } from "@tonejs/piano";

import { useKeyboard } from "../hooks";
import { PianoContext } from "./pianoContext";

export function PianoProvider({ children }) {
  const [pedal, setPedal] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [loading, setLoading] = useState(true);
  const pianoRef = useRef();

  const { pressedKeys, pianoAreaRef } = useKeyboard();

  useEffect(() => {
    // Initialize Piano Instrument
    pianoRef.current = new PianoTone({
      velocities: 5,
    });

    // Connect Instrument to your audio output
    pianoRef.current.toDestination();

    // Load piano notes files
    pianoRef.current.load().then(() => {
      setLoading(false);
    });
  }, []);

  const pedalDown = () => {
    setPedal(true);
    pianoRef.current.pedalDown();
  };

  const pedalUp = () => {
    setPedal(false);
    pianoRef.current.pedalUp();
  };

  const keyDown = (note) => {
    pianoRef.current.keyDown({ note });
  };

  const keyUp = (note) => {
    pianoRef.current.keyUp({ note });
  };

  return (
    <PianoContext.Provider
      value={{
        loading,
        pressedKeys,
        pedal,
        mouseDown,
        setMouseDown,
        pedalDown,
        pedalUp,
        keyDown,
        keyUp,
      }}
    >
      <div tabIndex="0" ref={pianoAreaRef} style={{ outline: "none" }}>
        {children}
      </div>
    </PianoContext.Provider>
  );
}
