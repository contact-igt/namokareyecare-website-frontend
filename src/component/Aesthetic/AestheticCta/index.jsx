"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function AestheticCta() {
  return (
    <section className={styles.section} aria-labelledby="aesthetic-cta-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.ctaBox}>
            <div className={styles.content}>
              <h2 id="aesthetic-cta-title" className={styles.title}>
                Want Your Eyes to Look More Refreshed Without Losing Natural Expression?
              </h2>
              <p className={styles.description}>
                Book a consultation to understand the right aesthetic oculoplasty option for your concern.
              </p>

              <Link href="/appointment" className={styles.ctaBtn}>
                <Calendar size={20} strokeWidth={2} />
                <span>Book Aesthetic Oculoplasty Consultation</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
