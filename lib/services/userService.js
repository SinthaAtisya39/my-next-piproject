import { findAllUsers, findUserById } from "../repositories/userRepository";

export function getAllUsers() {
  return findAllUsers();
}

export function getUser(id) {
  const user = findUserById(id);
  
  if (!user) {
    return { success: false, status: 404, error: "User tidak ditemukan" };
  }

  return { success: true, status: 200, data: user };
}