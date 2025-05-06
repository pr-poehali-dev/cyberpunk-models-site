
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/Icon';

const PortfolioPage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const portfolioImages = {
    all: [
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
      'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1962',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1963',
      'https://images.unsplash.com/photo-1574073758739-7367151324a6?q=80&w=1964',
      'https://images.unsplash.com/photo-1604077137850-c6d2e2a66400?q=80&w=1965',
      'https://images.unsplash.com/photo-1513451732213-5775a1c40335?q=80&w=1966',
      'https://images.unsplash.com/photo-1604077137850-c6d2e2a66400?q=80&w=1967',
      'https://images.unsplash.com/photo-1644548553364-a5f1f0db2b8a?q=80&w=1968',
      'https://images.unsplash.com/photo-1508474722893-c3ccb98db1b2?q=80&w=1969',
    ],
    fashion: [
      'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1971',
      'https://images.unsplash.com/photo-1513451732213-5775a1c40335?q=80&w=1972',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1973',
    ],
    editorial: [
      'https://images.unsplash.com/photo-1574073758739-7367151324a6?q=80&w=1974',
      'https://images.unsplash.com/photo-1604077137850-c6d2e2a66400?q=80&w=1975',
      'https://images.unsplash.com/photo-1644548553364-a5f1f0db2b8a?q=80&w=1976',
    ],
    beauty: [
      'https://images.unsplash.com/photo-1508474722893-c3ccb98db1b2?q=80&w=1977',
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1978',
      'https://images.unsplash.com/photo-1583359426622-d5ae3dcfcd10?q=80&w=1979',
    ],
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl animate-on-scroll opacity-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 glitch-effect">
              <span className="text-primary neon-glow">Портфолио</span> наших работ
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              Лучшие фотографии с кастингов и съемок с участием наших моделей
            </p>
            <div className="h-1 w-32 bg-primary neon-line mb-6"></div>
          </div>
        </div>
        
        {/* Cyberpunk grid background */}
        <div className="absolute top-0 left-0 w-full h-full cyberpunk-grid opacity-10"></div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full mb-12 animate-on-scroll opacity-0">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 bg-card">
              <TabsTrigger value="all" className="data-[state=active]:text-primary">Все</TabsTrigger>
              <TabsTrigger value="fashion" className="data-[state=active]:text-primary">Фэшн</TabsTrigger>
              <TabsTrigger value="editorial" className="data-[state=active]:text-primary">Эдиториал</TabsTrigger>
              <TabsTrigger value="beauty" className="data-[state=active]:text-primary">Бьюти</TabsTrigger>
            </TabsList>

            {Object.entries(portfolioImages).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {images.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative group cursor-pointer overflow-hidden rounded-md animate-on-scroll opacity-0"
                      onClick={() => setSelectedImage(image)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img 
                        src={image} 
                        alt="Модель портфолио" 
                        className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="outline" className="border-primary text-primary">
                          <Icon name="ZoomIn" className="mr-2" />
                          Увеличить
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl bg-card/95 backdrop-blur-xl border-border">
          <DialogHeader>
            <DialogTitle>Просмотр изображения</DialogTitle>
            <DialogDescription>
              Фотография из нашего портфолио
            </DialogDescription>
          </DialogHeader>
          {selectedImage && (
            <div className="flex justify-center p-4">
              <img 
                src={selectedImage} 
                alt="Увеличенное фото модели" 
                className="max-h-[70vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Хотите стать частью нашего <span className="text-primary neon-glow">портфолио</span>?</h2>
            <p className="text-xl text-foreground/80 mb-8">
              Присоединяйтесь к нашему модельному агентству и участвуйте в профессиональных фотосессиях в Санкт-Петербурге
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

export default PortfolioPage;
