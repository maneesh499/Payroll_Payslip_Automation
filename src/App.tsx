import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import DemoDashboard from "./components/DemoDashboard";
import Features from "./components/Features";
import BeforeAfter from "./components/BeforeAfter";
import Security from "./components/Security";
import WhoItsFor from "./components/WhoItsFor";
import Pricing from "./components/Pricing";
import DemoForm from "./components/DemoForm";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <DemoDashboard />
        <Features />
        <BeforeAfter />
        <Security />
        <WhoItsFor />
        <Pricing />
        <DemoForm />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
