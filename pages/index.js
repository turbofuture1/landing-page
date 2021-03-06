import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Download from "../components/Download";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-Poppins">
      <Head>
        <title>Bookmark Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Contact/>
      <Footer/>
    </div>
  );
}
