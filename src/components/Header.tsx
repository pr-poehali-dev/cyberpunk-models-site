
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Главная", path: "/" },
    { name: "Кастинги", path: "/castings" },
    { name: "Портфолио", path: "/portfolio" },
    { name: "О нас", path: "/about" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-primary font-bold text-2xl neon-glow">CYBER</span>
          <span className="text-secondary font-bold text-2xl ml-1">MODEL</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className="text-foreground hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/80 px-5 glitch-effect">
            <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
              <Icon name="MessageCircle" className="mr-2" />
              Связаться
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-card/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-6 mt-12">
              {menuItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className="text-foreground hover:text-primary text-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/80 w-full">
                <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" />
                  Связаться в Telegram
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
