
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="text-center z-10 p-6">
        <h1 className="text-8xl font-bold mb-6 glitch-effect">
          <span className="text-primary neon-glow">4</span>
          <span className="text-secondary">0</span>
          <span className="text-primary neon-glow">4</span>
        </h1>
        <p className="text-2xl text-foreground mb-8">Упс! Страница не найдена</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/80">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
      
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>
    </div>
  );
};

export default NotFound;
