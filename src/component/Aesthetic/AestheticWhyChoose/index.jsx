"use client";

import Image from "next/image";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function AestheticWhyChoose() {
  return (
    <section className={styles.section} aria-labelledby="why-choose-title">
      <div className={styles.container}>
        
        <div className={styles.contentColumn}>
          <RevealOnView variant="fadeRight" delay={0}>
            <div className={styles.contentWrapper}>
              <span className={styles.badge}>Expert Care</span>
              <h2 id="why-choose-title" className={styles.title}>
                Why Choose an Oculoplastic Surgeon?
              </h2>
              <p className={styles.description}>
                The eye area is delicate, and the eyelid skin is very thin. An oculoplastic surgeon is trained as an eye specialist first, which allows procedures to be planned with both cosmetic outcome and eye protection in mind.
              </p>
              
              <div className={styles.highlightBox}>
                <div className={styles.highlightText}>
                  At Namokar Eye &amp; Oculoplasty Centre, aesthetic eye-area procedures are led by Dr. Poonam Jain, who has training in aesthetic oculoplasty and experience in ophthalmology and oculoplasty.
                </div>
              </div>
            </div>
          </RevealOnView>
        </div>

        <div className={styles.imageColumn}>
          <RevealOnView variant="fadeLeft" delay={150}>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/Aesthetic/IMG_0051.JPG"
                alt="Dr. Poonam Jain consulting a patient"
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
