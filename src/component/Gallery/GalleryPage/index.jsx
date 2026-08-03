import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryContent } from "@/constant/galleryContent";
import styles from "./styles.module.css";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { eyebrow, title, description, filters, items } = galleryContent;

  const visibleItems = useMemo(() => {
    if (activeFilter === "All") {
      return items;
    }

    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <main className={styles.galleryPage}>
      <section className={styles.hero} aria-labelledby="gallery-title">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 id="gallery-title" className={styles.title}>
            {title}
          </h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.filters} aria-label="Gallery filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.activeFilter : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gridSection} aria-label="Gallery photographs">
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {visibleItems.map((item) => (
              <figure key={`${item.src}-${item.category}`} className={styles.card}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 980px) 45vw, 270px"
                  className={styles.image}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
