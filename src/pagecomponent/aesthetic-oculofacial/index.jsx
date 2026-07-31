import {
  AestheticAssessment,
  AestheticCta,
  AestheticOculofacialBanner,
  AestheticOculoplastyTreatments,
  AestheticWhyChoose,
  BeforeAfterOculoplasty,
  ExpectedApproach,
  SpecialistLedApproach,
  WhatIsAestheticOculoplasty,
} from "@/component/Aesthetic";
import { CataractFaq } from "@/component/cataract";
import DoctorsAppointment from "@/component/Home/DoctorsAppointment";
import Testimonials from "@/component/Home/Testimonials";

export default function AestheticOculofacialPage() {
  return (
    <main>
      <AestheticOculofacialBanner />
      <WhatIsAestheticOculoplasty />
      <AestheticWhyChoose />
      <AestheticOculoplastyTreatments />
      <ExpectedApproach />
      <SpecialistLedApproach />
      <AestheticAssessment />
      <BeforeAfterOculoplasty />
      <DoctorsAppointment />
      <CataractFaq />
      <Testimonials />
      <AestheticCta />
    </main>
  );
}
