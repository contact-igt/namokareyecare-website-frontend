import { Award, Heart, Sparkles, Users } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { aboutContent } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const iconMap = {
  heart: Heart,
  users: Users,
  badge: Award,
  sparkles: Sparkles,
};

export default function AboutApart() {
  const { title, accent, cards } = aboutContent.apart;
  const plainTitle = title.replace(accent, "").trim();

  return (
    <section className={styles.section} aria-labelledby="about-apart-title">
      <div className={styles.background} aria-hidden="true" />
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.headerGroup}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>Why Choose Us</span>
            </div>
            <h2 id="about-apart-title" className={styles.title}>
              {plainTitle} <span className={styles.titleAccent}>{accent}</span>
            </h2>
          </div>
        </RevealOnView>

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <RevealOnView
                key={card.title}
                variant="fadeUp"
                delay={index * 120}
                className={styles.cardWrapper}
              >
                <article className={styles.card}>
                  <div className={styles.cardTopAccent} aria-hidden="true" />
                  <span className={styles.iconBox} aria-hidden="true">
                    <Icon size={26} strokeWidth={2} className={styles.icon} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              </RevealOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
