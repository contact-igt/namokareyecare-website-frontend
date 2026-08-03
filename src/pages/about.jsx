import Head from "next/head";
import AboutPage from "@/pagecomponent/About";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Namokar Eye and Oculoplasty Centre</title>
        <meta
          name="description"
          content="Learn about Namokar Eye and Oculoplasty Centre, our expertise, technology, patient care approach and trusted eye care team."
        />
      </Head>
      <AboutPage />
    </>
  );
}
