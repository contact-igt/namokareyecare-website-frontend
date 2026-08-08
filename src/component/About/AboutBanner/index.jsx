import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Phone, Users, ShieldCheck } from "lucide-react";
import RevealOnView, { WordReveal } from "@/common/RevealOnView";
import { aboutContent } from "@/constant/aboutContent";
import styles from "./styles.module.css";

export default function AboutBanner() {
  const { eyebrow, title, description, cta, secondaryCta, stats } = aboutContent.banner;

  return (
    <section className={styles.hero} aria-label="About Namokar Eye and Oculoplasty Centre">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
          </RevealOnView>

          <h1 className={styles.title}>
            {title.map((line, index) => (
              <WordReveal
                key={line}
                text={line}
                tag="span"
                delay={index * 120}
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
              <Link href={secondaryCta.href} className={styles.ctaSecondary}>
                <Phone size={17} strokeWidth={2.2} aria-hidden="true" />
                {secondaryCta.label}
              </Link>
            </div>
          </RevealOnView>
        </div>
      </div>

      <div className={styles.statsCardWrapper}>
        <div className={styles.statsCard}>
          {stats.map((stat, index) => (
            <div className={styles.statsItem} key={stat.label}>
              <div className={styles.iconCircle}>
                {index === 0 ? <Award size={22} /> : <Users size={22} />}
              </div>
              <div className={styles.statsContent}>
                <span className={styles.statsNumber}>{stat.value}</span>
                <span className={styles.statsLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
