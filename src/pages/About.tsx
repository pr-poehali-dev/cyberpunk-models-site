
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import { Separator } from '@/components/ui/separator';

const AboutPage = () => {
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
      {/* Header Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl animate-on-scroll opacity-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 glitch-effect">
              <span className="text-primary neon-glow">О</span> нас
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              Мы организуем профессиональные кастинги и фотосъемки для моделей в Санкт-Петербурге
            </p>
            <div className="h-1 w-32 bg-primary neon-line mb-6"></div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1619087358779-02c06651e94b?q=80&w=1770" 
                alt="О нашем агентстве" 
                className="rounded-lg shadow-xl w-full object-cover h-full max-h-[500px]"
              />
            </div>
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-6">Наше <span className="text-primary neon-glow">агентство</span></h2>
              <p className="text-foreground/80 mb-4">
                Мы - команда профессионалов в индустрии моды и фотографии, объединенных общей целью: найти и помочь раскрыться талантливым моделям в Санкт-Петербурге.
              </p>
              <p className="text-foreground/80 mb-6">
                Наше агентство специализируется на организации кастингов, фотосессий и модных показов. Мы сотрудничаем с ведущими фотографами, стилистами, визажистами и дизайнерами Санкт-Петербурга.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/80">
                  <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" className="mr-2" />
                    Связаться
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-6">Наша <span className="text-primary neon-glow">миссия</span></h2>
            <p className="text-xl text-foreground/80 mb-8">
              Мы стремимся создать платформу, где талантливые модели могут найти интересные проекты и развивать свою карьеру в безопасной и профессиональной среде.
            </p>
            <Separator className="bg-primary/40 my-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Search" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Поиск талантов</h3>
                <p className="text-foreground/80 text-center">
                  Мы ищем новые лица и талантливых моделей для разнообразных проектов
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Camera" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Качественные съемки</h3>
                <p className="text-foreground/80 text-center">
                  Организуем профессиональные фотосессии с опытными фотографами
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">Развитие моделей</h3>
                <p className="text-foreground/80 text-center">
                  Помогаем моделям совершенствовать свои навыки и строить карьеру
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold">Почему <span className="text-primary neon-glow">выбирают</span> нас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border animate-on-scroll opacity-0">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Icon name="Check" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Профессиональный подход</h3>
                  <p className="text-foreground/80">
                    Мы работаем только с проверенными фотографами и компаниями, гарантируя безопасность и качество для наших моделей.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border animate-on-scroll opacity-0">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Icon name="Check" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Разнообразие проектов</h3>
                  <p className="text-foreground/80">
                    У нас вы найдете различные типы съемок: от коммерческих до творческих ТФП-проектов.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border animate-on-scroll opacity-0">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Icon name="Check" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Прозрачные условия</h3>
                  <p className="text-foreground/80">
                    Все условия сотрудничества обсуждаются заранее и фиксируются в соглашении.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border animate-on-scroll opacity-0">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Icon name="Check" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
                  <p className="text-foreground/80">
                    Мы учитываем особенности каждой модели при подборе проектов и сотрудничества.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы <span className="text-primary neon-glow">начать</span> сотрудничество?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Свяжитесь с нами прямо сейчас, и мы обсудим возможности для вашей модельной карьеры
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

export default AboutPage;
