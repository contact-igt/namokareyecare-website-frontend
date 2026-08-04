import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Phone, ShieldCheck } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import RevealOnView, { WordReveal } from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function Banner() {
  const { eyebrow, title, description, cta } = homeContent.banner;

  return (
    <section className={styles.hero} aria-label="Namokar Eye hero">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
          </RevealOnView>

          <h1 className={styles.title}>
            {title.map((line, i) => (
              <WordReveal
                key={line}
                text={line}
                tag="span"
                delay={i * 120}
                className={styles.titleLine}
              />
            ))}
          </h1>

          <RevealOnView variant="fadeUp" delay={350}>
            <p className={styles.description}>{description}</p>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={420}>
            <div className={styles.nabhBadgeWrapper}>
              <div className={styles.nabhBadge}>
                <div className={styles.nabhLogoBox}>
                  <Image
                    src="/assets/Header/Patient_saftey_logo.png"
                    alt="NABH Certified Logo"
                    width={32}
                    height={32}
                    className={styles.nabhBadgeLogo}
                  />
                </div>
                <div className={styles.nabhBadgeTextGroup}>
                  <span className={styles.nabhBadgeTitle}>
                    <ShieldCheck size={16} className={styles.shieldIcon} />
                    NABH Certified Eye Centre
                  </span>
                  <span className={styles.nabhBadgeSubtitle}>
                    Highest Quality & Patient Safety Standards
                  </span>
                </div>
              </div>
            </div>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={480}>
            <div className={styles.ctaGroup}>
              <Link href={cta.href} className={styles.cta}>
                {cta.label}
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              <a href="tel:+919876543210" className={styles.ctaSecondary}>
                <Phone size={17} strokeWidth={2.2} aria-hidden="true" />
                Call Us Now
              </a>
            </div>
          </RevealOnView>
        </div>
      </div>

      {/* Stats Card at the bottom right */}
      <div className={styles.statsCardWrapper}>
        <div className={styles.statsCard}>
          <div className={styles.statsItem}>
            <div className={styles.iconCircle}>
              <Award className={styles.statsIcon} size={22} />
            </div>
            <div className={styles.statsContent}>
              <span className={styles.statsNumber}>30</span>
              <span className={styles.statsLabel}>Years Excellence</span>
            </div>
          </div>

          <div className={styles.statsItem}>
            <div className={styles.iconCircle}>
              <Users className={styles.statsIcon} size={22} />
            </div>
            <div className={styles.statsContent}>
              <span className={styles.statsNumber}>50K+</span>
              <span className={styles.statsLabel}>Happy Patients</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}


