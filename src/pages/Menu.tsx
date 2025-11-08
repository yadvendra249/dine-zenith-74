import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'starters', name: 'Starters' },
  { id: 'main', name: 'Main Course' },
  { id: 'breads', name: 'Breads' },
  { id: 'desserts', name: 'Desserts' },
];

const menuItems = [
  { id: 1, name: 'Paneer Tikka', price: 349, category: 'starters', spicy: 'Medium', veg: true },
  { id: 2, name: 'Chicken Tikka', price: 399, category: 'starters', spicy: 'Medium', veg: false },
  { id: 3, name: 'Samosa (2 pcs)', price: 99, category: 'starters', spicy: 'Low', veg: true },
  { id: 4, name: 'Butter Chicken', price: 899, category: 'main', spicy: 'Medium', veg: false },
  { id: 5, name: 'Dal Makhani', price: 499, category: 'main', spicy: 'Low', veg: true },
  { id: 6, name: 'Biryani Special', price: 799, category: 'main', spicy: 'High', veg: false },
  { id: 7, name: 'Tandoori Roti', price: 49, category: 'breads', spicy: 'None', veg: true },
  { id: 8, name: 'Butter Naan', price: 59, category: 'breads', spicy: 'None', veg: true },
  { id: 9, name: 'Gulab Jamun', price: 199, category: 'desserts', spicy: 'None', veg: true },
  { id: 10, name: 'Rasmalai', price: 249, category: 'desserts', spicy: 'None', veg: true },
];

const Menu = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-12">
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
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-8">
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems
                    .filter((item) => cat.id === 'all' || item.category === cat.id)
                    .map((item) => (
                      <Card key={item.id} className="hover:shadow-warm transition-smooth">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                              <div className="flex gap-2">
                                <Badge variant={item.veg ? 'default' : 'secondary'}>
                                  {item.veg ? 'Veg' : 'Non-Veg'}
                                </Badge>
                                <Badge variant="outline">{item.spicy} Spicy</Badge>
                              </div>
                            </div>
                            <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                          </div>
                          <Button className="w-full bg-primary hover:bg-primary/90">Add to Cart</Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Menu;
