import type { ReactNode } from 'react';
import styles from './styles.module.css';

/**
 * VideoShowcase — YouTube embed with easy placeholder swap.
 *
 * HOW TO ADD THE PROMOTIONAL VIDEO:
 *   1. Find your YouTube video ID from the URL:
 *      https://www.youtube.com/watch?v=YOUR_VIDEO_ID_HERE
 *   2. Replace `null` below with the video ID string.
 *      Example: const YOUTUBE_VIDEO_ID = 'dQw4w9WgXcQ';
 */
const YOUTUBE_VIDEO_ID: string | null = "FPaPczqIwuk";

function PlayIcon(): ReactNode {
  return (
    <svg className={styles.playIcon} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <polygon points="32,26 58,40 32,54" fill="currentColor" />
    </svg>
  );
}

export default function VideoShowcase(): ReactNode {
  return (
    <section className={styles.section} id="video">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>DEMO SHOWCASE</span>
          <h2 className={styles.title}>See It in Action</h2>
          <p className={styles.subtitle}>
            Watch the full end-to-end demonstration: live RTSP feed, target detection,
            coordinate mapping, and servo arm actuation.
          </p>
        </div>

        <div className={styles.videoWrap}>
          {YOUTUBE_VIDEO_ID ? (
            /* ── YouTube embed (active when video ID is set) ── */
            <div className={styles.iframeWrap}>
              <iframe
                id="demo-video-embed"
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Laser Targeting System — Promotional Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                /* Security: sandbox restricts capabilities of the embedded frame */
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              />
            </div>
          ) : (
            /* ── Placeholder card (shown until video ID is added) ── */
            <div className={styles.placeholder} id="demo-video-placeholder">
              <div className={styles.placeholderInner}>
                <PlayIcon />
                <div className={styles.placeholderText}>
                  <p className={styles.placeholderTitle}>Promotional Demo — Coming Soon</p>
                  <p className={styles.placeholderSub}>
                    A YouTube promotional video will be embedded here.
                    Set <code>YOUTUBE_VIDEO_ID</code> in{' '}
                    <code>src/components/VideoShowcase/index.tsx</code> to activate it.
                  </p>
                </div>
                <div className={styles.scanLine} aria-hidden="true" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
