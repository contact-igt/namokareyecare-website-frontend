import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star, StarHalf, UserCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsContent } from "@/constant/testimonialsContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

function GoogleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

const CLAMP_LINES = 5;
const APPROX_CHARS_PER_LINE = 58;
const MAX_CHARS = CLAMP_LINES * APPROX_CHARS_PER_LINE;

function TestimonialCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.quote.length > MAX_CHARS;

  return (
    <div className={styles.card}>
      <p className={`${styles.quote} ${!expanded && isLong ? styles.quoteClamped : ""}`}>
        &ldquo;{review.quote}&rdquo;
      </p>
      {isLong && (
        <button
          className={styles.seeMoreBtn}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
      <div className={styles.stars}>
        {[...Array(5)].map((_, idx) => {
          if (idx < Math.floor(review.stars)) {
            return <Star key={idx} size={16} fill="#ff9800" color="#ff9800" className={styles.starIcon} />;
          } else if (idx < Math.ceil(review.stars)) {
            return <StarHalf key={idx} size={16} fill="#ff9800" color="#ff9800" className={styles.starIcon} />;
          } else {
            return <Star key={idx} size={16} color="#cfd8e3" className={styles.starIcon} />;
          }
        })}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { eyebrow, title, reviews } = testimonialsContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimer = useRef(null);

  const totalReviews = reviews.length;

  const stopAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = null;
    }
  };

  useEffect(() => {
    stopAutoScroll();

    if (isPaused) {
      return undefined;
    }

    autoScrollTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalReviews);
    }, 4500);

    return () => stopAutoScroll();
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  // Calculate visible range of 3 items for larger screens or sliding window
  const getVisibleReviews = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(activeIndex + i) % totalReviews]);
    }
    return items;
  };

  return (
    <section className={styles.testimonialsSection} aria-labelledby="testimonials-section-title">
      <div className={styles.inner}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <div className={styles.left}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
              <h2 id="testimonials-section-title" className={styles.title}>
                {title}
              </h2>
            </div>

            <div className={styles.navButtons}>
              <button
                onClick={handlePrev}
                className={styles.navButton}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className={styles.navButton}
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </RevealOnView>

        {/* Carousel Tracks */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {getVisibleReviews().map((review) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={styles.testimonialWrapper}
                >
                  {/* Review Card */}
                  <TestimonialCard review={review} />

                  {/* Author Metadata below the card */}
                  <div className={styles.authorMeta}>
                    <div className={styles.avatarWrap}>
                      <UserCircle size={44} className={styles.avatar} />
                    </div>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{review.author.name}</h4>
                      <p className={styles.authorRole}>{review.author.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
