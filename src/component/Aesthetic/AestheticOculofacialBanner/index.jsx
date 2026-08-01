"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, UserCheck } from "lucide-react";
import RevealOnView, { WordReveal } from "@/common/RevealOnView";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
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

export default function AestheticOculofacialBanner() {
  const { eyebrow, title, description, cta, secondaryCta, stats } =
    aestheticOculofacialContent.banner;

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
    <section
      className={styles.bannerSection}
      aria-label="Aesthetic Oculofacial Treatment Banner"
    >
      <div className={styles.bgImageWrapper}>
        <Image
          src="/assets/Aesthetic/aesthatic-new.jpeg"
          alt="Aesthetic Treatment Background"
          fill
          priority
          className={styles.desktopBg}
        />
        <Image
          src="/assets/Aesthetic/aesthaticmb-new.jpeg"
          alt="Aesthetic Treatment Background Mobile"
          fill
          priority
          className={styles.mobileBg}
        />
      </div>

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

      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.subtitleWrapper}>
              <span className={styles.line} aria-hidden="true" />
              <span className={styles.subtitle}>{eyebrow}</span>
            </div>
          </RevealOnView>

          <h1 className={styles.title}>
            {title.map((line, i) => (
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
            <p className={styles.description}>{description}</p>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={480}>
            <div className={styles.ctaGroup}>
              <Link href={cta.href} className={styles.ctaButton}>
                {cta.label}
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <Link
                href={secondaryCta.href}
                className={styles.ctaSecondary}
              >
                <UserCheck size={18} strokeWidth={2.2} aria-hidden="true" />
                {secondaryCta.label}
              </Link>
            </div>
          </RevealOnView>
        </div>
      </div>

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
    </section>
  );
}
