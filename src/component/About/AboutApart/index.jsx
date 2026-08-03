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
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <h2 id="about-apart-title" className={styles.title}>
            {plainTitle} <span>{accent}</span>
          </h2>
        </RevealOnView>

        <div className={styles.grid}>
          {cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <RevealOnView
                key={card.title}
                variant="fadeUp"
                delay={index * 110}
                className={styles.cardWrapper}
              >
                <article className={styles.card}>
                  <span className={styles.iconBox} aria-hidden="true">
                    <Icon size={30} strokeWidth={2.1} />
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
