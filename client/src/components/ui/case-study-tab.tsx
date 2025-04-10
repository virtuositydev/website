import { MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface CaseStudyTabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick?: (id: string) => void;
  className?: string;
}

export function CaseStudyTab({ 
  id, 
  label, 
  isActive, 
  className,
  onClick,
}: CaseStudyTabProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick && onClick(id);
  };

  return (
    <button
      className={cn(
        "text-md py-3 px-6 font-medium transition-all duration-300",
        isActive 
          ? "text-white bg-gradient-to-r from-primary/40 to-primary/60 backdrop-blur-sm font-bold scale-105 shadow-[0_4px_15px_rgba(197,0,13,0.3)] border-b-2 border-primary" 
          : "border-b-2 border-transparent text-white/80 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm hover:border-white/30",
        className
      )}
      onClick={handleClick}
      data-target={id}
      type="button"
    >
      {label}
    </button>
  );
}
