"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Info, ArrowRight } from "lucide-react";
import { cataractContent } from "@/constant/cataractContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function ChooseVision() {
  const { chooseVision } = cataractContent;
  const { title, description, columns, rows, surgeonNote, cta } = chooseVision;

  return (
    <section className={styles.section} aria-labelledby="choose-vision-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <h2 id="choose-vision-title" className={styles.title}>
              {title.prefix}
              <span className={styles.highlight}>{title.highlight}</span>
            </h2>
            <p className={styles.description}>{description}</p>
          </div>
        </RevealOnView>

        <RevealOnView variant="fadeUp" delay={150}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={`${styles.th} ${styles.featureCol} ${styles.standardHeader}`}>
                    <div className={styles.featureHeader}>Feature</div>
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col.id}
                      className={`${styles.th} ${col.popular ? styles.popularHeader : styles.standardHeader}`}
                    >
                      {col.popular && (
                        <div className={styles.popularBadge}>
                          <span>★ MOST POPULAR</span>
                        </div>
                      )}
                      <div className={styles.lensHeader}>
                        <div className={styles.lensTitle}>{col.title}</div>
                        {col.subtitle && <div className={styles.lensSubtitle}>{col.subtitle}</div>}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Special Row: Lens Design */}
                <tr className={styles.dataRow}>
                  <td className={`${styles.td} ${styles.featureCol}`}>
                    <span className={styles.rowLabel}>Lens Design</span>
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.id}
                      className={`${styles.td} ${col.popular ? styles.popularCol : ""}`}
                    >
                      <div className={styles.lensDesignWrapper}>
                        <div className={styles.lensImageContainer}>
                          <Image
                            src={col.image}
                            alt={`${col.title} design`}
                            width={110}
                            height={110}
                            className={styles.lensImage}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Normal rows */}
                {rows.map((row, idx) => (
                  <tr key={idx} className={styles.dataRow}>
                    <td className={`${styles.td} ${styles.featureCol}`}>
                      <span className={styles.rowLabel}>{row.label}</span>
                    </td>
                    {columns.map((col) => {
                      const val = row.values[col.id];
                      return (
                        <td
                          key={col.id}
                          className={`${styles.td} ${col.popular ? styles.popularCol : ""} ${
                            val?.check ? styles.successTd : ""
                          }`}
                        >
                          <div className={styles.cellContent}>
                            {val?.check && (
                              <Check size={16} className={styles.checkIcon} strokeWidth={3} />
                            )}
                            <span
                              className={`${styles.cellText} ${
                                val?.check ? styles.textSuccess : ""
                              } ${val?.isNo ? styles.textMuted : ""} ${
                                val?.isWarning ? styles.textWarning : ""
                              }`}
                            >
                              {val?.text}
                            </span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnView>

        {/* Surgeon Note */}
        <RevealOnView variant="fadeUp" delay={200}>
          <div className={styles.noteBox}>
            <div className={styles.noteIconWrapper}>
              <Info size={22} className={styles.noteIcon} />
            </div>
            <div className={styles.noteContent}>
              <h4 className={styles.noteTitle}>{surgeonNote.title}</h4>
              <p className={styles.noteText}>{surgeonNote.text}</p>
            </div>
          </div>
        </RevealOnView>

        {/* CTA */}
        <RevealOnView variant="fadeUp" delay={250}>
          <div className={styles.ctaWrapper}>
            <Link href={cta.href} className={styles.ctaButton}>
              <span>{cta.label}</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </RevealOnView>
      </div>
    </section>
  );
}
