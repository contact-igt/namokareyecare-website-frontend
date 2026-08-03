import Head from "next/head";
import GalleryPage from "@/component/Gallery";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Namokar Eye and Oculoplasty Centre</title>
        <meta
          name="description"
          content="Explore photographs of Namokar Eye and Oculoplasty Centre, our clinical environment, technology and professional activities."
        />
      </Head>
      <GalleryPage />
    </>
  );
}
