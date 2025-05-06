import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import { Card, CardContent } from '@/components/ui/card';

const ContactsPage = () => {
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
              <span className="text-primary neon-glow">Контакты</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              Свяжитесь с нами, чтобы обсудить сотрудничество или получить дополнительную информацию
            </p>
            <div className="h-1 w-32 bg-primary neon-line mb-6"></div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-3xl font-bold mb-6">Свяжитесь <span className="text-primary neon-glow">с нами</span></h2>
              <p className="text-foreground/80 mb-6">
                Мы всегда открыты для сотрудничества и новых проектов. Если у вас есть вопросы о кастингах, фотосессиях или вы хотите стать частью нашей команды, свяжитесь с нами любым удобным способом.
              </p>

              <div className="space-y-8 mt-8">
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 neon-border">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <Icon name="MessageCircle" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Телеграм</h3>
                        <p className="text-foreground/80 mb-4">
                          Самый быстрый способ связаться с нами - написать в Telegram
                        </p>
                        <Button asChild className="bg-primary hover:bg-primary/80">
                          <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                            <Icon name="Send" className="mr-2" />
                            t.me/Vocoders
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 neon-border">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <Icon name="MapPin" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Локация</h3>
                        <p className="text-foreground/80">
                          Санкт-Петербург, Россия
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0">
              <div className="bg-card rounded-lg overflow-hidden h-full flex items-center justify-center border border-border">
                <img 
                  src="/images/contacts.jpg" 
                  alt="Контакты" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold">Часто задаваемые <span className="text-primary neon-glow">вопросы</span></h2>
            <p className="text-foreground/80 mt-4 max-w-2xl mx-auto">
              Здесь мы собрали ответы на самые популярные вопросы о наших кастингах и фотосессиях
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Как принять участие в кастинге?</h3>
                <p className="text-foreground/80">
                  Чтобы принять участие в кастинге, выберите интересующий вас проект на странице "Кастинги" и нажмите "Откликнуться". Вы также можете написать нам прямо в Telegram.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Нужен ли опыт для участия?</h3>
                <p className="text-foreground/80">
                  Для разных проектов требования различаются. Некоторые кастинги открыты для начинающих моделей без опыта, в других требуется профессиональное портфолио.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Что такое ТФП съемка?</h3>
                <p className="text-foreground/80">
                  ТФП (Time for Prints) - это формат сотрудничества, при котором модель и фотограф работают бесплатно, получая в качестве оплаты фотографии для своего портфолио.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 neon-border animate-on-scroll opacity-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Как часто появляются новые кастинги?</h3>
                <p className="text-foreground/80">
                  Новые кастинги публикуются еженедельно. Рекомендуем регулярно проверять нашу страницу кастингов или подписаться на обновления в Telegram.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Остались <span className="text-primary neon-glow">вопросы</span>?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Не стесняйтесь обращаться к нам за дополнительной информацией. Мы всегда рады помочь!</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/80 text-lg">
              <a href="https://t.me/Vocoders" target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="mr-2" />
                Написать в Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsPage;