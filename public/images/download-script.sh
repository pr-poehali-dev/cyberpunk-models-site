
#!/bin/bash

# Создаем директорию images если она не существует
mkdir -p images

# Скачиваем изображения моделей
curl -o images/hero-model.jpg "https://images.unsplash.com/photo-1621784562807-befbd78e2f3a?q=80&w=1887&auto=format"
curl -o images/casting-1.jpg "https://images.unsplash.com/photo-1604077137850-c6d2e2a66400?q=80&w=1681&auto=format"
curl -o images/casting-2.jpg "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?q=80&w=1682&auto=format"
curl -o images/casting-3.jpg "https://images.unsplash.com/photo-1508474722893-c3ccb98db1b2?q=80&w=1683&auto=format"

# Скачиваем изображения для портфолио
for i in {1..9}; do
  curl -o images/portfolio-$i.jpg "https://images.unsplash.com/photo-164454855336$i-a5f1f0db2b8a?q=80&w=196$i&auto=format"
done

# Скачиваем изображения для других страниц
curl -o images/about.jpg "https://images.unsplash.com/photo-1619087358779-02c06651e94b?q=80&w=1770&auto=format"
curl -o images/contacts.jpg "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=1770&auto=format"

echo "Изображения успешно скачаны в директорию public/images/"
