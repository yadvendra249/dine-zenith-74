import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@/assets/about-restaurant.jpg';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              About <span className="gradient-primary bg-clip-text text-transparent">IndianFood</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through authentic Indian flavors and timeless traditions
            </p>
          </div>

          {/* Restaurant Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-elegant max-w-5xl mx-auto">
            <img src={aboutImage} alt="IndianFood Restaurant Interior" className="w-full h-[500px] object-cover" />
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="shadow-warm">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Founded in 2010, IndianFood has been serving authentic Indian cuisine with passion and dedication for over a decade. Our journey began with a simple vision: to bring the rich flavors and aromatic spices of India to food lovers around the world.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Every dish we serve is crafted using traditional recipes passed down through generations, combined with the finest ingredients sourced from trusted suppliers. Our experienced chefs bring years of expertise to create an unforgettable dining experience.
                  </p>
                  <p className="text-lg leading-relaxed">
                    From our signature butter chicken to our aromatic biryanis, each item on our menu tells a story of India's diverse culinary heritage. We take pride in maintaining authenticity while embracing modern dining preferences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-warm transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">🍛</div>
                <h3 className="text-xl font-bold mb-3">Authentic Flavors</h3>
                <p className="text-muted-foreground">
                  We use traditional recipes and authentic spices imported directly from India to ensure every dish captures the true essence of Indian cuisine.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-warm transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-bold mb-3">Expert Chefs</h3>
                <p className="text-muted-foreground">
                  Our culinary team consists of experienced chefs trained in India, bringing decades of expertise and passion to every dish they create.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-warm transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  We source only the finest ingredients and never compromise on quality. Every meal is prepared fresh to order with attention to detail.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="shadow-warm bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-primary text-center">Our Mission</h2>
                <p className="text-lg text-center text-muted-foreground leading-relaxed">
                  To deliver an authentic Indian dining experience that celebrates the rich culinary traditions of India while providing exceptional service and creating memorable moments for every guest. We strive to be more than just a restaurant – we aim to be a destination where food brings people together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
