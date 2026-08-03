import AboutBanner from "@/component/About/AboutBanner";
import AboutLeadership from "@/component/About/AboutLeadership";
import AboutApart from "@/component/About/AboutApart";
import DoctorsAppointment from "@/component/Home/DoctorsAppointment";
import Testimonials from "@/component/Home/Testimonials";

export default function AboutPage() {
  return (
    <>
      <AboutBanner />
      <AboutLeadership />
      <AboutApart />
      <DoctorsAppointment />
      <Testimonials />
    </>
  );
}
