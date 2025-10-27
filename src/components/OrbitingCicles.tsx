import { twMerge } from "tailwind-merge";
import React from "react";
import type { ReactNode, HTMLAttributes } from "react";

interface OrbitingCirclesProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            style={{
              ["--duration" as any]: calculatedDuration,
              ["--radius" as any]: radius,
              ["--angle" as any]: angle,
              ["--icon-size" as any]: `${iconSize}px`,
            }}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              reverse ? "[animation-direction:reverse]" : "",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
