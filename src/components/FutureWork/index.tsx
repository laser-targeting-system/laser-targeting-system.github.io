import type {ReactNode} from 'react';
import styles from './styles.module.css';

type RoadmapItem = {
  title: string;
  description: string;
};

const ROADMAP: RoadmapItem[] = [
  {
    title: 'Stronger and More Precise Servos',
    description:
      'Upgrade to higher-torque servos for improved accuracy, stability, and a wider range of motion under real demonstration conditions.',
  },
  {
    title: 'Sturdier Mount for Optics Module',
    description:
      'Redesign the mechanical mount to reduce vibration and allow future integration of a collimated LED or other optical pointing device.',
  },
  {
    title: 'Finalised Angle Mapping (LUT / Regression / IK)',
    description:
      'Complete the centimetre-to-servo-angle calibration using a lookup table, polynomial regression, or inverse kinematics for accurate pointing.',
  },
  {
    title: 'Improved Dataset and Augmentation',
    description:
      'Expand and diversify the YOLO training dataset with more scenarios, lighting conditions, and augmentation strategies to reduce domain shift.',
  },
  {
    title: 'Closed-Loop Feedback',
    description:
      'Add a feedback mechanism — visual, encoder, or IMU-based — so the system can verify and correct its pointing after each actuation.',
  },
  {
    title: 'Frame-to-Frame Target Tracking',
    description:
      'Implement temporal tracking (e.g. SORT, ByteTrack) to maintain target identity across frames and enable smooth servo motion.',
  },
  {
    title: 'Complete Automatic Aiming Loop',
    description:
      'Integrate detection, coordinate mapping, command formatting, and servo response into a fully autonomous, real-time closed-loop pipeline.',
  },
];

export default function FutureWork(): ReactNode {
  return (
    <section className={styles.section} id="future">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>ROADMAP</span>
          <h2 className={styles.title}>Future Work</h2>
          <p className={styles.subtitle}>
            Clear engineering steps that will take this demonstrator from prototype to a
            more complete and robust system.
          </p>
        </div>

        <div className={styles.timeline} role="list">
          {ROADMAP.map((item, idx) => (
            <div key={item.title} className={styles.item} role="listitem">
              <div className={styles.indicator} aria-hidden="true">
                <div className={styles.dot} />
                {idx < ROADMAP.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <div className={styles.stepNum} aria-label={`Step ${idx + 1}`}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
