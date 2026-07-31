"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function WhatIsAestheticOculoplasty() {
  const { whatIsOculoplasty } = aestheticOculofacialContent;
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    paragraphs,
    callout,
    annotations,
    mainImage,
    insetImage,
  } = whatIsOculoplasty;

  return (
    <section className={styles.section} aria-labelledby="what-is-oculoplasty-title">
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

              <h2 id="what-is-oculoplasty-title" className={styles.heading}>
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

          {/* Right Visual Image & Annotations */}
          <RevealOnView variant="fadeUp" delay={150}>
            <div className={styles.rightCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  width={600}
                  height={480}
                  className={styles.mainImg}
                  priority
                />

                {/* Annotations List */}
                <div className={styles.annotationsList}>
                  {annotations.map((item, idx) => (
                    <div key={item.id} className={`${styles.annItem} ${styles[`ann${idx + 1}`]}`}>
                      <span className={styles.annText}>{item.label}</span>
                      <span className={styles.pointerLine} />
                      <span className={styles.dot} />
                    </div>
                  ))}
                </div>

                {/* Inset Circle Photo */}
                <div className={styles.insetCircle}>
                  <Image
                    src={insetImage.src}
                    alt={insetImage.alt}
                    width={180}
                    height={180}
                    className={styles.insetImg}
                  />
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
