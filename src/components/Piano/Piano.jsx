import { useState } from "react";
import { start } from "tone";

import { Octave } from "./Octave";
import { Settings } from "./Settings";
import { StartButton } from "./StartButton";
import { octavesConfig } from "./octavesConfig";
import styles from "./styles.module.css";

import { usePianoContext } from "../../providers/pianoContext";

export function Piano() {
  const [audioContextStarted, setAudioContextStarted] = useState(false);

  const { loading } = usePianoContext();

  const handleStartAudioContext = async () => {
    await start();
    setAudioContextStarted(true);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!audioContextStarted) {
    return (
      <StartButton
        started={audioContextStarted}
        onStarted={handleStartAudioContext}
      />
    );
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
