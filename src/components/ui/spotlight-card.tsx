"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: "green" | "blue" | "purple" | "red" | "yellow" | "cyan";
  size?: "sm" | "md" | "lg";
}

const glowColors = {
  green: "shadow-emerald-500/20 border-emerald-500/20 hover:shadow-emerald-500/40",
  blue: "shadow-sky-500/20 border-sky-500/20 hover:shadow-sky-500/40", 
  purple: "shadow-purple-500/20 border-purple-500/20 hover:shadow-purple-500/40",
  red: "shadow-red-500/20 border-red-500/20 hover:shadow-red-500/40",
  yellow: "shadow-yellow-500/20 border-yellow-500/20 hover:shadow-yellow-500/40",
  cyan: "shadow-cyan-500/20 border-cyan-500/20 hover:shadow-cyan-500/40"
};

const sizes = {
  sm: "p-4 min-h-[200px]",
  md: "p-6 min-h-[250px]", 
  lg: "p-8 min-h-[300px]"
};

export function GlowCard({ 
  children, 
  className, 
  glowColor = "blue", 
  size = "md",
  ...props 
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]",
        "shadow-lg hover:shadow-2xl",
        glowColors[glowColor],
        sizes[size],
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}