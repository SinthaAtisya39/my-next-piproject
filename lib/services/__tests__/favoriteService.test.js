import { favorites } from "../../db";
import { addFavorite, removeFavorite } from "../favoriteService";

beforeEach(() => {
  favorites.length = 0;
});

describe("favoriteService", () => {
  test("addFavorite berhasil menyimpan data valid", () => {
    const result = addFavorite({ id: 1, name: "Sintha" });

    expect(result.success).toBe(true);
    expect(result.status).toBe(201);
    expect(favorites).toHaveLength(1);
  });

  test("addFavorite menolak data tanpa name", () => {
    const result = addFavorite({ id: 1 });

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
  });

  test("addFavorite menolak id yang sudah ada", () => {
    addFavorite({ id: 1, name: "Sintha" });
    const result = addFavorite({ id: 1, name: "Sintha Lagi" });

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(result.error).toBe("User ini sudah difavoritkan");
  });

  test("removeFavorite berhasil menghapus data yang ada", () => {
    addFavorite({ id: 1, name: "Sintha" });
    const result = removeFavorite(1);

    expect(result.success).toBe(true);
    expect(favorites).toHaveLength(0);
  });

  test("removeFavorite gagal kalau id tidak ditemukan", () => {
    const result = removeFavorite(999);

    expect(result.success).toBe(false);
    expect(result.status).toBe(404);
  });
});