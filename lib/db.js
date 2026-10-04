// Memaksa Next.js menggunakan memori global yang sama
const globalStore = globalThis || global;

// Jika array belum ada di memori global, buat baru. 
// Jika sudah ada, gunakan yang lama.
if (!globalStore.messages) {
  globalStore.messages = [];
}

if (!globalStore.favorites) {
  globalStore.favorites = [];
}

if (!globalStore.users) {
  globalStore.users = [
    { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
    { id: 2, name: "Ervin Howell", email: "ervin@example.com" },
    { id: 3, name: "Clementine Bauch", email: "clementine@example.com" }
  ];
}

// Export agar bisa dipakai oleh file lain
export const messages = globalStore.messages;
export const favorites = globalStore.favorites;
export const users = globalStore.users;