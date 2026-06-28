import type {ReactNode} from 'react';
import styles from './styles.module.css';

/**
 * TeamSection — 4-member team showcase with GitHub avatars.
 *
 * HOW TO CONFIGURE:
 *   For each team member, set:
 *   - `name`:   Full display name
 *   - `role`:   Role / responsibility on the project
 *   - `github`: GitHub username (used for avatar URL and profile link)
 *
 * GitHub avatar URL format: https://github.com/{username}.png
 * If a username is not found, the initials fallback will be shown automatically.
 */
type TeamMember = {
  name: string;
  role: string;
  github: string;
  initials: string;
  color: string;
};

// TODO: Replace placeholder values with real team member details.
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Team Member 1',
    role: 'System Architecture & Computer Vision',
    github: 'placeholder-member-1',   // TODO: Replace with real GitHub username
    initials: 'M1',
    color: '#0891b2',
  },
  {
    name: 'Team Member 2',
    role: 'Machine Learning & YOLO Integration',
    github: 'placeholder-member-2',   // TODO: Replace with real GitHub username
    initials: 'M2',
    color: '#7c3aed',
  },
  {
    name: 'Team Member 3',
    role: 'Embedded Systems & Arduino Firmware',
    github: 'placeholder-member-3',   // TODO: Replace with real GitHub username
    initials: 'M3',
    color: '#0891b2',
  },
  {
    name: 'Team Member 4',
    role: 'Dataset Annotation & Calibration',
    github: 'placeholder-member-4',   // TODO: Replace with real GitHub username
    initials: 'M4',
    color: '#7c3aed',
  },
];

function GitHubIcon(): ReactNode {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function MemberCard({member}: {member: TeamMember}): ReactNode {
  const avatarUrl = `https://github.com/${member.github}.png`;

  return (
    <div className={styles.card}>
      <div className={styles.avatarWrap} style={{'--member-color': member.color} as React.CSSProperties}>
        {/* GitHub avatar — falls back to initials on error */}
        <img
          src={avatarUrl}
          alt={`${member.name} GitHub avatar`}
          className={styles.avatar}
          loading="lazy"
          onError={(e) => {
            // Show initials fallback instead of broken image
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Initials fallback (always rendered, hidden by avatar via CSS stacking) */}
        <div className={styles.avatarFallback} aria-hidden="true">
          {member.initials}
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
      </div>

      <a
        href={`https://github.com/${member.github}`}
        className={styles.ghLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${member.name} on GitHub`}
      >
        <GitHubIcon />
        <span>@{member.github}</span>
      </a>
    </div>
  );
}

export default function TeamSection(): ReactNode {
  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>THE TEAM</span>
          <h2 className={styles.title}>Built by Students</h2>
          <p className={styles.subtitle}>
            An interdisciplinary capstone team combining computer vision, embedded systems,
            machine learning, and mechanical engineering.
          </p>
        </div>

        <div className={styles.grid}>
          {TEAM_MEMBERS.map((member) => (
            <MemberCard key={member.github} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
