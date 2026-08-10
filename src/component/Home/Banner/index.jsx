import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Phone, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

const bgVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

const copyContainerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -15,
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

export default function Banner() {
  const slides = homeContent.banner.slides || [homeContent.banner];
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoScrollTimer = useRef(null);

  const stopAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = null;
    }
  };

  useEffect(() => {
    stopAutoScroll();
    if (slides.length <= 1) return undefined;

    autoScrollTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => stopAutoScroll();
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <section
      className={styles.hero}
      aria-label="Namokar Eye hero"
    >
      {/* Dynamic Background Image Layer with Lens Focus Transition */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          className={styles.heroBg}
          style={{
            backgroundImage: `url(${activeSlide.bgImage || "/assets/Home/homebg.png"})`,
            backgroundPosition: activeSlide.bgPosition || "right -160px center",
          }}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>

      <div className={styles.heroOverlay} />

      <div className={styles.heroInner}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id || currentSlide}
            variants={copyContainerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.copy}
          >
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>{activeSlide.eyebrow}</span>
            </div>

            <h1 className={styles.title}>
              {activeSlide.title.map((line, i) => (
                <span key={`${activeSlide.id}-${line}-${i}`} className={styles.titleLine}>
                  {line}
                </span>
              ))}
            </h1>

            <p className={styles.description}>{activeSlide.description}</p>

            {activeSlide.showNabhBadge && (
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
            )}

            <div className={styles.ctaGroup}>
              <Link href={activeSlide.cta.href} className={styles.cta}>
                {activeSlide.cta.label}
                <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </Link>
              {activeSlide.secondaryCta && (
                <a href={activeSlide.secondaryCta.href} className={styles.ctaSecondary}>
                  <Phone size={17} strokeWidth={2.2} aria-hidden="true" />
                  {activeSlide.secondaryCta.label}
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stats Card at the bottom right */}
      <div className={styles.statsCardWrapper}>
        <div className={styles.statsCard}>
          <div className={styles.statsItem}>
            <div className={styles.iconCircle}>
              <Award className={styles.statsIcon} size={22} />
            </div>
            <div className={styles.statsContent}>
              <span className={styles.statsNumber}>30+</span>
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



