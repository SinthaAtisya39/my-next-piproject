"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { useFavorite } from "@/context/FavoriteContext";
import { useMessage } from "@/context/MessageContext";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/Components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Services", label: "Services" },
  { href: "/Profile", label: "Profile" },
  { href: "/Users", label: "Users"},
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorite();
  const { name, submitted } = useUser();
  const { messages } = useMessage();
  const messageCount = messages?.length || 0;

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4">
      <nav className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-background/70 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        <Link
          href="/"
          className="shrink-0 text-sm font-bold tracking-tight"
        >
          MyWebsite
        </Link>

        <div className="hidden items-center gap-1 text-sm text-muted-foreground sm:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

           return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
                  isActive && "bg-foreground/10 text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/messages"
            className={cn("relative rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
              pathname?.startsWith("/messages") && "bg-foreground/10 text-foreground font-semibold"
            )}
            >
              Messages
            {messageCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
                {messageCount}
              </span>
            )}  
          </Link>

          <Link
            href="/Favorites"
            className={cn(
              "rounded-full px-3 py-1.5 transition-colors hover:text-foreground",
              (pathname === "/Favorites" || pathname === "/Favorite") &&
                "bg-foreground/10 text-foreground font-semibold"
            )}
          >
            Favorite ({favorites?.length || 0})
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {submitted && (
            <span className="hidden text-sm text-muted-foreground md:inline">
              Hi, {name} 👋
            </span>
          )}

          <Link
            href="/Contact"
            className={cn(buttonVariants({ size: "sm" }), "rounded-full text-xs")}
          >
            Get in touch
          </Link>
        </div>
      </nav>
    </header>
  );
}