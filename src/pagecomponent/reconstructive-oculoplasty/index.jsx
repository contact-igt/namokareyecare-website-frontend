import {
  ReconstructiveBanner,
  WhatIsReconstructive,
  ConditionsTreated,
  ReconstructiveTreatmentApproach,
  ReconstructiveWhyChoose,
  ReconstructiveCta,
} from "@/component/Reconstructive";
import DoctorsAppointment from "@/component/Home/DoctorsAppointment";
import Testimonials from "@/component/Home/Testimonials";

export default function ReconstructiveOculoplastyPage() {
  return (
    <main>
      <ReconstructiveBanner />
      <WhatIsReconstructive />
      <ConditionsTreated />
      <ReconstructiveTreatmentApproach />
      <ReconstructiveWhyChoose />
      <DoctorsAppointment />
      <Testimonials />
      <ReconstructiveCta />
    </main>
  );
}
