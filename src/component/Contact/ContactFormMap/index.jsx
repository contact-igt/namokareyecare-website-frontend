import { useState } from "react";
import { useRouter } from "next/router";
import { Loader2, MapPin, Navigation, Send } from "lucide-react";
import RevealOnView from "@/common/RevealOnView";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

const initialForm = {
  fullName: "",
  mobile: "",
  treatment: "",
  message: "",
};

const validateFullName = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return "Full name is required.";
  if (trimmed.length < 2) return "Full name must be at least 2 characters.";
  if (!/^[a-zA-Z\s'.-]+$/.test(trimmed)) return "Full name can contain letters only.";
  return "";
};

const validateMobile = (value) => {
  const compact = value.replace(/[\s-]/g, "");
  if (!compact) return "Mobile number is required.";
  if (!/^(?:\+91)?[6-9]\d{9}$|^\d{10,12}$/.test(compact)) {
    return "Enter a valid mobile number.";
  }
  return "";
};

const validateTreatment = (value) => (!value ? "Please select a treatment option." : "");

const validateMessage = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return "Message is required.";
  if (trimmed.length < 5) return "Message must be at least 5 characters.";
  return "";
};

export default function ContactFormMap() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const treatmentOptions = homeContent.services.items.map((item) => item.title);

  const validateField = (name, value) => {
    if (name === "fullName") return validateFullName(value);
    if (name === "mobile") return validateMobile(value);
    if (name === "treatment") return validateTreatment(value);
    if (name === "message") return validateMessage(value);
    return "";
  };

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));

    if (touched[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const nextErrors = {
      fullName: validateFullName(form.fullName),
      mobile: validateMobile(form.mobile),
      treatment: validateTreatment(form.treatment),
      message: validateMessage(form.message),
    };
    setErrors(nextErrors);
    setTouched({ fullName: true, mobile: true, treatment: true, message: true });
    return !Object.values(nextErrors).some(Boolean);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "Contact",
          name: form.fullName.trim(),
          phone: form.mobile.trim(),
          treatment: form.treatment,
          message: form.message.trim(),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setForm(initialForm);
      router.push("/thank-you");
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className={styles.section} aria-labelledby="contact-form-title">
      <div className={styles.container}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <span className={styles.eyebrow}>Get In Touch</span>
            <h2 id="contact-form-title" className={styles.title}>
              <span>We're here for you.</span>
              <span>Our team will contact Shortly</span>
            </h2>
            <p className={styles.description}>
              Have questions or need assistance? Our friendly eyecare team is here to help. Contact us by phone, email, or visit our medical center-we're always ready to assist you.
            </p>
          </div>
        </RevealOnView>

        <div className={styles.body}>
          <RevealOnView variant="fadeUp" className={styles.formWrap}>
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.twoCol}>
                <label className={styles.field}>
                  <span>Full Name <b>*</b></span>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={updateField}
                    onBlur={handleBlur}
                    placeholder="Enter full name"
                    autoComplete="name"
                    className={errors.fullName ? styles.inputError : ""}
                  />
                  {errors.fullName && <span className={styles.fieldError}>{errors.fullName}</span>}
                </label>
                <label className={styles.field}>
                  <span>Mobile Number <b>*</b></span>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={updateField}
                    onBlur={handleBlur}
                    placeholder="Enter mobile number"
                    autoComplete="tel"
                    className={errors.mobile ? styles.inputError : ""}
                  />
                  {errors.mobile && <span className={styles.fieldError}>{errors.mobile}</span>}
                </label>
              </div>

              <label className={`${styles.field} ${styles.fullField}`}>
                <span>Selected Treatment <b>*</b></span>
                <select
                  name="treatment"
                  value={form.treatment}
                  onChange={updateField}
                  onBlur={handleBlur}
                  className={`${!form.treatment ? styles.selectPlaceholder : styles.selectSelected} ${errors.treatment ? styles.inputError : ""}`}
                >
                  <option value="">Select treatment option</option>
                  {treatmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.treatment && <span className={styles.fieldError}>{errors.treatment}</span>}
              </label>

              <label className={`${styles.field} ${styles.messageField}`}>
                <span>Message <b>*</b></span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  onBlur={handleBlur}
                  placeholder="Enter your message here..."
                  rows={6}
                  className={errors.message ? styles.inputError : ""}
                />
                {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
              </label>

              {status.message && (
                <p className={`${styles.status} ${status.type === "error" ? styles.error : styles.success}`}>
                  {status.message}
                </p>
              )}

              <button className={styles.submit} type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 size={18} className={styles.spinner} /> : <Send size={18} />}
                <span>{isSubmitting ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={120} className={styles.mapWrap}>
            <div className={styles.mapPanel}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.4522544941547!2d77.17709117418958!3d28.69490838124772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03f35bab0443%3A0x229e9c55781b5cf3!2sClosed%20one!5e1!3m2!1sen!2sin!4v1785770586866!5m2!1sen!2sin"
                className={styles.mapFrame}
                title="Namokar Eye and Oculoplasty Centre map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div className={styles.mapCard}>
                <span className={styles.mapIcon} aria-hidden="true">
                  <MapPin size={22} />
                </span>
                <p>
                  13 A, near SATYAWATI COLLEGE, opposite Madrina Restaurant, Pocket A, Phase 3, Ashok Vihar, Delhi, 110052
                </p>
                <a
                  href="https://maps.google.com/?q=28.69490838124772,77.17709117418958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionLink}
                >
                  <Navigation size={16} />
                  Get Directions
                </a>
              </div>
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}

