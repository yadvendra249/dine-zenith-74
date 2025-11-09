import { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            IndianFood
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Home
            </NavLink>
            <NavLink to="/menu" className="text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Menu
            </NavLink>
            <NavLink to="/reservations" className="text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Reservations
            </NavLink>
            <NavLink to="/about" className="text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              About Us
            </NavLink>
            <NavLink to="/careers" className="text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Careers
            </NavLink>
            <NavLink to="/admin" className="text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Admin
            </NavLink>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/checkout">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </NavLink>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <NavLink to="/checkout">
              <Button className="bg-primary hover:bg-primary/90">Order Now</Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <NavLink to="/" className="block text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Home
            </NavLink>
            <NavLink to="/menu" className="block text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Menu
            </NavLink>
            <NavLink to="/reservations" className="block text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Reservations
            </NavLink>
            <NavLink to="/about" className="block text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              About Us
            </NavLink>
            <NavLink to="/careers" className="block text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Careers
            </NavLink>
            <NavLink to="/admin" className="block text-foreground hover:text-primary transition-smooth" activeClassName="text-primary font-semibold">
              Admin
            </NavLink>
            <div className="flex space-x-2 pt-4">
              <NavLink to="/checkout">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </NavLink>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <NavLink to="/checkout" className="flex-1">
                <Button className="bg-primary hover:bg-primary/90 w-full">Order Now</Button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
