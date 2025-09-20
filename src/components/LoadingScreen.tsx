import { useEffect, useState } from "react";
import { Code, Zap } from "lucide-react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center mx-auto animate-pulse-glow">
            <Code className="w-10 h-10 text-white animate-spin" style={{ animationDuration: "3s" }} />
          </div>
          <div className="absolute -top-2 -right-2">
            <Zap className="w-8 h-8 text-yellow-500 animate-bounce" />
          </div>
        </div>

        {/* Loading text with typing effect */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Daniel M. Mutahi
          </h1>
          <p className="text-muted-foreground animate-pulse">
            Loading portfolio experience...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full gradient-hero rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 font-mono">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;