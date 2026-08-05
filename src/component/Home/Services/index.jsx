"use client";

import Link from "next/link";
import {
  BadgePlus,
  Bone,
  CirclePlus,
  Ear,
  Eye,
  HandHeart,
  ScanEye,
  Stethoscope,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/constant/homeContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

/* ── Inline animated number counter (same pattern as Cataract / Aesthetic) ── */
function AnimatedStat({ countTo, suffix = "", durationMs = 1400 }) {
  const [display, setDisplay] = useState(0);
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setDisplay(countTo);
      return;
    }
    const start = performance.now();
    let frameId = 0;
    const tick = (now) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(countTo * eased));
      if (progress < 1) frameId = window.requestAnimationFrame(tick);
    };
    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [active, countTo, durationMs]);

  return (
    <span className={styles.statsNumber} ref={ref}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ── Service icon helper ── */
const serviceIcons = {
  cataract: [Eye, CirclePlus],
  eyelid: [Bone, BadgePlus],
  glaucoma: [Ear, CirclePlus],
  aesthetic: [HandHeart, BadgePlus],
  reconstructive: [Stethoscope, CirclePlus],
  exams: [ScanEye, BadgePlus],
};

function ServiceIcon({ type }) {
  const [PrimaryIcon, PlusIcon] = serviceIcons[type] ?? serviceIcons.cataract;

  return (
    <span className={styles.iconWrap} aria-hidden="true">
      <PrimaryIcon className={styles.primaryIcon} strokeWidth={1.8} />
      <PlusIcon className={styles.plusIcon} strokeWidth={2} />
    </span>
  );
}

export default function Services() {
  const { eyebrow, title, items, cta } = homeContent.services;

  return (
    <section className={styles.services} aria-labelledby="home-services-title">
      {/* Stats Card at the top (mobile view only) */}
      <div className={styles.statsCardWrapper}>
        <div className={styles.statsCard}>
          <div className={styles.statsItem}>
            <div className={styles.iconCircle}>
              <Award className={styles.statsIcon} size={22} />
            </div>
            <div className={styles.statsContent}>
              <AnimatedStat countTo={30} suffix="+" durationMs={1200} />
              <span className={styles.statsLabel}>Years Excellence</span>
            </div>
          </div>

          <div className={styles.statsDivider} aria-hidden="true" />

          <div className={styles.statsItem}>
            <div className={styles.iconCircle}>
              <Users className={styles.statsIcon} size={22} />
            </div>
            <div className={styles.statsContent}>
              <AnimatedStat countTo={50000} suffix="+" durationMs={1600} />
              <span className={styles.statsLabel}>Happy Patients</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.inner}>
        <RevealOnView variant="fadeUp" delay={0}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>
        </RevealOnView>

        <RevealOnView variant="fadeUp" delay={100}>
          <h2 id="home-services-title" className={styles.title}>
            {title}
          </h2>
        </RevealOnView>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <RevealOnView
              key={item.title}
              variant="fadeUp"
              delay={150 + index * 100}
            >
              <Link href={item.href} className={styles.card}>
                <ServiceIcon type={item.icon} />
                <span className={styles.divider} aria-hidden="true" />
                <span className={styles.cardCopy}>
                  <span className={styles.cardTitle}>{item.title}</span>
                  {item.description && (
                    <span className={styles.cardDescription}>
                      {item.description}
                    </span>
                  )}
                  <span className={styles.learnMore}>
                    Learn More
                    <ArrowRight
                      size={15}
                      className={styles.learnMoreArrow}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </Link>
            </RevealOnView>
          ))}
        </div>

        {/* {cta && (
          <RevealOnView variant="fadeUp" delay={650}>
            <div className={styles.ctaRow}>
              <Link href={cta.href} className={styles.cta}>
                {cta.label}
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </RevealOnView>
        )} */}
      </div>
    </section>
  );
}
