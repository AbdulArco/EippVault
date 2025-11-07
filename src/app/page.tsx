import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import Hero from "../components/sections/hero/Hero";
import App from "../components/sections/price/Price";
import ContactUs from "../components/sections/contact/Contact";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <App/>
      <ContactUs/>

      <Footer />
    </main>
  );
}
