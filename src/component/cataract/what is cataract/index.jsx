"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { cataractContent } from "@/constant/cataractContent";
import styles from "./styles.module.css";

export default function WhatIsCataract() {
  const { eyebrow, title, paragraphs, cta, image } = cataractContent.whatIsCataract;

  return (
    <section className={styles.whatIsCataract} aria-labelledby="what-is-cataract-title">
      <div className={styles.container}>
        <div className={styles.copyColumn}>
          {eyebrow && (
            <RevealOnView variant="fadeUp" delay={0}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
            </RevealOnView>
          )}

          <RevealOnView variant="fadeUp" delay={100}>
            <h2 id="what-is-cataract-title" className={styles.title}>
              {title}
            </h2>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={200}>
            <div className={styles.paragraphs}>
              {paragraphs.map((p, idx) => (
                <p key={idx} className={styles.description}>
                  {p}
                </p>
              ))}
            </div>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={300}>
            <Link href={cta.href} className={styles.ctaLink}>
              <span>{cta.label}</span>
              <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </RevealOnView>
        </div>

        <div className={styles.imageColumn}>
          <RevealOnView variant="fadeLeft" delay={200}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={620}
                height={460}
                className={styles.image}
                priority
              />
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
