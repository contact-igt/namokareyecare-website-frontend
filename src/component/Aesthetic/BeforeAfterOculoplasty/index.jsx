"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { aestheticOculofacialContent } from "@/constant/aestheticOculofacialContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function BeforeAfterOculoplasty() {
  const { beforeAfterSection } = aestheticOculofacialContent;
  const { title, subtitle, items, cta } = beforeAfterSection;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newIndex = Math.round(scrollLeft / clientWidth);
      setActiveIndex(newIndex);
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const nextIndex = Math.max(0, activeIndex - 1);
    scrollToSlide(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = Math.min(items.length - 1, activeIndex + 1);
    scrollToSlide(nextIndex);
  };

  return (
    <section className={styles.section} aria-labelledby="before-after-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <div className={styles.headerText}>
              <h2 id="before-after-title" className={styles.title}>
                {title}
              </h2>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>

            {/* Header Nav Controls */}
            <div className={styles.headerNavControls}>
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                className={styles.navBtn}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                disabled={activeIndex >= items.length - 1}
                className={styles.navBtn}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </RevealOnView>

        {/* Carousel / Slider Container */}
        <RevealOnView variant="fadeUp" delay={150}>
          <div className={styles.carouselWrapper}>
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className={styles.sliderTrackContainer}
            >
              <div className={styles.sliderTrack}>
                {items.map((card) => (
                  <div key={card.id} className={styles.cardCol}>
                    <div className={styles.card}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>

                      {/* Before and After Image Pair */}
                      <div className={styles.imagePairRow}>
                        <div className={styles.imgBox}>
                          <Image
                            src={card.beforeImage}
                            alt={`${card.title} Before`}
                            width={260}
                            height={190}
                            className={styles.cardImg}
                          />
                          <span className={`${styles.badge} ${styles.beforeBadge}`}>
                            Before
                          </span>
                        </div>

                        <div className={styles.arrowCircle}>
                          <ArrowRight size={16} strokeWidth={2.5} />
                        </div>

                        <div className={styles.imgBox}>
                          <Image
                            src={card.afterImage}
                            alt={`${card.title} After`}
                            width={260}
                            height={190}
                            className={styles.cardImg}
                          />
                          <span className={`${styles.badge} ${styles.afterBadge}`}>
                            After
                          </span>
                        </div>
                      </div>

                      <p className={styles.cardDescription}>{card.description}</p>

                      <div className={styles.cardFooter}>
                        <p className={styles.disclaimerText}>{card.disclaimer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots Indicator */}
            <div className={styles.paginationDots}>
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`${styles.dot} ${
                    activeIndex === idx ? styles.activeDot : ""
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </RevealOnView>

        {/* Gallery CTA Button */}
        <RevealOnView variant="fadeUp" delay={250}>
          <div className={styles.ctaWrapper}>
            <Link href={cta.href} className={styles.galleryBtn}>
              {cta.label}
            </Link>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
