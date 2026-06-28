import type {ReactNode} from 'react';
import styles from './styles.module.css';

type TechItem = {
  label: string;
  abbr: string;
  color: string;
  category: string;
};

const TECH_ITEMS: TechItem[] = [
  {abbr: 'Py',  label: 'Python',                   color: '#3b82f6', category: 'Language'},
  {abbr: 'CV',  label: 'OpenCV',                   color: '#22c55e', category: 'Vision'},
  {abbr: 'YO',  label: 'Ultralytics YOLO',         color: '#f59e0b', category: 'ML'},
  {abbr: 'H',   label: 'Homography Transform',     color: '#8b5cf6', category: 'Math'},
  {abbr: 'AR',  label: 'Arduino UNO WiFi REV2',    color: '#06b6d4', category: 'Hardware'},
  {abbr: 'SV',  label: 'Servo Control',            color: '#ec4899', category: 'Actuation'},
  {abbr: 'RS',  label: 'RTSP Camera Stream',       color: '#f97316', category: 'Protocol'},
  {abbr: 'CV',  label: 'CVAT Annotation',          color: '#14b8a6', category: 'Dataset'},
  {abbr: 'C++', label: 'C++ / Arduino Firmware',   color: '#64748b', category: 'Firmware'},
  {abbr: 'Np',  label: 'NumPy',                    color: '#4f46e5', category: 'Math'},
  {abbr: 'PT',  label: 'Perspective Transform',    color: '#0891b2', category: 'Vision'},
  {abbr: 'Wi',  label: 'WiFi / UDP Serial',        color: '#7c3aed', category: 'Comms'},
];

export default function TechBadges(): ReactNode {
  return (
    <section className={styles.section} id="tech">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>TECHNICAL STACK</span>
          <h2 className={styles.title}>Technologies Used</h2>
          <p className={styles.subtitle}>
            A purpose-built stack combining computer vision, machine learning, embedded systems,
            and real-world actuation.
          </p>
        </div>

        <div className={styles.grid} role="list">
          {TECH_ITEMS.map((tech) => (
            <div
              key={`${tech.label}`}
              className={styles.chip}
              role="listitem"
              style={{'--chip-color': tech.color} as React.CSSProperties}
            >
              <span className={styles.chipAbbr}>{tech.abbr}</span>
              <span className={styles.chipLabel}>{tech.label}</span>
              <span className={styles.chipCategory}>{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
