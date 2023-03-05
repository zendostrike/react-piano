import { useMemo } from "react";
import { useNote } from "../../../hooks";

import styles from "./styles.module.css";

export function PianoKey({ note, keyValue, label, isSharp }) {
  const { active, captureMouseEvent } = useNote(note, keyValue);

  const pianoKeyStyles = useMemo(() => {
    let style = isSharp ? styles.sharp_note : styles.note;

    if (active) {
      style += ` ${styles.note_active}`;
    }

    return style;
  }, [active]);

  return (
    <button
      className={pianoKeyStyles}
      onMouseUp={captureMouseEvent}
      onMouseDown={captureMouseEvent}
      onMouseOver={captureMouseEvent}
      onMouseLeave={captureMouseEvent}
    >
      {label}
    </button>
  );
}
