import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import ReservationForm from '@/components/ReservationForm';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedMenu />
        <TestimonialCarousel />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
