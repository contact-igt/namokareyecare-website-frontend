"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

function AnimatedStat({ stat, active }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(stat.countTo);
      return;
    }
    const duration = stat.durationMs ?? 1400;
    const start = performance.now();
    let frameId = 0;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(stat.countTo * eased);
      if (progress < 1) frameId = window.requestAnimationFrame(tick);
    };
    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [active, stat]);

  const raw = display.toFixed(stat.decimals ?? 0);
  const formatted = stat.formatThousands
    ? Number(raw).toLocaleString("en-IN")
    : raw;

  return (
    <strong className={styles.statValue}>
      {stat.prefix}
      {formatted}
      <span
        className={`${styles.statSuffix} ${
          stat.isStar ? styles.statStar : ""
        }`}
      >
        {stat.suffix}
      </span>
    </strong>
  );
}

export default function WhatIsAestheticOculoplasty() {
  const { whatIsOculoplasty, banner } = aestheticOculofacialContent;
  const { stats } = banner;
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

  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="what-is-oculoplasty-title">
      {/* Stats Bar */}
      <div className={styles.statsBarWrapper} ref={statsRef}>
        <div className={styles.statsBar}>
          {stats.map((stat, i) => (
            <div className={styles.statItem} key={stat.label}>
              <AnimatedStat stat={stat} active={statsActive} />
              <span className={styles.statLabel}>{stat.label}</span>
              {i < stats.length - 1 && (
                <span className={styles.statDivider} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>

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
