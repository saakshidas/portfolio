import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}