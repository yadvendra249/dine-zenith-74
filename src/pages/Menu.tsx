import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import { useToast } from '@/hooks/use-toast';
import { Star } from 'lucide-react';
import Footer from '@/components/Footer';
import paneerTikkaImg from '@/assets/paneer-tikka.jpg';
import chickenTikkaImg from '@/assets/chicken-tikka.jpg';
import samosaImg from '@/assets/samosa.jpg';
import butterChickenImg from '@/assets/butter-chicken.jpg';
import dalMakhaniImg from '@/assets/dal-makhani.jpg';
import biryaniImg from '@/assets/biryani.jpg';
import breadsImg from '@/assets/breads.jpg';
import gulabJamunImg from '@/assets/gulab-jamun.jpg';
import rasmalaiImg from '@/assets/rasmalai.jpg';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'starters', name: 'Starters' },
  { id: 'main', name: 'Main Course' },
  { id: 'breads', name: 'Breads' },
  { id: 'desserts', name: 'Desserts' },
];

const menuItems = [
  { id: 1, name: 'Paneer Tikka', price: 349, category: 'starters', spicy: 'Medium', veg: true, image: paneerTikkaImg, rating: 4.7 },
  { id: 2, name: 'Chicken Tikka', price: 399, category: 'starters', spicy: 'Medium', veg: false, image: chickenTikkaImg, rating: 4.8 },
  { id: 3, name: 'Samosa (2 pcs)', price: 99, category: 'starters', spicy: 'Low', veg: true, image: samosaImg, rating: 4.5 },
  { id: 4, name: 'Butter Chicken', price: 899, category: 'main', spicy: 'Medium', veg: false, image: butterChickenImg, rating: 4.9 },
  { id: 5, name: 'Dal Makhani', price: 499, category: 'main', spicy: 'Low', veg: true, image: dalMakhaniImg, rating: 4.6 },
  { id: 6, name: 'Biryani Special', price: 799, category: 'main', spicy: 'High', veg: false, image: biryaniImg, rating: 4.9 },
  { id: 7, name: 'Tandoori Roti', price: 49, category: 'breads', spicy: 'None', veg: true, image: breadsImg, rating: 4.4 },
  { id: 8, name: 'Butter Naan', price: 59, category: 'breads', spicy: 'None', veg: true, image: breadsImg, rating: 4.6 },
  { id: 9, name: 'Gulab Jamun', price: 199, category: 'desserts', spicy: 'None', veg: true, image: gulabJamunImg, rating: 4.8 },
  { id: 10, name: 'Rasmalai', price: 249, category: 'desserts', spicy: 'None', veg: true, image: rasmalaiImg, rating: 4.7 },
];

const Menu = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleAddToCart = (item: typeof menuItems[0]) => {
    dispatch(addToCart({
      id: item.id.toString(),
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    }));
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Our <span className="gradient-primary bg-clip-text text-transparent">Menu</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of authentic Indian cuisine
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
...
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
