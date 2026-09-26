"use client";

import { useFavorite } from "@/context/FavoriteContext";
import UserCard from "@/Components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useFavorite();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
        Favorite
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
        My Favorite Users
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Data ini diambil langsung dari FavoriteContext.
      </p>

      {favorites.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-foreground/3 p-8 text-center text-muted-foreground">
          Belum ada user favorit yang ditambahkan.
        </div>
      )}
    </main>
  );
}