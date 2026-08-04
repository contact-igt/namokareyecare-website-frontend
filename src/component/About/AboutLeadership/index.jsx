import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, CalendarDays, Users, CalendarCheck } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { aboutContent } from "@/constant/aboutContent";
import styles from "./styles.module.css";

const iconMap = {
  award: Award,
  book: BookOpen,
  users: Users,
  calendar: CalendarDays,
};

export default function AboutLeadership() {
  const { eyebrow, title, image, imageBadge, name, designation, paragraphs, highlights, cta } =
    aboutContent.leadership;

  return (
    <section className={styles.section} aria-labelledby="about-leadership-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <span className={styles.eyebrow}>{eyebrow}</span>
            <h2 id="about-leadership-title" className={styles.title}>
              {title}
            </h2>
          </div>
        </RevealOnView>

        <div className={styles.body}>
          <RevealOnView variant="fadeUp" className={styles.imageColumn}>
            <div className={styles.imageCard}>
              <span className={styles.imageBadge}>{imageBadge}</span>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className={styles.doctorImage}
              />
            </div>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={120} className={styles.copyColumn}>
            <div className={styles.copy}>
              <h3 className={styles.name}>{name}</h3>
              <p className={styles.designation}>{designation}</p>

              <div className={styles.textGroup}>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className={styles.highlights}>
                {highlights.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <article className={styles.highlightCard} key={item.title}>
                      <Icon size={26} strokeWidth={2.1} className={styles.highlightIcon} />
                      <strong>{item.title}</strong>
                      <span>{item.label}</span>
                    </article>
                  );
                })}
              </div>

              <Link href={cta.href} className={styles.cta}>
                <CalendarCheck size={17} strokeWidth={2.2} aria-hidden="true" />
                {cta.label}
              </Link>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
