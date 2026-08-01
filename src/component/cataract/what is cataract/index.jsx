"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { cataractContent } from "@/constant/cataractContent";
import styles from "./styles.module.css";

const STATS = [
  {
    prefix: "",
    suffix: "+",
    label: "Years Eye Care Experience",
    countTo: 30,
    durationMs: 1400,
    decimals: 0,
  },
  {
    prefix: "",
    suffix: "+",
    label: "Cataract Surgeries",
    countTo: 10000,
    durationMs: 1800,
    decimals: 0,
    formatThousands: true,
  },
  {
    prefix: "",
    suffix: "★",
    label: "Google Rating",
    countTo: 4.9,
    durationMs: 1300,
    decimals: 1,
    isStar: true,
  },
  {
    prefix: "",
    suffix: "+",
    label: "Patient Reviews",
    countTo: 299,
    durationMs: 1500,
    decimals: 0,
  },
];

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
      <span className={`${styles.statSuffix} ${stat.isStar ? styles.statStar : ""}`}>
        {stat.suffix}
      </span>
    </strong>
  );
}

export default function WhatIsCataract() {
  const { eyebrow, title, paragraphs, cta, image } = cataractContent.whatIsCataract;

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
    <section className={styles.whatIsCataract} aria-labelledby="what-is-cataract-title">
      {/* Stats Bar */}
      <div className={styles.statsBarWrapper} ref={statsRef}>
        <div className={styles.statsBar}>
          {STATS.map((stat, i) => (
            <div className={styles.statItem} key={stat.label}>
              <AnimatedStat stat={stat} active={statsActive} />
              <span className={styles.statLabel}>{stat.label}</span>
              {i < STATS.length - 1 && (
                <span className={styles.statDivider} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.copyColumn}>
          {eyebrow && (
            <RevealOnView variant="fadeUp" delay={0}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
            </RevealOnView>
          )}

          <RevealOnView variant="fadeUp" delay={100}>
            <h2 id="what-is-cataract-title" className={styles.title}>
              {title}
            </h2>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={200}>
            <div className={styles.paragraphs}>
              {paragraphs.map((p, idx) => (
                <p key={idx} className={styles.description}>
                  {p}
                </p>
              ))}
            </div>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={300}>
            <Link href={cta.href} className={styles.ctaLink}>
              <span>{cta.label}</span>
              <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </RevealOnView>
        </div>

        <div className={styles.imageColumn}>
          <RevealOnView variant="fadeLeft" delay={200}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={620}
                height={460}
                className={styles.image}
                priority
              />
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
