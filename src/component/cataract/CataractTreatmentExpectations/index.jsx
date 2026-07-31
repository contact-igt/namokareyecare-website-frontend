"use client";

import RevealOnView from "@/common/RevealOnView";
import { cataractContent } from "@/constant/cataractContent";
import styles from "./styles.module.css";

export default function CataractTreatmentExpectations() {
  const { title, steps, note } = cataractContent.treatmentExpectations;

  return (
    <section className={styles.section} aria-labelledby="treatment-expectations-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <h2 id="treatment-expectations-title" className={styles.title}>
            {title}
          </h2>
        </RevealOnView>

        {/* 5-step process timeline */}
        <div className={styles.timelineWrapper}>
          <div className={styles.connectingLine} aria-hidden="true" />

          <div className={styles.stepsGrid}>
            {steps.map((item, index) => (
              <RevealOnView
                key={item.step}
                variant="fadeUp"
                delay={100 + index * 80}
              >
                <div className={styles.stepCol}>
                  <div className={styles.stepCircle}>{item.step}</div>

                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{item.title}</h3>
                    <p className={styles.stepSubtitle}>{item.subtitle}</p>
                  </div>
                </div>
              </RevealOnView>
            ))}
          </div>
        </div>

        {/* Bottom Note Box */}
        <RevealOnView variant="fadeUp" delay={400}>
          <div className={styles.noteBox}>
            <span className={styles.noteAccentBar} aria-hidden="true" />
            <p className={styles.noteText}>
              <strong>Note:</strong> {note}
            </p>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
