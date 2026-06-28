import type {ReactNode} from 'react';
import styles from './styles.module.css';

type FeatureCard = {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
};

const FEATURES: FeatureCard[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="14" rx="3" />
        <circle cx="12" cy="13" r="3.5" />
        <path d="M9 2h6M12 2v4" />
        <circle cx="12" cy="13" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Live Video Input',
    description:
      'RTSP IP camera stream captured and decoded in real time using Python and OpenCV, providing continuous frames for detection and targeting.',
    color: '#0891b2',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <path d="M17.5 17.5m-2.5 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1 -5 0" />
        <path d="M14 17.5h-3.5M17.5 14v-3.5" />
      </svg>
    ),
    title: 'Target Detection',
    description:
      'Ultralytics YOLO provides ML-assisted target detection. Manual click mode is also supported for calibration, validation, and fallback scenarios.',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3l7 7M21 3l-7 7M3 21l7-7M21 21l-7-7" />
        <rect x="8" y="8" width="8" height="8" rx="1" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
    title: 'Coordinate Mapping',
    description:
      'Homography transform converts 2D pixel coordinates from the camera frame into real-world plane coordinates in centimetres using a four-corner calibration.',
    color: '#0891b2',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Servo Actuation',
    description:
      'Formatted commands are sent from the host PC to an Arduino UNO WiFi REV2, which drives a servo-actuated arm to point a low-power LED surrogate at the target.',
    color: '#7c3aed',
  },
];

export default function ProjectOverview(): ReactNode {
  return (
    <section className={styles.section} id="overview">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>HOW IT WORKS</span>
          <h2 className={styles.title}>From Pixel to Physical Aim</h2>
          <p className={styles.subtitle}>
            Four tightly integrated stages turn a live camera feed into a
            servo-controlled pointing device — all in a safe educational mockup.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feat) => (
            <article key={feat.title} className={styles.card}>
              <div
                className={styles.iconWrap}
                style={{'--card-color': feat.color} as React.CSSProperties}
              >
                {feat.icon}
              </div>
              <h3 className={styles.cardTitle}>{feat.title}</h3>
              <p className={styles.cardDesc}>{feat.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
