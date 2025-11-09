import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Absolutely delicious! The butter chicken reminds me of home. Best Indian restaurant in the city!',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Amazing food and excellent service. The biryani is to die for. Highly recommended!',
  },
  {
    id: 3,
    name: 'Amit Patel',
    rating: 4,
    comment: 'Great authentic flavors. The paneer tikka was perfectly cooked. Will definitely come back!',
  },
  {
    id: 4,
    name: 'Neha Singh',
    rating: 5,
    comment: 'The best Indian food I\'ve had outside of India. Fresh ingredients and perfect spices!',
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What Our Customers Say</h2>
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? 'fill-primary text-primary'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                      <p className="font-semibold text-foreground">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
