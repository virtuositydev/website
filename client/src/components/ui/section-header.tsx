import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
}

export function SectionHeader({ 
  title, 
  description, 
  className,
  ...props 
}: SectionHeaderProps) {
  return (
    <div 
      className={cn("text-center mb-16", className)} 
      {...props}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
      {description && (
        <p className={cn("text-base md:text-lg max-w-3xl mx-auto", className?.includes("text-white") ? "text-gray-200" : "text-neutral-600")}>{description}</p>
      )}
    </div>
  );
}
