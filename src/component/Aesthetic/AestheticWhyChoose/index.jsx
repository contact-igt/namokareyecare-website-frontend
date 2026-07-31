"use client";

import Image from "next/image";
import RevealOnView from "@/common/RevealOnView";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import styles from "./styles.module.css";

export default function AestheticWhyChoose() {
  const { badge, title, description, highlightText, image } =
    aestheticOculofacialContent.whyChooseOculoplasticSurgeon;

  return (
    <section className={styles.section} aria-labelledby="why-choose-surgeon-title">
      <div className={styles.container}>
        <div className={styles.contentColumn}>
          <RevealOnView variant="fadeRight" delay={0}>
            <div className={styles.contentWrapper}>
              <span className={styles.badge}>{badge}</span>
              <h2 id="why-choose-surgeon-title" className={styles.title}>
                {title}
              </h2>
              <p className={styles.description}>{description}</p>

              <div className={styles.highlightBox}>
                <div className={styles.highlightText}>{highlightText}</div>
              </div>
            </div>
          </RevealOnView>
        </div>

        <div className={styles.imageColumn}>
          <RevealOnView variant="fadeLeft" delay={150}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
