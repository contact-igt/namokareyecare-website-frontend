"use client";

import Link from "next/link";
import Image from "next/image";
import RevealOnView from "@/common/RevealOnView";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import styles from "./styles.module.css";

export default function AestheticOculoplastyTreatments() {
  const { title, items } = aestheticOculofacialContent.proceduresAndTreatments;

  return (
    <section className={styles.section} aria-labelledby="aesthetic-treatments-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <h2 id="aesthetic-treatments-title" className={styles.sectionTitle}>
            {title}
          </h2>
        </RevealOnView>

        <div className={styles.grid}>
          {items.map((treatment, idx) => (
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
                    <Link href="/contact#appointment" className={styles.ctaButton}>
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
