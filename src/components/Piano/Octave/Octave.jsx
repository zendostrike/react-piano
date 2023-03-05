import { PianoKey } from "../PianoKey/PianoKey";
import styles from "./styles.module.css";

export function Octave({ scale, keyMap }) {
  return (
    <div className={styles.octave}>
      <div className={styles.note_wrapper}>
        {keyMap.C && (
          <PianoKey note={`C${scale}`} label="DO" keyValue={keyMap.C} />
        )}

        {keyMap["C#"] && (
          <div className={styles.sharp_note_wrapper}>
            <PianoKey
              isSharp
              note={`C#${scale}`}
              label="C#"
              keyValue={keyMap["C#"]}
            />
          </div>
        )}
      </div>

      <div className={styles.note_wrapper}>
        {keyMap.D && (
          <PianoKey note={`D${scale}`} label="RE" keyValue={keyMap.D} />
        )}

        {keyMap["D#"] && (
          <div className={styles.sharp_note_wrapper}>
            <PianoKey
              isSharp
              note={`D#${scale}`}
              label="D#"
              keyValue={keyMap["D#"]}
            />
          </div>
        )}
      </div>

      {keyMap.E && (
        <PianoKey note={`E${scale}`} label="MI" keyValue={keyMap.E} />
      )}

      <div className={styles.note_wrapper}>
        {keyMap.F && (
          <PianoKey note={`F${scale}`} label="FA" keyValue={keyMap.F} />
        )}

        {keyMap["F#"] && (
          <div className={styles.sharp_note_wrapper}>
            <PianoKey
              isSharp
              note={`F#${scale}`}
              label="F#"
              keyValue={keyMap["F#"]}
            />
          </div>
        )}
      </div>

      <div className={styles.note_wrapper}>
        {keyMap.G && (
          <PianoKey note={`G${scale}`} label="SOL" keyValue={keyMap.G} />
        )}

        {keyMap["G#"] && (
          <div className={styles.sharp_note_wrapper}>
            <PianoKey
              isSharp
              note={`G#${scale}`}
              label="G#"
              keyValue={keyMap["G#"]}
            />
          </div>
        )}
      </div>

      <div className={styles.note_wrapper}>
        {keyMap.A && (
          <PianoKey note={`A${scale}`} label="LA" keyValue={keyMap.A} />
        )}

        {keyMap["A#"] && (
          <div className={styles.sharp_note_wrapper}>
            <PianoKey
              isSharp
              note={`A#${scale}`}
              label="A#"
              keyValue={keyMap["A#"]}
            />
          </div>
        )}
      </div>

      {keyMap.B && (
        <PianoKey note={`B${scale}`} label="SI" keyValue={keyMap.B} />
      )}
    </div>
  );
}
