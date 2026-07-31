"use client";

import Image from "next/image";
import {
  UserCheck,
  Award,
  Building2,
  Eye,
  Users,
  IndianRupee,
  ShieldCheck,
  HeartHandshake,
  Heart,
} from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { cataractContent } from "@/constant/cataractContent";
import styles from "./styles.module.css";

const iconMap = {
  UserCheck,
  Award,
  Building2,
  Eye,
  Users,
  IndianRupee,
  ShieldCheck,
  HeartHandshake,
  Heart,
};

export default function WhyChooseNamokar() {
  const { eyebrow, titleLine1, titleLine2, reasons, image, highlights } =
    cataractContent.whyChooseNamokar;

  return (
    <section className={styles.section} aria-labelledby="why-choose-namokar-title">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Reasons */}
          <div className={styles.leftCol}>
            {/* Header */}
            <div className={styles.header}>
              <RevealOnView variant="fadeUp" delay={0}>
                <div className={styles.eyebrow}>
                  <span className={styles.accentLine} aria-hidden="true" />
                  <span>{eyebrow}</span>
                  <span className={styles.accentLine} aria-hidden="true" />
                </div>
              </RevealOnView>

              <RevealOnView variant="fadeUp" delay={100}>
                <h2 id="why-choose-namokar-title" className={styles.heading}>
                  <span className={styles.titleLine1}>{titleLine1} </span>
                  <span className={styles.titleLine2}>{titleLine2}</span>
                </h2>
              </RevealOnView>
            </div>

            {/* List of Reasons */}
            <div className={styles.reasonsList}>
              {reasons.map((item, index) => {
                const IconComponent = iconMap[item.icon] || UserCheck;
                const isBlue = item.colorScheme === "blue";

                return (
                  <RevealOnView
                    key={item.id}
                    variant="fadeUp"
                    delay={150 + index * 60}
                  >
                    <div className={styles.reasonRow}>
                      <div
                        className={`${styles.iconBadge} ${
                          isBlue ? styles.blueBadge : styles.orangeBadge
                        }`}
                        aria-hidden="true"
                      >
                        <IconComponent size={22} strokeWidth={2} />
                      </div>

                      <div className={styles.reasonContent}>
                        <h3 className={styles.reasonTitle}>{item.title}</h3>
                        <p className={styles.reasonSubtitle}>{item.subtitle}</p>
                      </div>
                    </div>
                  </RevealOnView>
                );
              })}
            </div>
          </div>

          {/* Right Column: Doctor Image + Highlights Overlay Card */}
          <div className={styles.rightCol}>
            <RevealOnView variant="fadeLeft" delay={200}>
              <div className={styles.imageCardContainer}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={640}
                    height={500}
                    className={styles.doctorImage}
                    priority
                  />
                </div>

                {/* Highlights Overlay Card at Bottom of Photo */}
                <div className={styles.highlightsOverlay}>
                  {highlights.map((h, i) => {
                    const HighlightIcon = iconMap[h.icon] || Users;
                    const isOrange = h.highlightColor === "orange";

                    return (
                      <div key={h.id} className={styles.highlightCol}>
                        <div
                          className={`${styles.highlightIcon} ${
                            isOrange ? styles.orangeIcon : styles.blueIcon
                          }`}
                          aria-hidden="true"
                        >
                          <HighlightIcon size={24} strokeWidth={1.8} />
                        </div>

                        <div className={styles.highlightTextGroup}>
                          <span className={styles.hlLine1}>{h.titleLine1}</span>
                          <span
                            className={`${styles.hlLine2} ${
                              isOrange ? styles.orangeText : styles.blueText
                            }`}
                          >
                            {h.titleLine2}
                          </span>
                        </div>

                        <p className={styles.hlSub}>{h.subtitle}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RevealOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
