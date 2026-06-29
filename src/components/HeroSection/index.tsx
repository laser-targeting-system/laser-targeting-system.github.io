import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import HeroTitle from '../HeroTitle';
import styles from './styles.module.css';

/* ─── Hero SVG Visual ────────────────────────────────────────────────────── */
function HeroVisual(): ReactNode {
  return (
    <div className={styles.visual} aria-label="Animated diagram: servo turret targeting a drone with a laser beam">
      <svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        role="img"
        aria-hidden="true"
      >
        {/* Panel background */}
        <rect
          width="400"
          height="400"
          rx="14"
          fill="rgba(6,13,26,0.7)"
          stroke="rgba(34,211,238,0.2)"
          strokeWidth="1"
        />

        {/* Grid lines */}
        {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((v) => (
          <g key={v}>
            <line x1={v} y1="0" x2={v} y2="400" stroke="rgba(34,211,238,0.05)" strokeWidth="1" />
            <line x1="0" y1={v} x2="400" y2={v} stroke="rgba(34,211,238,0.05)" strokeWidth="1" />
          </g>
        ))}

        {/* ── Drone body (target) ── */}
        {/* Arms */}
        <line x1="210" y1="148" x2="185" y2="123" stroke="rgba(167,139,250,0.7)" strokeWidth="3" strokeLinecap="round" />
        <line x1="230" y1="148" x2="255" y2="123" stroke="rgba(167,139,250,0.7)" strokeWidth="3" strokeLinecap="round" />
        <line x1="210" y1="168" x2="185" y2="193" stroke="rgba(167,139,250,0.7)" strokeWidth="3" strokeLinecap="round" />
        <line x1="230" y1="168" x2="255" y2="193" stroke="rgba(167,139,250,0.7)" strokeWidth="3" strokeLinecap="round" />
        {/* Body */}
        <rect x="207" y="145" width="26" height="26" rx="4" fill="rgba(124,58,237,0.6)" stroke="rgba(167,139,250,0.9)" strokeWidth="1.5" />
        {/* Rotors */}
        <ellipse cx="185" cy="123" rx="12" ry="5" fill="none" stroke="rgba(167,139,250,0.45)" strokeWidth="1.5">
          <animateTransform attributeName="transform" type="rotate" from="0 185 123" to="360 185 123" dur="0.4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="255" cy="123" rx="12" ry="5" fill="none" stroke="rgba(167,139,250,0.45)" strokeWidth="1.5">
          <animateTransform attributeName="transform" type="rotate" from="360 255 123" to="0 255 123" dur="0.4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="185" cy="193" rx="12" ry="5" fill="none" stroke="rgba(167,139,250,0.45)" strokeWidth="1.5">
          <animateTransform attributeName="transform" type="rotate" from="360 185 193" to="0 185 193" dur="0.4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="255" cy="193" rx="12" ry="5" fill="none" stroke="rgba(167,139,250,0.45)" strokeWidth="1.5">
          <animateTransform attributeName="transform" type="rotate" from="0 255 193" to="360 255 193" dur="0.4s" repeatCount="indefinite" />
        </ellipse>

        {/* ── Targeting reticle ── */}
        {/* Outer spinning dashed ring */}
        <circle cx="220" cy="158" r="64" fill="none" stroke="rgba(34,211,238,0.28)" strokeWidth="1" strokeDasharray="6 4">
          <animateTransform attributeName="transform" type="rotate" from="0 220 158" to="360 220 158" dur="10s" repeatCount="indefinite" />
        </circle>
        {/* Middle ring */}
        <circle cx="220" cy="158" r="46" fill="none" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
        {/* Inner pulsing ring */}
        <circle cx="220" cy="158" r="28" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.75)" strokeWidth="2">
          <animate attributeName="r" values="26;31;26" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="2.2s" repeatCount="indefinite" />
        </circle>
        {/* Crosshair lines */}
        <line x1="220" y1="88" x2="220" y2="118" stroke="rgba(34,211,238,0.65)" strokeWidth="1.5" />
        <line x1="220" y1="198" x2="220" y2="228" stroke="rgba(34,211,238,0.65)" strokeWidth="1.5" />
        <line x1="150" y1="158" x2="180" y2="158" stroke="rgba(34,211,238,0.65)" strokeWidth="1.5" />
        <line x1="260" y1="158" x2="290" y2="158" stroke="rgba(34,211,238,0.65)" strokeWidth="1.5" />
        {/* Corner tick marks on outer ring */}
        <line x1="265" y1="113" x2="272" y2="106" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
        <line x1="175" y1="113" x2="168" y2="106" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
        <line x1="265" y1="203" x2="272" y2="210" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />
        <line x1="175" y1="203" x2="168" y2="210" stroke="rgba(34,211,238,0.5)" strokeWidth="1.5" />

        {/* ── Servo turret (bottom-left) ── */}
        {/* Base plate */}
        <rect x="36" y="322" width="68" height="36" rx="6" fill="rgba(34,211,238,0.1)" stroke="rgba(34,211,238,0.45)" strokeWidth="1.5" />
        {/* Base details */}
        <line x1="46" y1="340" x2="94" y2="340" stroke="rgba(34,211,238,0.25)" strokeWidth="1" />
        <rect x="62" y="326" width="16" height="6" rx="2" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.4)" strokeWidth="1" />
        {/* Pivot joint */}
        <circle cx="70" cy="322" r="9" fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.7)" strokeWidth="2" />
        <circle cx="70" cy="322" r="4" fill="rgba(34,211,238,0.6)" />
        {/* Arm */}
        <line x1="70" y1="322" x2="168" y2="236" stroke="rgba(34,211,238,0.6)" strokeWidth="4" strokeLinecap="round" />
        {/* LED emitter at arm tip */}
        <circle cx="168" cy="236" r="7" fill="rgba(34,211,238,0.9)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
          <animate attributeName="opacity" values="1;0.35;1" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="r" values="6;8;6" dur="1.8s" repeatCount="indefinite" />
        </circle>
        {/* Emitter glow ring */}
        <circle cx="168" cy="236" r="14" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1">
          <animate attributeName="r" values="8;18;8" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {/* ── Laser beam ── */}
        <line
          x1="168"
          y1="236"
          x2="220"
          y2="158"
          stroke="rgba(34,211,238,0.55)"
          strokeWidth="2"
          strokeDasharray="7 4"
        >
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="stroke-dashoffset" values="0;-22" dur="0.5s" repeatCount="indefinite" />
        </line>

        {/* Impact point glow */}
        <circle cx="220" cy="158" r="5" fill="rgba(34,211,238,0.9)">
          <animate attributeName="r" values="4;9;4" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.1;1" dur="1.8s" repeatCount="indefinite" />
        </circle>

        {/* ── HUD data readouts ── */}
        {/* Top-left panel */}
        <rect x="8" y="8" width="140" height="56" rx="4" fill="rgba(0,0,0,0.35)" />
        <text x="14" y="22" fill="rgba(34,211,238,0.9)" fontSize="9" fontFamily="monospace" fontWeight="bold">
          STATUS: LOCKED
        </text>
        <text x="14" y="34" fill="rgba(34,211,238,0.6)" fontSize="8" fontFamily="monospace">
          TARGET PIXEL  [220, 158]
        </text>
        <text x="14" y="45" fill="rgba(34,211,238,0.6)" fontSize="8" fontFamily="monospace">
          REAL COORDS   [12.4, 8.7cm]
        </text>
        <text x="14" y="56" fill="rgba(34,211,238,0.6)" fontSize="8" fontFamily="monospace">
          CONFIDENCE    0.934
        </text>
        {/* Bottom-right panel */}
        <rect x="252" y="336" width="140" height="52" rx="4" fill="rgba(0,0,0,0.35)" />
        <text x="258" y="350" fill="rgba(167,139,250,0.9)" fontSize="9" fontFamily="monospace" fontWeight="bold">
          SERVO OUTPUT
        </text>
        <text x="258" y="362" fill="rgba(167,139,250,0.6)" fontSize="8" fontFamily="monospace">
          THETA X   47.2°
        </text>
        <text x="258" y="373" fill="rgba(167,139,250,0.6)" fontSize="8" fontFamily="monospace">
          THETA Y   31.8°
        </text>
        <text x="258" y="384" fill="rgba(34,211,238,0.6)" fontSize="8" fontFamily="monospace">
          VIA ARDUINO UNO WiFi
        </text>

        {/* ── Corner decorations ── */}
        <path d="M8,8 L8,22 M8,8 L22,8" stroke="rgba(34,211,238,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M392,8 L392,22 M392,8 L378,8" stroke="rgba(34,211,238,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M8,392 L8,378 M8,392 L22,392" stroke="rgba(34,211,238,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M392,392 L392,378 M392,392 L378,392" stroke="rgba(34,211,238,0.55)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/* ─── Hero Section ───────────────────────────────────────────────────────── */
export default function HeroSection(): ReactNode {
  return (
    <section className={styles.hero} id="hero">
      {/* Decorative grid overlay */}
      <div className={styles.grid} aria-hidden="true" />
      {/* Radial glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Text content */}
        <div className={styles.textSide}>
          {/* <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Educational Capstone Prototype
          </div> */}

          <HeroTitle />


          <p className={styles.subtitle}>
            Camera-guided aiming and tracking mockup using computer vision,
            homography mapping, and servo-based actuation.
          </p>

          <p className={styles.body}>
            An educational capstone prototype that connects live RTSP video,
            ML-assisted target detection, coordinate mapping, and Arduino-controlled
            servo movement into one end-to-end demonstration pipeline.
          </p>

          <div className={styles.actions}>
            <a href="#pipeline" id="hero-explore-btn" className={styles.btnPrimary}>
              Explore the System
            </a>
            <a href="#video" id="hero-demo-btn" className={styles.btnSecondary}>
              <span className={styles.playIcon} aria-hidden="true">▶</span>
              Watch Demo
            </a>
            <Link to="/docs/intro" id="hero-docs-btn" className={styles.btnGhost}>
              Documentation →
            </Link>
          </div>

          {/* <p className={styles.disclaimer}>
            Safe demonstration setup — uses a low-power LED surrogate, not a real laser.
          </p> */}
        </div>

        {/* SVG Visual */}
        <HeroVisual />
      </div>
    </section>
  );
}
