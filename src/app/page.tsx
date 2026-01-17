import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}