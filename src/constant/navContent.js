export const headerContent = {
  logo: {
    src: "/assets/Header/LOGO.png",
    alt: "Namokar Eye and Oculoplasty Centre",
    width: 1120,
    height: 428,
  },
  badge: {
    src: "/assets/Header/Patient_saftey_logo.png",
    alt: "Patient safety logo",
    width: 500,
    height: 273,
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "Doctors", href: "/doctors" },
    {
      label: "Treatments",
      href: "/treatments",
      dropdown: [
        { label: "Cataract", href: "/treatments/cataract" },
        { label: "Aesthetic Oculofacial", href: "/treatments/aesthetic-oculofacial" },
      ],
    },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  appointment: {
    label: "Get Appointment",
    href: "/appointment",
  },
};
