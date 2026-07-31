"use client";

import Image from "next/image";
import { Eye, Sparkles, Target } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { cataractContent } from "@/constant/cataractContent";
import styles from "./styles.module.css";

const iconMap = {
  Eye,
  Sparkles,
  Target,
};

export default function CataractLensOptions() {
  const { eyebrow, titleLine1, titleLine2, subtitle, items } = cataractContent.lensOptions;

  return (
    <section className={styles.section} aria-labelledby="lens-options-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.pillBadge}>
              <span className={styles.greenDot} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={100}>
            <h2 id="lens-options-title" className={styles.heading}>
              <span className={styles.titleLine1}>{titleLine1}</span>
              <span className={styles.titleLine2}>{titleLine2}</span>
            </h2>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={200}>
            <p className={styles.subtitle}>{subtitle}</p>
          </RevealOnView>
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Eye;

            return (
              <RevealOnView
                key={item.id}
                variant="fadeUp"
                delay={150 + index * 100}
              >
                <div
                  className={`${styles.card} ${
                    item.featured ? styles.featuredCard : ""
                  }`}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={400}
                      height={240}
                      className={styles.cardImage}
                    />
                    <div className={styles.iconOverlay} aria-hidden="true">
                      <IconComponent size={18} strokeWidth={2} />
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <div className={styles.categoryBadge}>{item.category}</div>
                    <p className={styles.description}>{item.description}</p>

                    <ul className={styles.pointsList}>
                      {item.points.map((point, i) => (
                        <li key={i} className={styles.pointItem}>
                          <span className={styles.bullet} aria-hidden="true">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
