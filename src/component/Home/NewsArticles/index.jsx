import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, ArrowRight } from "lucide-react";
import { newsArticlesContent } from "@/constant/newsArticlesContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function ArticleCard({ article }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={article.image.src}
          alt={article.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
          className={styles.articleImg}
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <User size={13} className={styles.metaIcon} />
            <span>By: {article.author}</span>
          </div>
          <div className={styles.metaDivider}>|</div>
          <div className={styles.metaItem}>
            <Calendar size={13} className={styles.metaIcon} />
            <span>{article.date}</span>
          </div>
        </div>

        <h3 className={styles.articleTitle}>
          <Link href={article.href} className={styles.titleLink}>
            {article.title}
          </Link>
        </h3>

        <Link href={article.href} className={styles.learnMore}>
          <span>Learn More</span>
          <ArrowRight size={15} strokeWidth={2.5} className={styles.arrowIcon} />
        </Link>
      </div>
    </article>
  );
}

export default function NewsArticles() {
  const { eyebrow, title, description, articles } = newsArticlesContent;
  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    pauseOnHover: true,
  };

  return (
    <section className={styles.newsSection} aria-labelledby="news-section-title">
      <div className={styles.worldMapBg} aria-hidden="true">
        <Image
          src="/assets/Home/stats-map-new.jpeg"
          alt="World Map Background"
          fill
          sizes="100vw"
          className={styles.mapImage}
          priority={false}
        />
      </div>

      <div className={styles.inner}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>{eyebrow}</span>
              <span className={styles.eyebrowLine} aria-hidden="true" />
            </div>
            <h2 id="news-section-title" className={styles.title}>
              {title}
            </h2>
            {description && (
              <p className={styles.description}>{description}</p>
            )}
          </div>
        </RevealOnView>

        <div className={styles.grid}>
          {articles.map((article, i) => (
            <RevealOnView
              key={article.id}
              variant="fadeUp"
              delay={i * 130}
              className={styles.cardWrapper}
            >
              <ArticleCard article={article} />
            </RevealOnView>
          ))}
        </div>

        <div className={styles.mobileSlider}>
          <Slider {...sliderSettings}>
            {articles.map((article) => (
              <div key={article.id} className={styles.slideItem}>
                <ArticleCard article={article} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}