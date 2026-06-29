import type {ReactNode} from 'react';
import styles from './styles.module.css';

export default function HeroTitle(): ReactNode {
  return (
    <h1 className={styles.heroTitle} aria-label="Laser Targeting System">
      {/* Screen-reader-only accessible text */}
      <span className="srOnly">Laser Targeting System</span>

      {/* Visual presentation hidden from screen readers */}
      <span aria-hidden="true" className={styles.visualTitle}>
        {/* Row 1: LASER */}
        <span className={styles.rowLaser}>
          <span>L</span>
          <svg viewBox="0 0 100 100" className={styles.charA} aria-hidden="true">
            <defs>
              <linearGradient id="ltsMetallicGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--lts-title-laser-stop1)" />
                <stop offset="50%" stopColor="var(--lts-title-laser-stop2)" />
                <stop offset="100%" stopColor="var(--lts-title-laser-stop3)" />
              </linearGradient>
              <linearGradient id="ltsCyanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--lts-title-cyan-stop1)" />
                <stop offset="100%" stopColor="var(--lts-title-cyan-stop2)" />
              </linearGradient>
            </defs>
            {/* The outer crossbar-less letter A legs (wider and thinner) */}
            <path d="M 50 5 L 95 95 L 81 95 L 50 33 L 19 95 L 5 95 Z" fill="url(#ltsMetallicGrad)" />
            {/* The solid cyan triangle inside (aligned to bottom line and scaled up) */}
            <polygon points="50,70 35,95 65,95" fill="url(#ltsCyanGrad)" />
          </svg>
          <span>SER</span>
        </span>

        {/* Row 2: TARGETING */}
        <span className={styles.rowTargeting}>TARGETING</span>

        {/* Row 3: SYSTEM with flanking gradient lines */}
        <span className={styles.rowSystemContainer}>
          <span className={styles.lineLeft} />
          <span className={styles.rowSystem}>SYSTEM</span>
          <span className={styles.lineRight} />
        </span>
      </span>
    </h1>
  );
}
