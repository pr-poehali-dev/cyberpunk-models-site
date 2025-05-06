
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';

const Footer = () => {
  return (
    <footer className="bg-card py-10 mt-16 border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-primary font-bold text-2xl neon-glow">CYBER</span>
              <span className="text-secondary font-bold text-2xl ml-1">MODEL</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Профессиональные кастинги и фотосъемки для моделей в Санкт-Петербурге.
              Мы помогаем талантливым моделям найти свой путь в индустрии моды.
            </p>
            <a 
              href="https://t.me/Vocoders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Icon name="MessageCircle" className="mr-2" />
              t.me/Vocoders
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/castings" className="text-muted-foreground hover:text-primary transition-colors">Кастинги</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <p className="text-muted-foreground mb-2">Санкт-Петербург</p>
            <a 
              href="https://t.me/Vocoders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-2"
            >
              <Icon name="MessageCircle" className="mr-2" />
              t.me/Vocoders
            </a>
          </div>
        </div>
        
        <div className="h-[1px] w-full neon-line my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CYBER MODEL. Все права защищены.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://t.me/Vocoders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Send" size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Cyberpunk grid background */}
      <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
    </footer>
  );
};

export default Footer;
