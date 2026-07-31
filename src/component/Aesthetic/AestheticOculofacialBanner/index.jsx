"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function AestheticOculofacialBanner() {
  return (
    <section className={styles.bannerSection} aria-label="Aesthetic Oculofacial Treatment Banner">
      <div className={styles.bgImageWrapper}>
        <Image
          src="/assets/Aesthetic/aesthatic.png"
          alt="Aesthetic Treatment Background"
          fill
          priority
          className={styles.desktopBg}
        />
        <Image
          src="/assets/Aesthetic/aesthaticmb.png"
          alt="Aesthetic Treatment Background Mobile"
          fill
          priority
          className={styles.mobileBg}
        />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.subtitleWrapper}>
              <div className={styles.line}></div>
              <span className={styles.subtitle}>Expertise Your Eyes Deserve</span>
            </div>
            
            <h1 className={styles.title}>
              Refined Eye and Facial Aesthetics with a Clinical Approach
            </h1>
            
            <p className={styles.description}>
              Aesthetic oculoplasty focuses on the delicate eyelid, eyebrow and surrounding facial areas. At Namokar Eye &amp; Oculoplasty Centre, each treatment is planned after evaluating facial balance, eyelid function, skin condition and individual concerns.
            </p>
            
            <Link href="/appointment" className={styles.ctaButton}>
              Book an Aesthetic Consultation
            </Link>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
