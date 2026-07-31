"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cataractContent } from "@/constant/cataractContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function CataractFaq() {
  const { faq } = cataractContent;
  const { title, items } = faq;
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section} aria-labelledby="cataract-faq-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <h2 id="cataract-faq-title" className={styles.title}>
            {title}
          </h2>
        </RevealOnView>

        <div className={styles.faqList}>
          {items.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <RevealOnView key={item.id} variant="fadeUp" delay={80 * idx}>
                <div className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
                  <button
                    className={styles.questionBtn}
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.questionText}>{item.question}</span>
                    <div className={styles.iconCircle}>
                      <ChevronDown
                        size={20}
                        className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ""}`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className={styles.answerBody}>
                      <p className={styles.answerText}>{item.answer}</p>
                    </div>
                  )}
                </div>
              </RevealOnView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
