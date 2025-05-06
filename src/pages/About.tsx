
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
              <span className="text-primary neon-glow">О нас</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              CYBER MODEL — инновационное модельное агентство, специализирующееся на современных и футуристических проектах
            </p>
            <div className="h-1 w-32 bg-primary neon-line mb-6"></div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <img 
                src="/images/about-1.jpg" 
                alt="О нас" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-6">Наша <span className="text-primary neon-glow">миссия</span></h2>
              <p className="text-foreground/80 mb-4">
                Мы создаем мост между талантливыми моделями и брендами, фотографами и проектами, которые ищут свежие лица и нестандартные образы.
              </p>
              <p className="text-foreground/80 mb-6">
                CYBER MODEL — это платформа, где классическая красота встречается с футуристическими концепциями и создаются уникальные проекты на стыке моды, технологий и искусства.
              </p>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                  </div>
                  <p className="text-foreground/80">Профессиональные кастинги для моделей</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                  </div>
                  <p className="text-foreground/80">Сотрудничество с ведущими фотографами</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Icon name="CheckCircle" className="text-primary" size={20} />
                  </div>
                  <p className="text-foreground/80">Инновационные концепции съемок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-border/30" />

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-6">Наш <span className="text-primary neon-glow">подход</span></h2>
              <p className="text-foreground/80 mb-4">
                Мы верим, что красота многогранна и не ограничивается стандартными рамками. В CYBER MODEL мы ценим индивидуальность и помогаем каждой модели раскрыть свой уникальный потенциал.
              </p>
              <p className="text-foreground/80 mb-6">
                Наша команда профессионалов сопровождает модель на всех этапах: от первой фотосессии до участия в коммерческих проектах с ведущими брендами Санкт-Петербурга и России.
              </p>
              
              <Button asChild className="bg-primary hover:bg-primary/80">
                <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" className="mr-2" />
                  Связаться с нами
                </a>
              </Button>
            </div>
            
            <div className="order-1 md:order-2 animate-on-scroll opacity-0">
              <img 
                src="/images/about-2.jpg" 
                alt="Наш подход" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-4">Наша <span className="text-primary neon-glow">команда</span></h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Профессионалы, которые помогают моделям реализовать свой потенциал и найти интересные проекты
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0">
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 neon-border">
                <img 
                  src="/images/team-1.jpg" 
                  alt="Команда" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Анна Волкова</h3>
                  <p className="text-muted-foreground mb-4">Директор агентства</p>
                  <p className="text-foreground/80">
                    Эксперт в индустрии моды с 10-летним опытом работы с ведущими брендами.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 neon-border">
                <img 
                  src="/images/team-2.jpg" 
                  alt="Команда" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Михаил Ковалев</h3>
                  <p className="text-muted-foreground mb-4">Креативный директор</p>
                  <p className="text-foreground/80">
                    Отвечает за концепции и визуальную составляющую всех наших проектов.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0">
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 neon-border">
                <img 
                  src="/images/team-3.jpg" 
                  alt="Команда" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Елена Соколова</h3>
                  <p className="text-muted-foreground mb-4">Менеджер по кастингам</p>
                  <p className="text-foreground/80">
                    Специалист по подбору моделей для коммерческих и творческих проектов.
                  </p>
                </div>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы <span className="text-primary neon-glow">сотрудничать</span>?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Мы всегда открыты для начинающих и опытных моделей, а также для брендов и фотографов, ищущих таланты для своих проектов
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-lg">
              <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" />
                Связаться в Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
