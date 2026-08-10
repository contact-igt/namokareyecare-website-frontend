"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown, Clock3, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

const appointmentSchema = z.object({
  doctor: z.string().min(1, "Please select a doctor"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^[0-9\+\-\s]{10,15}$/, "Enter a valid 10-digit phone number"),
  date: z.string().optional(),
  time: z.string().optional(),
});

export default function DoctorsAppointment() {
  const { eyebrow, title, description, allDoctors, doctors, appointment } =
    homeContent.doctorsAppointment;

  const [largeDoctor, secondDoctor, thirdDoctor] = doctors;
  const hasStackedDoctors = Boolean(secondDoctor || thirdDoctor);

  const [serverStatus, setServerStatus] = useState({ success: false, message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      doctor: doctors[0]?.name || "",
      name: "",
      phone: "",
      date: "",
      time: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    setServerStatus({ success: false, message: "" });
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setServerStatus({ success: true, message: result.message });
        router.push("/thank-you");
      } else {
        setServerStatus({ success: false, message: result.message || "Submission failed." });
      }
    } catch (err) {
      console.error(err);
      setServerStatus({
        success: false,
        message: "Something went wrong. Please check your network connection.",
      });
    }
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setServerStatus({ success: false, message: "" });
  };

  return (
    <section
      id="appointment"
      className={styles.doctorsSection}
      aria-labelledby="doctors-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
            <h2 id="doctors-title" className={styles.title}>
              {title}
            </h2>
            {description && (
              <p className={styles.sectionDescription}>{description}</p>
            )}
          </div>

          {/* <Link href={allDoctors.href} className={styles.allDoctors}>
            <span>{allDoctors.label}</span>
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link> */}
        </div>

        <div className={`${styles.body} ${!hasStackedDoctors ? styles.singleDoctorBody : ""}`}>
          {/* Column 1: Large Doctor Card */}
          {largeDoctor && (
            <article className={`${styles.doctorCard} ${styles.largeCard}`} key={largeDoctor.name}>
              <div className={styles.largeDoctorImageWrap}>
                <Image
                  src={largeDoctor.image.src}
                  alt={largeDoctor.image.alt}
                  width={largeDoctor.image.width}
                  height={largeDoctor.image.height}
                  className={styles.doctorImage}
                  priority
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <div className={styles.largeDoctorInfo}>
                <motion.h3
                  className={styles.doctorName}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  {largeDoctor.name}
                </motion.h3>
                <div className={styles.doctorDesignationWrap}>
                  {Array.isArray(largeDoctor.designation) ? (
                    largeDoctor.designation.map((line, idx) => (
                      <p key={idx} className={styles.doctorDesignation}>
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className={styles.doctorDesignation}>
                      {largeDoctor.designation}
                    </p>
                  )}
                </div>
                <Link href="#appointment-form" className={styles.cardButton}>
                  Get Appointment
                </Link>
              </div>
            </article>
          )}

          {/* Column 2: Stacked Small Doctor Cards */}
          {hasStackedDoctors && (
            <div className={styles.stackedColumn}>
              {[secondDoctor, thirdDoctor].filter(Boolean).map((doctor) => (
                <article className={`${styles.doctorCard} ${styles.smallCard}`} key={doctor.name}>
                  <div className={styles.smallDoctorImageWrap}>
                    <Image
                      src={doctor.image.src}
                      alt={doctor.image.alt}
                      width={doctor.image.width}
                      height={doctor.image.height}
                      className={styles.smallDoctorImage}
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 140px"
                    />
                  </div>
                  <div className={styles.smallDoctorInfo}>
                    <motion.h3
                      className={styles.doctorName}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {doctor.name}
                    </motion.h3>
                    <p className={styles.doctorDesignation}>
                      {doctor.designation}
                    </p>
                    <Link href="#appointment-form" className={styles.cardButton}>
                      Get Appointment
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Column 3: Book An Appointment Form */}
          <div className={styles.formWrapper} id="appointment-form">
            <form
              className={styles.formCard}
              aria-label={appointment.title}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className={styles.formHeader}>
                <h3>{appointment.title}</h3>
              </div>

              {isSubmitted ? (
                <div className={styles.successState}>
                  <CheckCircle2 size={48} className={styles.successIcon} />
                  <h4 className={styles.successTitle}>Booking Submitted!</h4>
                  <p className={styles.successDesc}>
                    Thank you. We have received your appointment request and will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className={styles.resetButton}
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <div className={styles.formBody}>
                  {serverStatus.message && !serverStatus.success && (
                    <div className={styles.serverError}>{serverStatus.message}</div>
                  )}

                  {/* Doctor Field */}
                  <label className={styles.field}>
                    <span className={styles.label}>
                      <span>{appointment.fields.doctor}</span>
                      <span className={styles.required} aria-hidden="true">
                        *
                      </span>
                    </span>
                    <span className={styles.selectShell}>
                      <select {...register("doctor")}>
                        <option value="" disabled>
                          {appointment.fields.doctorPlaceholder}
                        </option>
                        {doctors.map((doc) => (
                          <option value={doc.name} key={doc.name}>
                            {doc.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className={styles.fieldIcon}
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    {errors.doctor && (
                      <span className={styles.fieldError}>{errors.doctor.message}</span>
                    )}
                  </label>

                  {/* Name Field */}
                  <label className={styles.field}>
                    <span className={styles.label}>
                      <span>{appointment.fields.name}</span>
                      <span className={styles.required} aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className={styles.fieldError}>{errors.name.message}</span>
                    )}
                  </label>

                  {/* Phone Field */}
                  <label className={styles.field}>
                    <span className={styles.label}>
                      <span>{appointment.fields.phone}</span>
                      <span className={styles.required} aria-hidden="true">
                        *
                      </span>
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <span className={styles.fieldError}>{errors.phone.message}</span>
                    )}
                  </label>

                  {/* Date Field */}
                  <label className={styles.field}>
                    <span className={styles.label}>
                      <span>{appointment.fields.date}</span>
                    </span>
                    <span className={styles.inputShell}>
                      <input
                        type="date"
                        {...register("date")}
                      />
                      <CalendarDays
                        className={styles.fieldIcon}
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    {errors.date && (
                      <span className={styles.fieldError}>{errors.date.message}</span>
                    )}
                  </label>

                  {/* Time Field */}
                  <label className={styles.field}>
                    <span className={styles.label}>
                      <span>{appointment.fields.time}</span>
                    </span>
                    <span className={styles.inputShell}>
                      <input
                        type="time"
                        {...register("time")}
                      />
                      <Clock3
                        className={styles.fieldIcon}
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </span>
                    {errors.time && (
                      <span className={styles.fieldError}>{errors.time.message}</span>
                    )}
                  </label>

                  <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className={styles.loadingText}>
                        <Loader2 className={styles.spinner} size={18} /> Submitting...
                      </span>
                    ) : (
                      appointment.submitLabel
                    )}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
