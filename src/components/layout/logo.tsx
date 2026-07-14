import Link from "next/link";
import { SITE_NAME } from "@/config/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex flex-col leading-tight group ${className ?? ""}`}
      aria-label={`${SITE_NAME} — strona główna`}
    >
      <span className="font-heading text-xl tracking-tight text-primary sm:text-2xl">
        {SITE_NAME}
      </span>
      <span className="h-px w-full max-w-[7.5rem] bg-gold/70 transition-all group-hover:max-w-full" />
    </Link>
  );
}
