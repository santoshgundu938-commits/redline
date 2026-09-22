import type { HTMLAttributes, Ref } from "react";
import { AlertSymbol } from "./AlertSymbol";
import styles from "./SafetyLabel.module.css";

export type Signal = "danger" | "warning" | "caution" | "notice";

const WORDS: Record<Signal, string> = {
  danger: "Danger",
  warning: "Warning",
  caution: "Caution",
  notice: "Notice",
};

type SafetyLabelProps = {
  signal: Signal;
  rank?: string;
  hazard: string;
  consequence?: string;
  ask?: string;
  size?: "sheet" | "full";
  labelRef?: Ref<HTMLElement>;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function SafetyLabel({
  signal,
  rank,
  hazard,
  consequence,
  ask,
  size = "sheet",
  labelRef,
  className,
  ...rest
}: SafetyLabelProps) {
  const classes = [styles.label, styles[signal], styles[size], className].filter(Boolean).join(" ");

  return (
    <article ref={labelRef} className={classes} {...rest}>
      <header className={styles.panel}>
        {signal !== "notice" && <AlertSymbol />}
        <span className={styles.word}>{WORDS[signal]}</span>
        {rank && <span className={styles.rank}>{rank}</span>}
      </header>
      <div className={styles.message}>
        <p className={styles.hazard}>{hazard}</p>
        {consequence && <p className={styles.consequence}>{consequence}</p>}
        {ask && (
          <p className={styles.ask}>
            <span className={styles.askLead}>Ask for</span> {ask}
          </p>
        )}
      </div>
    </article>
  );
}
