import Link from "next/link";
import {
  ArrowRight,
  BadgePlus,
  Bone,
  CirclePlus,
  Ear,
  Eye,
  HandHeart,
  ScanEye,
  Stethoscope,
} from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

const serviceIcons = {
  cataract: [Eye, CirclePlus],
  eyelid: [Bone, BadgePlus],
  glaucoma: [Ear, CirclePlus],
  aesthetic: [HandHeart, BadgePlus],
  reconstructive: [Stethoscope, CirclePlus],
  exams: [ScanEye, BadgePlus],
};

function ServiceIcon({ type }) {
  const [PrimaryIcon, PlusIcon] = serviceIcons[type] ?? serviceIcons.cataract;

  return (
    <span className={styles.iconWrap} aria-hidden="true">
      <PrimaryIcon className={styles.primaryIcon} strokeWidth={1.8} />
      <PlusIcon className={styles.plusIcon} strokeWidth={2} />
    </span>
  );
}

export default function Services() {
  const { eyebrow, title, items, cta } = homeContent.services;

  return (
    <section className={styles.services} aria-labelledby="home-services-title">
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>

        <h2 id="home-services-title" className={styles.title}>
          {title}
        </h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <Link key={item.title} href={item.href} className={styles.card}>
              <ServiceIcon type={item.icon} />
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.cardCopy}>
                <span className={styles.cardTitle}>{item.title}</span>
                {item.description && (
                  <span className={styles.cardDescription}>{item.description}</span>
                )}
                <span className={styles.learnMore}>Learn More</span>
              </span>
            </Link>
          ))}
        </div>

        <div className={styles.ctaRow}>
          <Link href={cta.href} className={styles.cta}>
            {cta.label}
            <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
