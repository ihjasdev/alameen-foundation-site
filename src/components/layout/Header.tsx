import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "What We Do", path: "/programs" },
  { name: "Impact", path: "/impact" },
  { name: "Get Involved", path: "/get-involved" },
  { name: "News", path: "/news" },
  { name: "Transparency", path: "/transparency" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
        }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isScrolled ? "bg-primary" : "bg-primary-foreground/20"
            }`}>
            <img src={Logo} alt="Al Ameen Foundation" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <span className={`font-display text-xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}>
              Al Ameen
            </span>
            <span className={`block text-xs font-body tracking-wide transition-colors ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/80"
              }`}>
              Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${location.pathname === link.path
                  ? isScrolled
                    ? "text-primary bg-primary/10"
                    : "text-primary-foreground bg-primary-foreground/20"
                  : isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant={isScrolled ? "accent" : "hero"} size="lg" asChild>
            <Link to="/get-involved">
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-xl transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <nav className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-border">
            <Button variant="accent" size="lg" className="w-full" asChild>
              <Link to="/get-involved">
                <Heart className="w-4 h-4" />
                Donate Now
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
