"use client";

import {
  UserCheck,
  Heart,
  ShieldCheck,
  Award,
  Eye,
  Building2,
  GraduationCap,
} from "lucide-react";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const iconMap = {
  UserCheck,
  Heart,
  ShieldCheck,
  Award,
  Eye,
  Building2,
  GraduationCap,
};

export default function SpecialistLedApproach() {
  const { title, subtitle, reasons } = aestheticOculofacialContent.whyChooseNamokar;
  const row1 = reasons.slice(0, 4);
  const row2 = reasons.slice(4);

  return (
    <section className={styles.section} aria-labelledby="why-choose-namokar-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <h2 id="why-choose-namokar-title" className={styles.title}>
              {title}
            </h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        </RevealOnView>

        <div className={styles.cardsContainer}>
          <div className={styles.row1}>
            {row1.map((card, index) => {
              const IconComponent = iconMap[card.icon] || ShieldCheck;

              return (
                <RevealOnView key={card.id} variant="fadeUp" delay={100 + index * 60}>
                  <div className={styles.card}>
                    <div className={styles.iconCircle}>
                      <IconComponent size={24} className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>
                </RevealOnView>
              );
            })}
          </div>

          {row2.length > 0 && (
            <div className={styles.row2}>
              {row2.map((card, index) => {
                const IconComponent = iconMap[card.icon] || ShieldCheck;

                return (
                  <RevealOnView key={card.id} variant="fadeUp" delay={100 + (index + 4) * 60}>
                    <div className={styles.card}>
                      <div className={styles.iconCircle}>
                        <IconComponent size={24} className={styles.icon} />
                      </div>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <p className={styles.cardDescription}>{card.description}</p>
                    </div>
                  </RevealOnView>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
