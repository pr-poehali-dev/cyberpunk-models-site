
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';

const HomePage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 z-10 pt-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white glitch-effect">
              <span className="text-primary neon-glow">Кастинги</span> моделей<br />в Санкт-Петербурге
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Профессиональные фотосъемки и кастинги<br />для талантливых моделей в СПб
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-lg">
                <Link to="/castings">Актуальные кастинги</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg border-primary text-primary hover:bg-primary/10">
                <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" />
                  Связаться
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background video or image */}
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50 z-0">
          <div className="absolute inset-0 opacity-30">
            <img 
              src="https://images.unsplash.com/photo-1621784562807-befbd78e2f3a?q=80&w=1887&auto=format&fit=crop" 
              alt="Модель в киберпанк стиле" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 cyberpunk-grid opacity-20 z-0"></div>
      </section>

      {/* Featured Castings */}
      <section className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ближайшие <span className="text-primary neon-glow">кастинги</span></h2>
            <div className="h-[2px] w-24 bg-primary mb-6 neon-line"></div>
            <p className="text-center text-lg text-foreground/80 max-w-2xl">
              Найдите свой следующий проект среди самых актуальных фотосъемок и кастингов для моделей в Санкт-Петербурге
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-card border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0">
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-md">
                    <img 
                      src={`https://images.unsplash.com/photo-1604077137850-c6d2e2a66400?q=80&w=168${item}`} 
                      alt="Кастинг для моделей" 
                      className="w-full aspect-[4/3] object-cover image-hover-effect"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs py-1 px-2 rounded">
                      Актуально
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Фотосессия в стиле киберпанк</h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    <span>25 мая 2025</span>
                  </div>
                  <p className="text-foreground/80 mb-4">
                    Ищем моделей для фотопроекта в стиле киберпанк. Неоновые фотографии в футуристической студии.
                  </p>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    <Link to="/castings">Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12 animate-on-scroll opacity-0">
            <Button asChild className="bg-primary hover:bg-primary/80">
              <Link to="/castings">Смотреть все кастинги</Link>
            </Button>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"><span className="text-secondary">Лучшие</span> <span className="text-primary neon-glow">работы</span></h2>
            <div className="h-[2px] w-24 bg-primary mb-6 neon-line"></div>
            <p className="text-center text-lg text-foreground/80 max-w-2xl">
              Посмотрите работы профессиональных фотографов с нашими моделями
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-md animate-on-scroll opacity-0">
                <img 
                  src={`https://images.unsplash.com/photo-1644548553364-a5f1f0db2b8a?q=80&w=196${item}`} 
                  alt="Модель фотосессия киберпанк" 
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12 animate-on-scroll opacity-0">
            <Button asChild className="bg-primary hover:bg-primary/80">
              <Link to="/portfolio">Смотреть портфолио</Link>
            </Button>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6"><span className="text-primary neon-glow">Стань</span> частью нашей команды</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Присоединяйтесь к нашему сообществу профессиональных моделей в Санкт-Петербурге. Мы поможем вам найти интересные проекты и развить карьеру.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-lg">
              <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" />
                Связаться в Telegram
              </a>
            </Button>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>
    </>
  );
};

export default HomePage;
