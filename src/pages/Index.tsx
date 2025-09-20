import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interests from "@/components/Interests";
import SkillBars from "@/components/SkillBars";
import ProjectFilter from "@/components/ProjectFilter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";
import ThemeToggle from "@/components/ThemeToggle";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollAnimation from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LoadingScreen />
      <CustomCursor />
      <ThemeToggle />
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <ScrollAnimation animation="fadeInUp">
          <About />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInLeft" delay={200}>
          <Interests />
        </ScrollAnimation>
        <ScrollAnimation animation="scaleIn" delay={400}>
          <SkillBars />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeInRight" delay={600}>
          <ProjectFilter />
        </ScrollAnimation>
        <ScrollAnimation animation="slideInUp" delay={800}>
          <Contact />
        </ScrollAnimation>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
