import styles from "./styles.module.css";

export function StartButton({ started, onStarted }) {
  return !started ? (
    <button className={styles.start_button} type="button" onClick={onStarted}>
      Allow browser to play audio
    </button>
  ) : (
    <div />
  );
}
