"use client";
import Link from "next/link";
import { Button } from "@/Components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { useFavorite } from "@/context/FavoriteContext";

export default function UserCard({ user }) {
  const { toggleFavorite, isFavorite } = useFavorite();
  const fav = isFavorite(user.id);
  const initials = user.name
    ? user.name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "";

  return (
    <Card className="group border border-white/10 bg-foreground/[0.03] transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/40 to-primary/10 text-sm font-semibold">
            {initials}
          </div>
          <CardTitle>{user.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{user.email}</p>

        <p className="mt-1 text-sm text-muted-foreground">
          {user.company.name}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <Button asChild variant="default" className="flex-1 rounded-full text-xs">
            <Link href={`/Users/${user.id}`}>View Profile</Link>
          </Button>

          <Button
            onClick={() => toggleFavorite(user)}
            variant={fav ? "default" : "outline"}
            className="rounded-full text-xs"
          >
            {fav ? "♥ Favorite" : "♡ Add Favorite"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
