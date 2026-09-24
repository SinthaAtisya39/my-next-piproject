"use client";
import { useEffect, useState } from "react";
import UserCard from "@/Components/UserCard";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
    })
    .then((data) => {
        setUsers(data);
        setLoading(false);
    })
    .catch((error) => {
        setError(error.message);
        setLoading(false);
    });
  }, []);
  if (loading) {
    return <main className="flex
    min-h-screen
    items-center
    justify-center
    bg-gray-100">
    <p>Loading...</p>
    </main>;
  }
  if (error) { 
    return <main className="flex min-h-screen 
      items-center 
      justify-center 
      bg-gray-100">
      <p>Error: {error}</p>
      </main>; 
  }
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold">Users</h1>
        <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full rounded-lg border bg-white px-4 py-2"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
        <UserCard
        key={user.id}
        user={user}
        />
        ))
        ) : (
        <p className="text-gray-500">
        User tidak ditemukan.
        </p>
        )}
        </div>
      </div> 
    </main>
  );
}

