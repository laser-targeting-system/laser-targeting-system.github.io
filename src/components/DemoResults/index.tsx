import type {ReactNode} from 'react';
import styles from './styles.module.css';

const CAPABILITIES = [
  'RTSP stream capture and live display via OpenCV',
  'Four-corner homography calibration workflow',
  'Pixel-to-centimetre coordinate conversion',
  'Manual click validation and target mode',
  'YOLO-based target detection (model in progress)',
  'Arduino-driven servo arm demonstration',
  'LED / laser surrogate pointing behaviour',
  'End-to-end command pipeline (PC → WiFi → Arduino)',
];

const LIMITATIONS = [
  'Servo drift and mechanical instability under load',
  'Reduced detection robustness under projector/wall testing due to domain shift',
  'Final centimetre-to-servo-angle mapping still under development',
  'Model generalisation limited to current dataset diversity',
];

function CheckIcon(): ReactNode {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.5)" strokeWidth="1.2" />
      <polyline points="6,10 9,13 14,7" stroke="rgba(34,197,94,0.9)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarnIcon(): ReactNode {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="9" fill="rgba(251,191,36,0.12)" stroke="rgba(251,191,36,0.45)" strokeWidth="1.2" />
      <line x1="10" y1="6" x2="10" y2="11" stroke="rgba(251,191,36,0.9)" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="10" cy="14" r="0.9" fill="rgba(251,191,36,0.9)" />
    </svg>
  );
}

export default function DemoResults(): ReactNode {
  return (
    <section className={styles.section} id="results">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>DEMO &amp; RESULTS</span>
          <h2 className={styles.title}>Working Prototype</h2>
          <p className={styles.subtitle}>
            A functional end-to-end demonstrator with clear next engineering steps — honest
            about current limitations, proud of what's been achieved.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Capabilities column */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon} data-type="success">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>What Works</h3>
            </div>
            <ul className={styles.list}>
              {CAPABILITIES.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.listIcon}><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Limitations column */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon} data-type="warning">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Known Limitations</h3>
            </div>
            <ul className={styles.list}>
              {LIMITATIONS.map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.listIcon}><WarnIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.note}>
              <span className={styles.noteIcon}>💡</span>
              <p>
                These are well-understood engineering challenges. Each one has a clear path to
                resolution documented in the future work section below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
