"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function ThankYouContent() {
  return (
    <section className={styles.section} aria-labelledby="thank-you-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp" delay={0}>
          <div className={styles.contentBox}>
            <h2 id="thank-you-title" className={styles.heading}>
              Thanks — appointment request received
            </h2>

            <p className={styles.description}>
              We have received your appointment request and will reach out to confirm the date and time.
              If you need immediate assistance, please contact the hospital.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/" className={styles.btnOutline}>
                <span>Return to Home</span>
                <span className={styles.iconCircle}>
                  <ArrowUpRight size={18} strokeWidth={2.2} />
                </span>
              </Link>

              <Link href="/appointment" className={styles.btnSecondary}>
                <span>Book Another</span>
                <span className={styles.iconCircle}>
                  <ArrowUpRight size={18} strokeWidth={2.2} />
                </span>
              </Link>
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
