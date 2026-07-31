"use client";

import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const assessmentSteps = [
  {
    id: "step-1",
    number: "01",
    title: "Understand the patient's concern",
    description: "Detailed discussion of aesthetic goals and expectations"
  },
  {
    id: "step-2",
    number: "02",
    title: "Examine eyelid function and facial balance",
    description: "Clinical assessment of eyelid structure and facial proportions"
  },
  {
    id: "step-3",
    number: "03",
    title: "Discuss suitable treatment choices",
    description: "Review appropriate surgical or non-surgical options"
  },
  {
    id: "step-4",
    number: "04",
    title: "Explain realistic expectations and recovery",
    description: "Transparent guidance on outcomes and healing process"
  }
];

export default function AestheticAssessment() {
  return (
    <section className={styles.section} aria-labelledby="assessment-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <div className={styles.header}>
            <h2 id="assessment-title" className={styles.title}>
              Treatment Planning Begins with a Detailed Assessment
            </h2>
            <p className={styles.description}>
              The appearance of the eyelids and under-eye area can be influenced by skin quality, facial structure,
              muscle function, fat distribution and medical conditions. A specialist consultation helps determine
              whether a surgical, minimally invasive or non-surgical approach is appropriate.
            </p>
          </div>
        </RevealOnView>

        <div className={styles.grid}>
          {assessmentSteps.map((step, idx) => (
            <RevealOnView
              key={step.id}
              variant="fadeUp"
              delay={idx * 100}
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <div className={styles.cardNumber}>{step.number}</div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
