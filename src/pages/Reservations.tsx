import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReservationForm from '@/components/ReservationForm';

const Reservations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Table <span className="gradient-primary bg-clip-text text-transparent">Reservations</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Reserve your table and experience the finest Indian dining
            </p>
          </div>
          <ReservationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reservations;
