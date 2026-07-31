"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const treatmentsData = [
  {
    id: "blepharoplasty",
    title: "Blepharoplasty",
    description: "A procedure designed to address excess eyelid skin or puffiness and create a more refreshed appearance while respecting eyelid function.",
    imageSrc: "/assets/Aesthetic/Blepharoplasty.png",
    imageAlt: "Blepharoplasty eye view"
  },
  {
    id: "thread-lift",
    title: "Thread Lift",
    description: "A minimally invasive treatment that may help improve selected areas of facial laxity for suitable patients after clinical assessment.",
    imageSrc: "/assets/Aesthetic/Thread Lift.png",
    imageAlt: "Thread Lift treatment"
  },
  {
    id: "brow-lift",
    title: "Brow Lift",
    description: "Designed to improve a low or heavy brow position and create better balance around the upper eye area.",
    imageSrc: "/assets/Aesthetic/Brow Lift.png",
    imageAlt: "Brow Lift close-up"
  },
  {
    id: "dark-circles",
    title: "Dark Circles and Under-Eye Concerns",
    description: "Evaluation and customised treatment planning for pigmentation, hollowness, puffiness and other under-eye concerns.",
    imageSrc: "/assets/Aesthetic/Dark Circles and Under-Eye Concerns.png",
    imageAlt: "Dark Circles and Under-Eye Concerns patches"
  },
  {
    id: "drooping-eyelid",
    title: "Drooping Eyelid Correction",
    description: "Assessment and treatment of eyelid drooping based on its cause, severity, eyelid muscle function and impact on appearance or vision.",
    imageSrc: "/assets/Aesthetic/Drooping Eyelid Correction.png",
    imageAlt: "Drooping Eyelid Correction eye view"
  }
];

export default function AestheticOculoplastyTreatments() {
  return (
    <section className={styles.section} aria-labelledby="aesthetic-treatments-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <h2 id="aesthetic-treatments-title" className={styles.sectionTitle}>
            Aesthetic Oculoplasty Treatments
          </h2>
        </RevealOnView>

        <div className={styles.grid}>
          {treatmentsData.map((treatment, idx) => (
            <RevealOnView
              key={treatment.id}
              variant="fadeUp"
              delay={idx * 100}
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={treatment.imageSrc}
                    alt={treatment.imageAlt}
                    width={380}
                    height={240}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{treatment.title}</h3>
                  <p className={styles.cardDescription}>{treatment.description}</p>
                  <div className={styles.buttonWrapper}>
                    <Link href="/appointment" className={styles.ctaButton}>
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
