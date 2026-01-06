import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <img src={Logo} alt="Al Ameen Foundation" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display text-xl font-bold">Al Ameen</span>
                <span className="block text-sm text-primary-foreground/70">Foundation</span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Empowering underprivileged communities through education, essential relief,
              and sustainable development since 2016.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/ameenfoundationsl" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/ameenfoundationsl" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/ameenfoundationsl" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Programs", path: "/programs" },
                { name: "Impact Stories", path: "/impact" },
                { name: "Get Involved", path: "/get-involved" },
                { name: "Latest News", path: "/news" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {[
                "Education Support",
                "Food Distribution",
                "Community Empowerment",
                "Emergency Relief",
                "Skill Development",
                "Healthcare Initiatives",
              ].map((program) => (
                <li key={program}>
                  <Link to="/programs" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  No.274/A, Main Street,<br />
                  Kinniya, Sri Lanka
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+94773619464" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  +94 77 361 9464
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:mammujeeb@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  mammujeeb@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Al Ameen Foundation. All rights reserved. Registered Charity in Sri Lanka.
          </p>
          <div className="flex gap-6">
            <Link to="/transparency" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/transparency" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
