"use client";

import {
  Eye,
  UserCheck,
  Award,
  ShieldCheck,
  GraduationCap,
  Heart,
} from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { reconstructiveContent } from "@/constant/reconstructiveContent";
import styles from "./styles.module.css";

const iconMap = {
  Eye,
  UserCheck,
  Award,
  ShieldCheck,
  GraduationCap,
  Heart,
};

export default function ReconstructiveWhyChoose() {
  const { title, subtitle, reasons } = reconstructiveContent.whyChooseNamokar;

  return (
    <section
      className={styles.section}
      aria-labelledby="reconstructive-why-choose-title"
    >
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <div className={styles.header}>
            <h2 id="reconstructive-why-choose-title" className={styles.title}>
              {title}
            </h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </RevealOnView>

        <div className={styles.grid}>
          {reasons.map((reason, idx) => {
            const Icon = iconMap[reason.icon] || Eye;
            return (
              <RevealOnView
                key={reason.id}
                variant="fadeUp"
                delay={idx * 80}
                className={styles.cardWrapper}
              >
                <div className={styles.card}>
                  <div className={styles.iconCircle}>
                    <Icon size={24} />
                  </div>
                  <h3 className={styles.cardTitle}>{reason.title}</h3>
                  <p className={styles.cardDescription}>{reason.description}</p>
                </div>
              </RevealOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
