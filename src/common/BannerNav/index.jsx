import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { headerContent } from "@/constant/navContent";
import styles from "./styles.module.css";

export default function BannerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { logo, navItems, appointment } = headerContent;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={logo.alt}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <div
              key={item.label}
              className={item.dropdown ? styles.dropdownContainer : styles.navItemWrapper}
            >
              <Link href={item.href} className={styles.navLink}>
                {item.label}
                {item.dropdown && (
                  <ChevronDown size={17} strokeWidth={2.4} aria-hidden="true" />
                )}
              </Link>
              {item.dropdown && (
                <div className={styles.dropdownMenu}>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className={styles.dropdownLink}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link href={appointment.href} className={styles.appointment}>
          {appointment.label}
          <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <div key={item.label} className={styles.mobileNavItem}>
              <div className={styles.mobileLinkRow}>
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => {
                    setIsOpen(false);
                    setMobileServicesOpen(false);
                  }}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <button
                    type="button"
                    className={styles.mobileDropdownToggle}
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    aria-label={`Toggle ${item.label} submenu`}
                    aria-expanded={mobileServicesOpen}
                  >
                    <ChevronDown
                      size={18}
                      strokeWidth={2.3}
                      className={`${styles.mobileChevron} ${
                        mobileServicesOpen ? styles.rotated : ""
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.dropdown && (
                <div
                  className={`${styles.mobileSubmenu} ${
                    mobileServicesOpen ? styles.mobileSubmenuOpen : ""
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      className={styles.mobileSubLink}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href={appointment.href}
            className={styles.mobileAppointment}
            onClick={() => {
              setIsOpen(false);
              setMobileServicesOpen(false);
            }}
          >
            {appointment.label}
            <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
