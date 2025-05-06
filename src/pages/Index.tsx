import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
      <section className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 glitch-effect">
                <span className="text-primary neon-glow">CYBER</span> <span className="text-secondary">MODEL</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8">
                Модельное агентство нового поколения в Санкт-Петербурге. Кастинги, фотосессии и создание портфолио для моделей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-lg">
                  <Link to="/castings">
                    <Icon name="SearchCheck" className="mr-2" />
                    Найти кастинг
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg">
                  <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" className="mr-2" />
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1074&auto=format&fit=crop" 
                alt="Модель" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold">
              Наши <span className="text-primary neon-glow">услуги</span>
            </h2>
            <p className="text-xl text-foreground/80 mt-4 max-w-2xl mx-auto">
              Помогаем моделям развивать карьеру и находить интересные проекты
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Icon name="Camera" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Профессиональные фотосессии</h3>
              <p className="text-foreground/80">
                Организуем фотосессии с опытными фотографами для создания качественного портфолио.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Icon name="Search" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Кастинги и проекты</h3>
              <p className="text-foreground/80">
                Подбираем кастинги и проекты, соответствующие вашему опыту и внешним данным.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Icon name="Lightbulb" className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Обучение и консультации</h3>
              <p className="text-foreground/80">
                Проводим мастер-классы и индивидуальные консультации для начинающих моделей.
              </p>
            </div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* Latest Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center mb-12">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl md:text-4xl font-bold">
                Последние <span className="text-primary neon-glow">проекты</span>
              </h2>
              <p className="text-xl text-foreground/80 mt-4">
                Работы наших моделей
              </p>
            </div>
            <div className="mt-4 lg:mt-0 animate-on-scroll opacity-0">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/portfolio">
                  Смотреть все
                  <Icon name="ArrowRight" className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group cursor-pointer overflow-hidden rounded-lg animate-on-scroll opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop" 
                alt="Проект 1" 
                className="w-full aspect-[4/5] object-cover image-hover-effect"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2">Фотосессия "Неон"</h3>
                <p className="text-white/80">Март 2025</p>
              </div>
            </div>
            
            <div className="relative group cursor-pointer overflow-hidden rounded-lg animate-on-scroll opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop" 
                alt="Проект 2" 
                className="w-full aspect-[4/5] object-cover image-hover-effect"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2">Коллекция "Будущее"</h3>
                <p className="text-white/80">Апрель 2025</p>
              </div>
            </div>
            
            <div className="relative group cursor-pointer overflow-hidden rounded-lg animate-on-scroll opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?q=80&w=1074&auto=format&fit=crop" 
                alt="Проект 3" 
                className="w-full aspect-[4/5] object-cover image-hover-effect"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2">Рекламная кампания</h3>
                <p className="text-white/80">Май 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold">
              Отзывы <span className="text-primary neon-glow">моделей</span>
            </h2>
            <p className="text-xl text-foreground/80 mt-4 max-w-2xl mx-auto">
              Что говорят о нас модели, которые работали с нашим агентством
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border animate-on-scroll opacity-0">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=987&auto=format&fit=crop" 
                  alt="Анна" 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Анна К.</h3>
                  <p className="text-muted-foreground">Модель</p>
                </div>
              </div>
              <p className="text-foreground/80">
                "Благодаря CYBER MODEL я нашла интересные проекты и значительно улучшила свое портфолио. Профессиональная команда, которая действительно помогает моделям развиваться."
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border animate-on-scroll opacity-0">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop" 
                  alt="Дмитрий" 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">Дмитрий М.</h3>
                  <p className="text-muted-foreground">Фотомодель</p>
                </div>
              </div>
              <p className="text-foreground/80">
                "Сотрудничество с CYBER MODEL открыло для меня новые горизонты в модельном бизнесе. Креативные проекты, профессиональный подход и отличные условия работы."
              </p>
            </div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать свою <span className="text-primary neon-glow">карьеру модели</span>?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Присоединяйтесь к нашему агентству и получите доступ к эксклюзивным кастингам и фотосессиям в Санкт-Петербурге
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