import { cn } from "@/lib/cn";

/*
 * Renders the official NASA VEDA logo (public/veda-logo.svg), vendored from
 * NASA-IMPACT/veda-ui (docs/media/nasa-veda-logo-pos.svg), licensed Apache-2.0.
 * Native aspect ratio is 491×144.
 */
interface VedaLogoProps {
  variant?: "header" | "footer";
  className?: string;
}

const sizeStyles: Record<NonNullable<VedaLogoProps["variant"]>, string> = {
  header: "h-7 sm:h-8",
  footer: "h-9",
};

export default function VedaLogo({ variant = "header", className }: VedaLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export + unoptimized images; a plain <img> avoids next/image export edge cases.
    <img
      src="/veda-logo.svg"
      alt="NASA VEDA"
      width={491}
      height={144}
      className={cn("w-auto", sizeStyles[variant], className)}
    />
  );
}
