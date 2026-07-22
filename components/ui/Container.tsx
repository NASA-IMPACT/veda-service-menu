import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}

export default function Container({
  as: Tag = "div",
  id,
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn("mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
