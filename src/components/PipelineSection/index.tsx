import type {ReactNode} from 'react';
import styles from './styles.module.css';

type PipelineStep = {
  num: string;
  label: string;
  sublabel: string;
  icon: ReactNode;
};

const STEPS: PipelineStep[] = [
  {
    num: '01',
    label: 'IP Camera',
    sublabel: 'RTSP Stream',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="14" rx="3" />
        <circle cx="12" cy="13" r="3" />
        <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
        <path d="M9 3h6" />
      </svg>
    ),
  },
  {
    num: '02',
    label: 'Python + OpenCV',
    sublabel: 'Frame Processing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="13" y1="4" x2="11" y2="20" />
      </svg>
    ),
  },
  {
    num: '03',
    label: 'YOLO / Click',
    sublabel: 'Target Detection',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    num: '04',
    label: 'Homography',
    sublabel: 'px → cm Mapping',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3h5v5H3zM16 3h5v5h-5zM3 16h5v5H3zM16 16h5v5h-5z" />
        <path d="M8 5.5h8M5.5 8v8M18.5 8v8M8 18.5h8" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    num: '05',
    label: 'Command Layer',
    sublabel: 'Host PC → MCU',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4M14 10l2 2-2 2" />
      </svg>
    ),
  },
  {
    num: '06',
    label: 'Arduino UNO',
    sublabel: 'WiFi REV2 MCU',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M4 9H2M4 12H2M4 15H2M20 9h2M20 12h2M20 15h2" />
      </svg>
    ),
  },
  {
    num: '07',
    label: 'Servo + LED',
    sublabel: 'Turret & Surrogate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v8M12 2l-3 3M12 2l3 3" />
        <circle cx="12" cy="14" r="4" />
        <path d="M8 21h8M12 18v3" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function PipelineSection(): ReactNode {
  return (
    <section className={styles.section} id="pipeline">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>SYSTEM ARCHITECTURE</span>
          <h2 className={styles.title}>End-to-End Pipeline</h2>
          <p className={styles.subtitle}>
            Seven stages connect a live camera to a physical servo arm —
            from raw pixels to real-world actuation.
          </p>
        </div>

        <div className={styles.pipeline} role="list">
          {STEPS.map((step, idx) => (
            <div key={step.num} className={styles.stepWrapper} role="listitem">
              <div className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <div className={styles.stepText}>
                  <span className={styles.stepLabel}>{step.label}</span>
                  <span className={styles.stepSub}>{step.sublabel}</span>
                </div>
              </div>
              {idx < STEPS.length - 1 && (
                <div className={styles.arrow} aria-hidden="true">
                  <svg viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
                    <polyline points="20,4 28,8 20,12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile stack fallback */}
        <p className={styles.pipelineCaption}>
          RTSP → OpenCV → YOLO / Click → Homography px→cm → Command → Arduino → Servo + LED
        </p>
      </div>
    </section>
  );
}
