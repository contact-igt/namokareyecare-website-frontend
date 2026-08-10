"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Eye,
  RotateCcw,
  RotateCw,
  Layers,
  Droplets,
  Circle,
  Wrench,
} from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { reconstructiveContent } from "@/constant/reconstructiveContent";
import styles from "./styles.module.css";

const iconMap = {
  Eye,
  RotateCcw,
  RotateCw,
  Layers,
  Droplets,
  Circle,
  Wrench,
};

export default function ConditionsTreated() {
  const { eyebrow, title, items } = reconstructiveContent.conditionsTreated;

  return (
    <section
      className={styles.section}
      aria-labelledby="conditions-treated-title"
    >
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <div className={styles.header}>
            <div className={styles.eyebrowRow}>
              <span className={styles.dash}>—</span>
              <span className={styles.eyebrow}>{eyebrow}</span>
              <span className={styles.dash}>—</span>
            </div>
            <h2 id="conditions-treated-title" className={styles.sectionTitle}>
              {title}
            </h2>
          </div>
        </RevealOnView>

        <div className={styles.grid}>
          {items.map((condition, idx) => {
            const Icon = iconMap[condition.icon] || Eye;
            return (
              <RevealOnView
                key={condition.id}
                variant="fadeUp"
                delay={idx * 80}
                className={styles.cardWrapper}
              >
                <div className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={condition.imageSrc}
                      alt={condition.imageAlt}
                      width={380}
                      height={220}
                      className={styles.image}
                      loading="lazy"
                    />
                    <div className={styles.iconBadge}>
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.cardTitle}>{condition.title}</h3>
                    <p className={styles.cardDescription}>
                      {condition.description}
                    </p>
                    <div className={styles.buttonWrapper}>
                      <Link href="/contact" className={styles.ctaButton}>
                        Book Consultation
                      </Link>
                    </div>
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
