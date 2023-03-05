import { useEffect, useState } from "react";

import { usePianoContext } from "../providers/pianoContext";

export function useNote(note, key) {
  const [active, setActive] = useState(false);
  const { pressedKeys, mouseDown, setMouseDown, keyDown, keyUp } =
    usePianoContext();

  useEffect(() => {
    if (pressedKeys.includes(key)) {
      _playNote();
    } else {
      if (active) {
        _releaseNote();
      }
    }
  }, [pressedKeys]);

  const captureMouseEvent = (e) => {
    e.preventDefault();

    switch (e.type) {
      case "mousedown":
        setMouseDown(true);

        if (!active) {
          _playNote();
        }

        break;

      case "mouseup":
        setMouseDown(false);

        if (active) {
          _releaseNote();
        }

        break;

      case "mouseover":
        if (mouseDown) {
          _playNote();
        }

        break;

      case "mouseleave":
        if (active) {
          _releaseNote();
        }

        break;
    }
  };

  const _playNote = () => {
    setActive(true);
    keyDown(note);
  };

  const _releaseNote = () => {
    setActive(false);
    keyUp(note);
  };

  return { active, captureMouseEvent };
}
