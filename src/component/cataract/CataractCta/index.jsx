"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { cataractContent } from "@/constant/cataractContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function CataractCta() {
  const { ctaSection } = cataractContent;
  const { title, description, cta } = ctaSection;

  return (
    <section className={styles.section} aria-labelledby="cataract-cta-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.ctaBox}>
            <div className={styles.content}>
              <h2 id="cataract-cta-title" className={styles.title}>
                {title}
              </h2>
              <p className={styles.description}>{description}</p>

              <Link href={cta.href} className={styles.ctaBtn}>
                <Calendar size={20} strokeWidth={2} />
                <span>{cta.label}</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
