import HeroCarousel from '../components/Hero';
import AboutIntro from '../components/AboutIntro';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <AboutIntro />
      <Features />
      <Stats />
      <Products />
      <Testimonials />
      <CallToAction />
    </>
  );
}
