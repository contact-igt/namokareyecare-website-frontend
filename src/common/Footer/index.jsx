import Image from "next/image";
import Link from "next/link";
import { footerContent } from "@/constant/footerContent";
import styles from "./styles.module.css";

const FacebookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialIconMap = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};

export default function Footer() {
  const { logo, description, links, openingHours, contact, socials, copyright, poweredBy } =
    footerContent;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoWrap} aria-label={logo.alt}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
                priority={false}
              />
            </Link>
            <p className={styles.description}>{description}</p>
          </div>

          <nav className={styles.col} aria-label="Footer links">
            <h4 className={styles.colTitle}>Links</h4>
            <ul className={styles.linkList}>
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{openingHours.title}</h4>
            <dl className={styles.hoursList}>
              {openingHours.rows.map((row) => (
                <div key={row.days} className={styles.hoursRow}>
                  <dt>{row.days}</dt>
                  <dd>{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <address className={`${styles.col} ${styles.addressCol}`}>
            <h4 className={styles.colTitle}>{contact.title}</h4>
            <p className={styles.addressText}>{contact.address}</p>
            <h4 className={styles.phoneTitle}>{contact.phoneTitle}</h4>
            <a href={`tel:${contact.phone}`} className={styles.phoneLink}>
              {contact.phone}
            </a>
          </address>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{copyright}</p>
          <div className={styles.socials} aria-label="Social links">
            {socials.map((s) => {
              const Icon = socialIconMap[s.platform];
              return (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={s.ariaLabel}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <p className={styles.poweredBy}>
            Powered by <span className={styles.poweredByBrand}>{poweredBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
