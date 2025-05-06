
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CastingsPage = () => {
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

  const castings = [
    {
      id: 1,
      title: 'Фотосессия в стиле киберпанк',
      date: '25 мая 2025',
      location: 'Санкт-Петербург, Центр',
      description: 'Ищем моделей для фотопроекта в стиле киберпанк. Неоновые фотографии в футуристической студии.',
      image: 'https://images.unsplash.com/photo-1604077137850-c6d2e2a66400?q=80&w=1681'
    },
    {
      id: 2,
      title: 'Коммерческая съемка для бренда одежды',
      date: '30 мая 2025',
      location: 'Санкт-Петербург, Петроградская',
      description: 'Требуются модели для рекламной кампании модного бренда. Опыт работы от 1 года.',
      image: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1682'
    },
    {
      id: 3,
      title: 'Футуристическая фотосессия',
      date: '5 июня 2025',
      location: 'Санкт-Петербург, Васильевский остров',
      description: 'Концептуальный проект с использованием современных технологий и необычных локаций.',
      image: 'https://images.unsplash.com/photo-1508474722893-c3ccb98db1b2?q=80&w=1683'
    },
    {
      id: 4,
      title: 'ТФП съемка для начинающих моделей',
      date: '10 июня 2025',
      location: 'Санкт-Петербург, Невский район',
      description: 'Отличная возможность пополнить портфолио. Работаем на условиях ТФП (time for prints).',
      image: 'https://images.unsplash.com/photo-1644548553364-a5f1f0db2b8a?q=80&w=1684'
    },
    {
      id: 5,
      title: 'Модели для показа мод',
      date: '15 июня 2025',
      location: 'Санкт-Петербург, Центр',
      description: 'Требуются модели для участия в ежегодном модном показе. Рост от 175 см.',
      image: 'https://images.unsplash.com/photo-1583359426622-d5ae3dcfcd10?q=80&w=1685'
    },
    {
      id: 6,
      title: 'Съемка для глянцевого журнала',
      date: '20 июня 2025',
      location: 'Санкт-Петербург, Приморский район',
      description: 'Ищем моделей для эдиториал съемки для модного журнала. Публикация гарантирована.',
      image: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?q=80&w=1686'
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl animate-on-scroll opacity-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 glitch-effect">
              <span className="text-primary neon-glow">Кастинги</span> и съемки в СПб
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              Найдите свой следующий проект среди актуальных кастингов для моделей в Санкт-Петербурге
            </p>
            <div className="h-1 w-32 bg-primary neon-line mb-6"></div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* Filters Section */}
      <section className="py-6 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-lg p-6 border border-border animate-on-scroll opacity-0">
            <h2 className="text-xl font-medium mb-4">Фильтры поиска</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input placeholder="Ключевые слова" className="bg-muted" />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="bg-muted">
                    <SelectValue placeholder="Тип съемки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="tfp">ТФП</SelectItem>
                    <SelectItem value="commercial">Коммерческая</SelectItem>
                    <SelectItem value="fashion">Фэшн</SelectItem>
                    <SelectItem value="editorial">Эдиториал</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="w-full bg-primary hover:bg-primary/80">
                  <Icon name="Search" className="mr-2" size={18} />
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Castings List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {castings.map((casting, index) => (
              <Card 
                key={casting.id} 
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={casting.image} 
                      alt={casting.title} 
                      className="w-full h-56 object-cover image-hover-effect"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs py-1 px-2 rounded">
                      Актуально
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{casting.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      <span>{casting.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      <span>{casting.location}</span>
                    </div>
                    <p className="text-foreground/80 mb-4">
                      {casting.description}
                    </p>
                    <Button asChild className="w-full bg-primary hover:bg-primary/80">
                      <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                        Откликнуться
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Не нашли подходящий <span className="text-primary neon-glow">кастинг</span>?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Свяжитесь с нами напрямую, и мы подберем для вас интересные проекты исходя из ваших параметров и опыта
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

export default CastingsPage;
