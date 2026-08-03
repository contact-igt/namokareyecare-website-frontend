import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { contactContent } from "@/constant/contactContent";
import styles from "./styles.module.css";

const iconMap = {
  Clock,
  Mail,
  MapPin,
  Phone,
};

export default function ContactDetails() {
  const { eyebrow, title, description, cards } = contactContent.details;

  return (
    <section className={styles.section} aria-labelledby="contact-details-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="contact-details-title" className={styles.title}>
              <span>{title[0]}</span>
              <span>{title[1]}</span>
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
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
                <article className={`${styles.card} ${card.featured ? styles.featured : ""}`}>
                  <span className={styles.iconBox} aria-hidden="true">
                    <Icon size={23} strokeWidth={2.1} />
                  </span>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                  <Link href={card.href} className={styles.cardLink}>
                    {card.linkLabel}
                  </Link>
                </article>
              </RevealOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
