"use client";

import { UserCheck, Heart, Shield, Award } from "lucide-react";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const iconMap = {
  UserCheck: UserCheck,
  Heart: Heart,
  Shield: Shield,
  Award: Award,
};

export default function SpecialistLedApproach() {
  const { specialistApproach } = aestheticOculofacialContent;
  const { title, subtitle, cards } = specialistApproach;

  return (
    <section className={styles.section} aria-labelledby="specialist-approach-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <h2 id="specialist-approach-title" className={styles.title}>
              {title}
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </RevealOnView>

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const IconComponent = iconMap[card.icon] || UserCheck;

            return (
              <RevealOnView key={card.id} variant="fadeUp" delay={100 + index * 80}>
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
      </div>
    </section>
  );
}
