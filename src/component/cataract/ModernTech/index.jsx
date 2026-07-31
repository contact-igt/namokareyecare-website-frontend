"use client";

import Image from "next/image";
import { cataractContent } from "@/constant/cataractContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function ModernTech() {
  const { modernTech } = cataractContent;
  const { title, description, images } = modernTech;

  return (
    <section className={styles.section} aria-labelledby="modern-tech-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <h2 id="modern-tech-title" className={styles.title}>
              {title}
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
        </RevealOnView>

        <div className={styles.grid}>
          {images.map((img, idx) => (
            <RevealOnView key={idx} variant="fadeUp" delay={100 + idx * 80}>
              <div className={styles.imageCard}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={280}
                  className={styles.image}
                />
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
