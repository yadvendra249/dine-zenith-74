import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-restaurant.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience the{' '}
            <span className="gradient-primary bg-clip-text text-transparent">
              Authentic Flavors
            </span>
            {' '}of India
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            From traditional recipes to modern culinary excellence, discover a symphony of spices 
            that will transport your taste buds to the streets of India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-warm text-lg h-14 px-8">
              Order Online
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg h-14 px-8">
              Reserve a Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
