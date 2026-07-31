"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  EyeOff,
  Scissors,
  ShieldAlert,
  Timer,
  CalendarCheck,
  ClipboardList,
  Calendar,
} from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { cataractContent } from "@/constant/cataractContent";
import styles from "./styles.module.css";

const iconComponents = {
  Minimize2: EyeOff,
  Scissors: Scissors,
  Bandage: ShieldAlert,
  Timer: Timer,
  CalendarCheck: CalendarCheck,
  Eye: Eye,
  ClipboardList: ClipboardList,
};

export default function StitchlessCataractSurgery() {
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    subtitle,
    whatIs,
    benefitsTitle,
    benefits,
    image,
    ctaBanner,
  } = cataractContent.stitchlessSurgery;

  return (
    <section className={styles.section} aria-labelledby="stitchless-surgery-title">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.eyebrow}>
              <span className={styles.accentLine} aria-hidden="true" />
              <span>{eyebrow}</span>
              <span className={styles.accentLine} aria-hidden="true" />
            </div>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={100}>
            <h2 id="stitchless-surgery-title" className={styles.heading}>
              <span className={styles.titleLine1}>{titleLine1} </span>
              <span className={styles.titleLine2}>{titleLine2}</span>
            </h2>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={200}>
            <p className={styles.subtitle}>{subtitle}</p>
          </RevealOnView>
        </div>

        {/* Main Grid: Left Copy & Benefits, Right Image */}
        <div className={styles.mainGrid}>
          {/* Left Column */}
          <div className={styles.leftCol}>
            {/* Top Card: What is Stitchless Cataract Surgery? */}
            <RevealOnView variant="fadeUp" delay={150}>
              <div className={styles.whatIsCard}>
                <div className={styles.whatIsHeader}>
                  <span className={styles.titleUnderline} aria-hidden="true" />
                  <h3 className={styles.whatIsTitle}>{whatIs.title}</h3>
                </div>
                <p className={styles.whatIsDesc}>{whatIs.description}</p>
              </div>
            </RevealOnView>

            {/* Key Benefits Header */}
            <RevealOnView variant="fadeUp" delay={200}>
              <div className={styles.benefitsHeader}>
                <span className={styles.benefitLine} aria-hidden="true" />
                <span className={styles.benefitsTitle}>{benefitsTitle}</span>
                <span className={styles.benefitLine} aria-hidden="true" />
              </div>
            </RevealOnView>

            {/* Benefit Cards Grid */}
            <div className={styles.benefitsGrid}>
              {benefits.map((b, idx) => {
                const IconComponent = iconComponents[b.icon] || Eye;
                return (
                  <RevealOnView
                    key={b.id}
                    variant="fadeUp"
                    delay={250 + idx * 50}
                  >
                    <div className={styles.benefitCard}>
                      <div className={styles.iconCircle} aria-hidden="true">
                        <IconComponent size={20} strokeWidth={2} />
                      </div>
                      <span className={styles.benefitLabel}>{b.label}</span>
                    </div>
                  </RevealOnView>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Graphic */}
          <div className={styles.rightCol}>
            <RevealOnView variant="fadeLeft" delay={200}>
              <div className={styles.imageFrame}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={640}
                  height={560}
                  className={styles.heroImage}
                  priority
                />
              </div>
            </RevealOnView>
          </div>
        </div>

        {/* Bottom Banner */}
        <RevealOnView variant="fadeUp" delay={300}>
          <div className={styles.ctaBanner}>
            <div className={styles.bannerLeft}>
              <div className={styles.bannerIconCircle} aria-hidden="true">
                <Eye size={24} strokeWidth={2.2} />
              </div>
              <span className={styles.bannerDivider} aria-hidden="true" />
              <p className={styles.bannerQuote}>{ctaBanner.quote}</p>
            </div>

            <Link href={ctaBanner.btnHref} className={styles.bannerBtn}>
              <Calendar size={18} strokeWidth={2.2} aria-hidden="true" />
              <span>{ctaBanner.btnLabel}</span>
            </Link>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
