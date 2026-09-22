import styles from "./SafetyLabel.module.css";

export function AlertSymbol() {
  return (
    <svg className={styles.symbol} viewBox="0 0 48 42" aria-hidden="true" focusable="false">
      <path className={styles.symbolTriangle} d="M24 2.5 46 39.5H2Z" strokeLinejoin="round" strokeWidth="3" />
      <rect className={styles.symbolMark} x="21.25" y="13" width="5.5" height="15" rx="1.2" />
      <rect className={styles.symbolMark} x="21.25" y="31" width="5.5" height="5.2" rx="1.2" />
    </svg>
  );
}
