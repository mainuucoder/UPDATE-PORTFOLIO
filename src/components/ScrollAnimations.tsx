import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp";
  delay?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  animation = "fadeInUp", 
  delay = 0, 
  className = "" 
}: ScrollAnimationProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          setTimeout(() => {
            element.classList.add("animate-in");
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = "opacity-0 transform transition-all duration-700 ease-out";
    
    switch (animation) {
      case "fadeInUp":
        return `${baseClasses} translate-y-8`;
      case "fadeInLeft":
        return `${baseClasses} -translate-x-8`;
      case "fadeInRight":
        return `${baseClasses} translate-x-8`;
      case "scaleIn":
        return `${baseClasses} scale-95`;
      case "slideInUp":
        return `${baseClasses} translate-y-12`;
      default:
        return `${baseClasses} translate-y-8`;
    }
  };

  useEffect(() => {
    // Add global styles for animation
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateX(0) translateY(0) scale(1) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;