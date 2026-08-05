"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, Eye, ShieldCheck, CreditCard } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

function PhotoPanel({ image }) {
  return (
    <div className={`${styles.photo} ${styles[image.variant]}`}>
      <div
        className={styles.photoInner}
        role="img"
        aria-label={image.alt}
        style={{ "--photo-src": `url(${image.src})` }}
      />
    </div>
  );
}

export default function WhyChoose() {
  const { eyebrow, title, description, cta, highlights, images } =
    homeContent.whyChoose;

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className={styles.whyChoose} aria-labelledby="why-choose-title">
      <span className={styles.leftGlow} aria-hidden="true" />
      <span className={styles.circleOne} aria-hidden="true" />
      <span className={styles.circleTwo} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.collage}>
          {images.map((image) => (
            <PhotoPanel key={image.variant} image={image} />
          ))}
        </div>

        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h2 id="why-choose-title" className={styles.title}>
            {title}
          </h2>

          {description && (
            <p className={styles.description}>{description}</p>
          )}

          <motion.ul
            className={styles.list}
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {highlights.map(({ label, icon }) => {
              const icons = { Award, Building2, Eye, ShieldCheck, CreditCard };
              const Icon = icons[icon];
              return (
                <motion.li
                  key={label}
                  className={styles.listItem}
                  variants={itemVariants}
                >
                  <Icon className={styles.listIcon} size={22} strokeWidth={2} />
                  <div className={styles.listText}>
                    <span className={styles.listTitle}>{label}</span>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          <Link href={cta.href} className={styles.cta}>
            {cta.label}
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
