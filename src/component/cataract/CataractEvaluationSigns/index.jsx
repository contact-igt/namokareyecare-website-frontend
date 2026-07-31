"use client";

import { Eye } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { cataractContent } from "@/constant/cataractContent";
import styles from "./styles.module.css";

export default function CataractEvaluationSigns() {
  const { title, items } = cataractContent.evaluationSigns;

  return (
    <section className={styles.section} aria-labelledby="cataract-signs-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <h2 id="cataract-signs-title" className={styles.title}>
            {title}
          </h2>
        </RevealOnView>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <RevealOnView
              key={item.id}
              variant="fadeUp"
              delay={100 + index * 80}
            >
              <div className={styles.card}>
                <div className={styles.iconCircle} aria-hidden="true">
                  <Eye className={styles.icon} size={22} strokeWidth={2} />
                </div>
                <p className={styles.label}>{item.label}</p>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
