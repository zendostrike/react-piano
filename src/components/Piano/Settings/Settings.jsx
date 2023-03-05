import { usePianoContext } from "../../../providers/pianoContext";
import styles from "./styles.module.css";

export function Settings() {
  const { pedal, pedalDown, pedalUp } = usePianoContext();

  const handlePedal = () => {
    if (pedal) {
      pedalUp();
    } else {
      pedalDown();
    }
  };

  return (
    <div className={styles.settings}>
      <div className={styles.option}>
        <button
          className={pedal ? styles.on : styles.off}
          type="button"
          onClick={handlePedal}
        >
          {pedal ? "ON" : "OFF"}
        </button>
        <div>PEDAL</div>
      </div>
    </div>
  );
}
