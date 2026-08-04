"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Clock3, Copy, Eye, Microscope, Stethoscope, History, ArrowRight } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

const cardIcons = {
  copy: Copy,
  eye: Eye,
  microscope: Microscope,
  stethoscope: Stethoscope,
  support: Clock3,
  history: History,
};

export default function TreatmentVideo() {
  const { eyebrow, title, description, cta, cards, media, sparkle, arrow } =
    homeContent.treatmentVideo;

  const videoRef = useRef(null);
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.5 });

  return (
    <section
      className={styles.treatmentVideo}
      aria-labelledby="treatment-video-title"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h2 id="treatment-video-title" className={styles.title}>
            {title}
          </h2>

          {description && (
            <p className={styles.sectionDescription}>{description}</p>
          )}

          <Image
            src={sparkle.src}
            alt={sparkle.alt}
            width={sparkle.width}
            height={sparkle.height}
            className={styles.sparkle}
            aria-hidden="true"
          />

          <motion.div 
            className={styles.cards}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {cards.map((card) => {
              const Icon = cardIcons[card.icon] ?? Copy;

              return (
                <motion.article
                  key={card.title}
                  className={`${styles.card} ${styles[card.variant]}`}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                  }}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.iconBox} aria-hidden="true">
                      <Icon size={28} strokeWidth={1.9} />
                    </span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                  <p className={styles.cardText}>{card.description}</p>
                </motion.article>
              );
            })}
          </motion.div>

          {cta && (
            <div className={styles.ctaWrapper}>
              <Link href={cta.href} className={styles.ctaBtn}>
                {cta.label}
                <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.videoWrap} ref={videoRef}>
            {isVideoInView && (
              <iframe
                className={styles.youtubeFrame}
                src={`${media.youtubeEmbedUrl}&autoplay=1&mute=1`}
                title="Namokar Eye video"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          {/* Curved Arrow Image */}
          {arrow && (
            <Image
              src={arrow.src}
              alt={arrow.alt}
              width={arrow.width}
              height={arrow.height}
              className={styles.arrow}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  );
}
