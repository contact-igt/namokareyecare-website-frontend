"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnView, { WordReveal } from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function CataractBanner() {
  const titleLines = [
    "Clearer Vision with",
    "Modern Cataract",
    "Surgery"
  ];

  return (
    <section className={styles.hero} aria-label="Namokar Eye Cataract hero">
      {/* Top right NABH Logo */}
      <div className={styles.nabhLogoWrapper}>
        <Image
          src="/assets/Header/Patient_saftey_logo.png"
          alt="Patient Safety & Quality of Care NABH Certified Logo"
          width={100}
          height={100}
          className={styles.nabhLogo}
          priority
        />
      </div>

      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>Expertise Your Eyes Deserve</span>
            </div>
          </RevealOnView>

          <h1 className={styles.title}>
            {titleLines.map((line, i) => (
              <WordReveal
                key={line}
                text={line}
                tag="span"
                delay={i * 120}
                className={styles.titleLine}
              />
            ))}
          </h1>

          <RevealOnView variant="fadeUp" delay={350}>
            <p className={styles.description}>
              Cataracts can gradually make vision cloudy, reduce colour clarity and create difficulty while reading, driving or seeing in low light. At Namokar Eye & Oculoplasty Centre, every patient receives a detailed eye evaluation and a treatment plan based on their vision needs, eye health and lifestyle.
            </p>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={480}>
            <Link href="/appointment" className={styles.cta}>
              Book a Cataract Consultation
            </Link>
          </RevealOnView>
        </div>
      </div>

      {/* Floating Info Cards at the bottom */}
      <div className={styles.bottomInfoBarWrapper}>
        <div className={styles.bottomInfoBar}>
          <div className={styles.infoItem}>
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 5-6" />
            </svg>
            <span className={styles.infoText}>Detailed Cataract Evaluation</span>
          </div>

          <div className={styles.infoItem}>
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 5-6" />
            </svg>
            <span className={styles.infoText}>Personalised Lens Selection</span>
          </div>

          <div className={styles.infoItem}>
            <svg
              className={styles.checkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 5-6" />
            </svg>
            <span className={styles.infoText}>Modern Surgical Planning</span>
          </div>
        </div>
      </div>

    </section>
  );
}

