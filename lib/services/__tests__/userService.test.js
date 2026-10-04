import { users } from "../../db";
import { getAllUsers, getUser } from "../userService";

beforeEach(() => {
  users.length = 0;
  users.push(
    { id: 1, name: "Leanne Graham", email: "leanne@example.com" },
    { id: 2, name: "Ervin Howell", email: "ervin@example.com" },
    { id: 3, name: "Clementine Bauch", email: "clementine@example.com" }
  );
});

describe("userService", () => {
  test("getAllUsers berhasil mengambil semua data user", () => {
    const result = getAllUsers();
    
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
    expect(result[0].name).toBe("Leanne Graham");
  });

  test("getUser berhasil mengambil data user berdasarkan ID yang valid", () => {
    const result = getUser(1);

    expect(result.success).toBe(true);
    expect(result.status).toBe(200);
    expect(result.data.name).toBe("Leanne Graham");
  });

  test("getUser mengembalikan error 404 jika ID tidak ditemukan", () => {
    const result = getUser(999); 

    expect(result.success).toBe(false);
    expect(result.status).toBe(404);
    expect(result.error).toBe("User tidak ditemukan");
  });
});