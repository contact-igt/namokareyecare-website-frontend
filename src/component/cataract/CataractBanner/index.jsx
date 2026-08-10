"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Phone, ArrowRight, Award, Eye, Star, Users, ShieldCheck } from "lucide-react";
import RevealOnView, { WordReveal } from "@/common/RevealOnView";
import styles from "./styles.module.css";

const STATS = [
  {
    icon: Award,
    prefix: "",
    suffix: "+",
    label: "Years Eye Care Experience",
    countTo: 30,
    durationMs: 1400,
    decimals: 0,
  },
  {
    icon: Eye,
    prefix: "",
    suffix: "+",
    label: "Cataract Surgeries",
    countTo: 10000,
    durationMs: 1800,
    decimals: 0,
    formatThousands: true,
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

export default function CataractBanner() {
  const titleLines = [
    "Clear Vision with",
    "Advanced Stitchless",
    "Cataract Surgery",
  ];

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
    <section className={styles.hero} aria-label="Namokar Eye Cataract hero">
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
              Experience modern cataract care with micro-incision
              phacoemulsification, premium intraocular lens options, and a
              patient-first approach led by experienced eye specialists.
            </p>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={420}>
            <div className={styles.nabhBadgeWrapper}>
              <div className={styles.nabhBadge}>
                <div className={styles.nabhLogoBox}>
                  <Image
                    src="/assets/Header/Patient_saftey_logo.png"
                    alt="NABH Certified Logo"
                    width={32}
                    height={32}
                    className={styles.nabhBadgeLogo}
                  />
                </div>
                <div className={styles.nabhBadgeTextGroup}>
                  <span className={styles.nabhBadgeTitle}>
                    <ShieldCheck size={16} className={styles.shieldIcon} />
                    NABH Certified Eye Centre
                  </span>
                  <span className={styles.nabhBadgeSubtitle}>
                    Highest Quality & Patient Safety Standards
                  </span>
                </div>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={480}>
            <div className={styles.ctaGroup}>
              <Link href="/contact#appointment" className={styles.cta}>
                Book Appointment
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <a href="tel:+919876543210" className={styles.ctaSecondary}>
                <Phone size={17} strokeWidth={2.2} aria-hidden="true" />
                Call Us Now
              </a>
            </div>
          </RevealOnView>
        </div>
      </div>

      {/* Stats Bar */}
      <div className={styles.statsBarWrapper} ref={statsRef}>
        <div className={styles.statsBar}>
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div className={styles.statItem} key={stat.label}>
                {Icon && (
                  <div className={styles.iconCircle}>
                    <Icon size={20} className={styles.statIcon} />
                  </div>
                )}
                <div className={styles.statTextGroup}>
                  <AnimatedStat stat={stat} active={statsActive} />
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
                {i < STATS.length - 1 && (
                  <span className={styles.statDivider} aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
