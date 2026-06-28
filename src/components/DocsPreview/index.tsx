import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type PreviewCard = {
  icon: ReactNode;
  badge: string;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
  comingSoon: boolean;
};

const CARDS: PreviewCard[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
    badge: 'IN PREPARATION',
    title: 'Documentation',
    description:
      'Technical documentation covering system architecture, calibration procedures, hardware setup, YOLO training workflow, and homography theory.',
    link: '/docs/intro',
    linkLabel: 'Preview Docs',
    comingSoon: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    badge: 'COMING SOON',
    title: 'Dev Blog',
    description:
      'Development notes, experiment logs, lessons learned, and updates from the team — covering everything from dataset collection to servo calibration.',
    link: '/blog',
    linkLabel: 'Visit Blog',
    comingSoon: true,
  },
];

export default function DocsPreview(): ReactNode {
  return (
    <section className={styles.section} id="explore">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>EXPLORE MORE</span>
          <h2 className={styles.title}>Documentation &amp; Blog</h2>
          <p className={styles.subtitle}>
            Full technical documentation and development notes are being prepared.
            Check back soon or follow the project on GitHub.
          </p>
        </div>

        <div className={styles.grid}>
          {CARDS.map((card) => (
            <div key={card.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{card.icon}</div>
                {card.comingSoon && (
                  <span className={styles.badge}>{card.badge}</span>
                )}
              </div>

              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>

              <Link to={card.link} className={styles.cardLink}>
                {card.linkLabel}
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
