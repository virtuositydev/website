import { HTMLAttributes, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatsCardProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
}

export function StatsCard({
  value,
  label,
  className,
  ...props
}: StatsCardProps) {
  const [displayValue, setDisplayValue] = useState<string | number>(
    typeof value === "number" ? 0 : value,
  );
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Function to check if element is in viewport
  const isInViewport = () => {
    const element = elementRef.current;
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Create counter animation with easing
  useEffect(() => {
    const handleScroll = () => {
      if (isInViewport() && !isVisible) {
        setIsVisible(true);

        if (typeof value === "number") {
          let start = 0;
          const duration = 1500; // ms
          const framesCount = 60;
          const increment = value / framesCount;
          const frameDuration = duration / framesCount;
          let frame = 0;

          // Easing function - ease out cubic
          const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

          const timer = setInterval(() => {
            frame++;
            const progress = frame / framesCount;
            const easedProgress = easeOutCubic(progress);

            const currentValue = Math.round(easedProgress * value);

            if (frame >= framesCount) {
              clearInterval(timer);
              setDisplayValue(value);
            } else {
              setDisplayValue(currentValue);
            }
          }, frameDuration);

          return () => clearInterval(timer);
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [value, isVisible]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "text-center p-4 sm:p-5 bg-gradient-to-b from-white to-gray-50 border border-gray-200 shadow-lg rounded-lg hover:shadow-xl hover:scale-102 transition-all duration-300",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2 relative">
          <span className="relative z-10">{displayValue}</span>
        </h3>
        <p className="text-sm font-medium text-neutral-700">{label}</p>
      </div>
    </div>
  );
}
