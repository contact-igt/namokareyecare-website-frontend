import Head from "next/head";
import ContactPage from "@/pagecomponent/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Namokar Eye and Oculoplasty Centre</title>
        <meta
          name="description"
          content="Contact Namokar Eye and Oculoplasty Centre for appointments, directions, phone support and eye care assistance."
        />
      </Head>
      <ContactPage />
    </>
  );
}
