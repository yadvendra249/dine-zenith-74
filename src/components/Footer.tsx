import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">IndianFood</h3>
            <p className="text-muted-foreground text-sm">
              Experience authentic Indian cuisine with traditional flavors and modern hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <span>info@indianfood.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} IndianFood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
