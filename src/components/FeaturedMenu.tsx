import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import menuImage from '@/assets/menu-showcase.jpg';

const menuItems = [
  { id: 1, name: 'Butter Chicken', price: 899, category: 'Main Course', spicy: 'Medium', veg: false },
  { id: 2, name: 'Paneer Tikka Masala', price: 699, category: 'Main Course', spicy: 'Medium', veg: true },
  { id: 3, name: 'Biryani Special', price: 799, category: 'Rice', spicy: 'High', veg: false },
  { id: 4, name: 'Dal Makhani', price: 499, category: 'Dal', spicy: 'Low', veg: true },
  { id: 5, name: 'Tandoori Roti', price: 49, category: 'Bread', spicy: 'None', veg: true },
  { id: 6, name: 'Gulab Jamun', price: 199, category: 'Dessert', spicy: 'None', veg: true },
];

const FeaturedMenu = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-primary bg-clip-text text-transparent">Signature</span> Dishes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each dish is crafted with love, authentic spices, and years of culinary expertise
          </p>
        </div>

        {/* Hero Menu Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-elegant">
          <img src={menuImage} alt="Featured Dishes" className="w-full h-[400px] object-cover" />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="hover:shadow-warm transition-smooth overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                      {item.name}
                    </h3>
                    <div className="flex gap-2">
                      <Badge variant={item.veg ? 'default' : 'secondary'} className="text-xs">
                        {item.veg ? 'Veg' : 'Non-Veg'}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {item.spicy} Spicy
                      </Badge>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.category}</p>
                <Button className="w-full bg-primary hover:bg-primary/90">Add to Cart</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
