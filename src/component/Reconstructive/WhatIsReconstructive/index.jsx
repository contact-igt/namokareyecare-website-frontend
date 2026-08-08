"use client";

import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";
import { reconstructiveContent } from "@/constant/reconstructiveContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function WhatIsReconstructive() {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    paragraphs,
    callout,
    gridImages,
    floatingCard,
  } = reconstructiveContent.whatIsReconstructive;

  const [imgTopLeft, imgTopRight, imgBottom] = gridImages;

  return (
    <section className={styles.section} aria-labelledby="what-is-reconstructive-title">
      <div className={styles.container}>
        <div className={styles.topGrid}>

          {/* Left Text Content */}
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.leftCol}>
              <div className={styles.eyebrowRow}>
                <span className={styles.dash}>—</span>
                <span className={styles.eyebrow}>{eyebrow}</span>
                <span className={styles.dash}>—</span>
              </div>

              <h2 id="what-is-reconstructive-title" className={styles.heading}>
                <span className={styles.titleLine1}>{titleLine1}</span>{" "}
                <span className={styles.titleLine2}>{titleLine2}</span>
              </h2>

              <div className={styles.paragraphs}>
                {paragraphs.map((p, idx) => (
                  <p key={idx} className={styles.pText}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Callout Box */}
              <div className={styles.calloutBox}>
                <div className={styles.calloutIconCircle}>
                  <ShieldCheck size={24} className={styles.calloutIcon} />
                </div>
                <p className={styles.calloutText}>
                  {callout.text}
                  <strong className={styles.calloutHighlight}>
                    {callout.highlight}
                  </strong>
                </p>
              </div>
            </div>
          </RevealOnView>

          {/* Right Staggered Image Grid */}
          <RevealOnView variant="fadeUp" delay={150}>
            <div className={styles.rightCol}>
              <div className={styles.imageGrid}>

                {/* Top row — two images side by side */}
                <div className={styles.topRow}>
                  <div className={styles.imgTopLeft}>
                    <Image
                      src={imgTopLeft.src}
                      alt={imgTopLeft.alt}
                      fill
                      className={styles.gridImg}
                      sizes="(max-width: 768px) 60vw, 30vw"
                      priority
                    />
                  </div>
                  <div className={styles.imgTopRight}>
                    <Image
                      src={imgTopRight.src}
                      alt={imgTopRight.alt}
                      fill
                      className={styles.gridImg}
                      sizes="(max-width: 768px) 40vw, 20vw"
                    />
                  </div>
                </div>

                {/* Bottom — wide image */}
                <div className={styles.imgBottom}>
                  <Image
                    src={imgBottom.src}
                    alt={imgBottom.alt}
                    fill
                    className={styles.gridImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Floating stat card overlaid on bottom image */}
                  <div className={styles.floatingCard}>
                    <div className={styles.floatingIconCircle}>
                      <Award size={20} />
                    </div>
                    <div className={styles.floatingText}>
                      <span className={styles.floatingStat}>{floatingCard.stat}</span>
                      <span className={styles.floatingLabel}>{floatingCard.label}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </RevealOnView>

        </div>
      </div>
    </section>
  );
}
