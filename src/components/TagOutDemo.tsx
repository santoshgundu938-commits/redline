"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CONTRACT, FLAGS, type Flag } from "./demoContract";
import { SafetyLabel } from "./SafetyLabel";
import styles from "./TagOutDemo.module.css";

type Placement = { top: number; leader: string };

const COLUMN_MIN_WIDTH = 780;
const LABEL_GAP = 18;
const STAGGER_MS = 520;

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function TagOutDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const markRefs = useRef(new Map<string, HTMLElement>());
  const labelRefs = useRef(new Map<string, HTMLElement>());

  const [active, setActive] = useState<string | null>(null);
  const [placements, setPlacements] = useState<Record<string, Placement>>({});
  const [applied, setApplied] = useState<Set<string>>(() => new Set());
  const [finished, setFinished] = useState(false);

  const place = useCallback(() => {
    const root = rootRef.current;
    const sheet = sheetRef.current;
    if (!root || !sheet || root.clientWidth < COLUMN_MIN_WIDTH) {
      setPlacements({});
      return;
    }

    const rootBox = root.getBoundingClientRect();
    const sheetBox = sheet.getBoundingClientRect();
    const byPosition = FLAGS.map((flag) => {
      const mark = markRefs.current.get(flag.id);
      const firstLine = mark?.getClientRects()[0];
      return { flag, lineTop: firstLine ? firstLine.top - rootBox.top : 0, lineHeight: firstLine?.height ?? 24 };
    }).sort((a, b) => a.lineTop - b.lineTop);

    const tops: Record<string, { top: number; lineTop: number; lineHeight: number; panelHeight: number; labelLeft: number }> = {};
    let floor = 0;
    for (const { flag, lineTop, lineHeight } of byPosition) {
      const label = labelRefs.current.get(flag.id);
      const labelHeight = label?.offsetHeight ?? 160;
      const panelHeight = (label?.firstElementChild as HTMLElement | null)?.offsetHeight ?? 40;
      const top = Math.max(lineTop - panelHeight / 2 + lineHeight / 2, floor);
      floor = top + labelHeight + LABEL_GAP;

      const labelLeft = (label?.parentElement?.getBoundingClientRect().left ?? sheetBox.right + 40) - rootBox.left;
      tops[flag.id] = { top, lineTop, lineHeight, panelHeight, labelLeft };
    }

    // Keep the stack inside the sheet's height so the top-tier label stays in view.
    const overflow = floor - LABEL_GAP - sheetBox.height;
    const lift = overflow > 0 ? Math.min(overflow, Math.min(...Object.values(tops).map((t) => t.top))) : 0;

    const sheetEdge = sheetBox.right - rootBox.left;
    const next: Record<string, Placement> = {};
    for (const [id, t] of Object.entries(tops)) {
      const top = t.top - lift;
      const fromY = top + t.panelHeight / 2;
      const toY = t.lineTop + t.lineHeight / 2;
      const elbow = sheetEdge + (t.labelLeft - sheetEdge) * 0.45;
      next[id] = { top, leader: `M ${t.labelLeft} ${fromY} H ${elbow} L ${sheetEdge - 14} ${toY}` };
    }
    setPlacements(next);
  }, []);

  useIsoLayoutEffect(() => {
    place();
    const observer = new ResizeObserver(() => place());
    if (rootRef.current) observer.observe(rootRef.current);
    document.fonts?.ready.then(place);
    return () => observer.disconnect();
  }, [place]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current;
    if (reduced || !root || !("IntersectionObserver" in window)) {
      setApplied(new Set(FLAGS.map((f) => f.id)));
      setFinished(true);
      return;
    }

    const timers: number[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        [...FLAGS]
          .sort((a, b) => a.rank - b.rank)
          .forEach((flag, index) => {
            timers.push(
              window.setTimeout(() => {
                setApplied((prev) => new Set(prev).add(flag.id));
                if (index === FLAGS.length - 1) setFinished(true);
              }, 350 + index * STAGGER_MS),
            );
          });
      },
      { threshold: 0.35 },
    );
    observer.observe(root);
    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const flagById = (id: string) => FLAGS.find((f) => f.id === id) as Flag;
  const stateClass = (id: string) =>
    [applied.has(id) ? styles.applied : "", active === id ? styles.active : "", active && active !== id ? styles.dimmed : ""]
      .filter(Boolean)
      .join(" ");

  const labelProps = (flag: Flag) => ({
    signal: flag.signal,
    rank: `${flag.rank} of ${FLAGS.length}`,
    hazard: flag.hazard,
    consequence: flag.consequence,
    ask: flag.ask,
    tabIndex: 0,
    "aria-describedby": `sentence-${flag.id}`,
    onMouseEnter: () => setActive(flag.id),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(flag.id),
    onBlur: () => setActive(null),
  });

  return (
    <div ref={rootRef} className={`${styles.demo} ${finished ? styles.finished : ""}`} data-tagout>
      <div ref={sheetRef} className={`${styles.sheet} on-paper`}>
        <p className={styles.madeUp}>Made-up contract</p>
        <p className={styles.docTitle}>Independent Contractor Agreement</p>
        <p className={styles.parties}>
          Between Northwind Studio LLC (“Client”) and the contractor named below (“Contractor”).
        </p>

        {CONTRACT.map((clause) => (
          <div key={clause.heading} className={styles.clause}>
            <p className={styles.clauseHeading}>{clause.heading}</p>
            <p className={styles.clauseText}>
              {clause.segments.map((segment, i) =>
                typeof segment === "string" ? (
                  <span key={i}>{segment}</span>
                ) : (
                  <mark
                    key={i}
                    id={`sentence-${segment.flag}`}
                    ref={(node) => {
                      if (node) markRefs.current.set(segment.flag, node);
                    }}
                    className={`${styles.mark} ${styles[flagById(segment.flag).signal]} ${stateClass(segment.flag)}`}
                    onMouseEnter={() => setActive(segment.flag)}
                    onMouseLeave={() => setActive(null)}
                  >
                    {segment.text}
                  </mark>
                ),
              )}
            </p>
            {clause.segments.map((segment) =>
              typeof segment === "string" ? null : (
                <div key={`inline-${segment.flag}`} className={`${styles.inlineLabel} ${stateClass(segment.flag)}`}>
                  <SafetyLabel {...labelProps(flagById(segment.flag))} />
                </div>
              ),
            )}
          </div>
        ))}
      </div>

      <div className={styles.column} aria-hidden={Object.keys(placements).length === 0 ? true : undefined}>
        {FLAGS.map((flag) => (
          <div
            key={flag.id}
            className={`${styles.pinned} ${stateClass(flag.id)}`}
            style={placements[flag.id] ? { top: placements[flag.id].top } : undefined}
          >
            <SafetyLabel
              {...labelProps(flag)}
              labelRef={(node: HTMLElement | null) => {
                if (node) labelRefs.current.set(flag.id, node);
              }}
            />
          </div>
        ))}
      </div>

      <svg className={styles.leaders} aria-hidden="true" focusable="false">
        {FLAGS.map((flag) =>
          placements[flag.id] ? (
            <path
              key={flag.id}
              d={placements[flag.id].leader}
              pathLength={1}
              className={`${styles.leader} ${styles[flag.signal]} ${stateClass(flag.id)}`}
            />
          ) : null,
        )}
      </svg>
    </div>
  );
}
