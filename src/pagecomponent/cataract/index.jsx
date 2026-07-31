import {
  CataractBanner,
  WhatIsCataract,
  CataractEvaluationSigns,
  CataractLensOptions,
  StitchlessCataractSurgery,
  WhyChooseNamokar,
  CataractTreatmentExpectations,
  ChooseVision,
  ModernTech,
  CataractFaq,
  CataractCta,
} from "@/component/cataract";
import DoctorsAppointment from "@/component/Home/DoctorsAppointment";
import Testimonials from "@/component/Home/Testimonials";

export default function CataractPage() {
  return (
    <main>
      <CataractBanner />
      <WhatIsCataract />
      <CataractEvaluationSigns />
      <CataractLensOptions />
      <StitchlessCataractSurgery />
      <WhyChooseNamokar />
      <CataractTreatmentExpectations />
      <ChooseVision />
      <ModernTech />
      <DoctorsAppointment />
      <CataractFaq />
      <Testimonials />
      <CataractCta />
    </main>
  );
}
