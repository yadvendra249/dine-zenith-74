import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import ReservationForm from '@/components/ReservationForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedMenu />
        <ReservationForm />
      </main>
    </div>
  );
};

export default Index;
