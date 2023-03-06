import { Octave } from "./Octave";
import { Settings } from "./Settings";
import { octavesConfig } from "./octavesConfig";
import styles from "./styles.module.css";

import { usePianoContext } from "../../providers/pianoContext";

export function Piano() {
  const { loading } = usePianoContext();

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <>
      <div className={styles.piano}>
        {octavesConfig.map(({ scale, keys }) => (
          <Octave key={scale} scale={scale} keyMap={keys} />
        ))}
      </div>

      <Settings />
    </>
  );
}
