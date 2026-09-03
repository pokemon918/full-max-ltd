import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Practice } from "@/components/Practice";
import { Process } from "@/components/Process";
import { Founder } from "@/components/Founder";
import { Partners } from "@/components/Partners";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Practice />
        <Process />
        <Founder />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
