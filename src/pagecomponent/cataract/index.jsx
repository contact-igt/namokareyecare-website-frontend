import WhatIsCataract from "@/component/cataract/what is cataract";
import CataractEvaluationSigns from "@/component/cataract/CataractEvaluationSigns";
import CataractLensOptions from "@/component/cataract/CataractLensOptions";
import StitchlessCataractSurgery from "@/component/cataract/StitchlessCataractSurgery";
import WhyChooseNamokar from "@/component/cataract/WhyChooseNamokar";

export default function CataractPage() {
  return (
    <main>
      <WhatIsCataract />
      <CataractEvaluationSigns />
      <CataractLensOptions />
      <StitchlessCataractSurgery />
      <WhyChooseNamokar />
    </main>
  );
}
