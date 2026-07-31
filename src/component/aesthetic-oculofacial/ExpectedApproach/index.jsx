"use client";

import Image from "next/image";
import {
  MessageSquare,
  ClipboardCheck,
  Activity,
  CalendarCheck,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const iconMap = {
  MessageSquare: MessageSquare,
  ClipboardCheck: ClipboardCheck,
  Activity: Activity,
  CalendarCheck: CalendarCheck,
};

export default function ExpectedApproach() {
  const { expectedApproach } = aestheticOculofacialContent;
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    subtitle,
    image,
    banner,
    steps,
  } = expectedApproach;

  return (
    <section className={styles.section} aria-labelledby="expected-approach-title">
      <div className={styles.container}>
        {/* Section Header */}
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <div className={styles.eyebrowRow}>
              <span className={styles.dash}>—</span>
              <span className={styles.eyebrow}>{eyebrow}</span>
              <span className={styles.dash}>—</span>
            </div>

            <h2 id="expected-approach-title" className={styles.heading}>
              <span className={styles.titleLine1}>{titleLine1}</span>{" "}
              <span className={styles.titleLine2}>{titleLine2}</span>
            </h2>

            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </RevealOnView>

        {/* Content Layout */}
        <div className={styles.grid}>
          {/* Left Column - Doctor Image & Floating Banner */}
          <RevealOnView variant="fadeUp" delay={100}>
            <div className={styles.leftCol}>
              <div className={styles.imageCard}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={560}
                  height={440}
                  className={styles.doctorImg}
                  priority
                />

                {/* Bottom Overlay Banner */}
                <div className={styles.overlayBanner}>
                  <div className={styles.bannerIconCircle}>
                    <ShieldCheck size={28} />
                  </div>
                  <div className={styles.bannerContent}>
                    <h3 className={styles.bannerTitle}>{banner.title}</h3>
                    <p className={styles.bannerSubtitle}>{banner.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnView>

          {/* Right Column - Vertical Process Timeline */}
          <RevealOnView variant="fadeUp" delay={200}>
            <div className={styles.rightCol}>
              <div className={styles.timelineTrack}>
                <div className={styles.connectingLine} aria-hidden="true" />

                <div className={styles.stepsList}>
                  {steps.map((stepItem, idx) => {
                    const IconComponent = iconMap[stepItem.icon] || MessageSquare;

                    return (
                      <div key={stepItem.step} className={styles.stepItem}>
                        {/* Step Number Badge */}
                        <div className={styles.stepNumBadge}>
                          <span>{stepItem.step}</span>
                        </div>

                        {/* Step Card Content */}
                        <div className={styles.stepCard}>
                          <div className={styles.stepIconCircle}>
                            <IconComponent size={22} />
                          </div>

                          <div className={styles.stepTextContent}>
                            <h3 className={styles.stepTitle}>
                              {stepItem.title}
                            </h3>
                            <p className={styles.stepDescription}>
                              {stepItem.description}
                            </p>
                          </div>

                          <ChevronRight
                            size={20}
                            className={styles.stepChevron}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
