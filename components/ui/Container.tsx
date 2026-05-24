import { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 md:px-10",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-editorial",
        size === "wide" && "max-w-[1480px]",
        className
      )}
    >
      {children}
    </div>
  );
}
