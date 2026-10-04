import { users } from "../db";

export function findAllUsers() {
    return users;
}

export function findUserById(id) {
    return users.find((u) => u.id === Number(id));
}

export function insertUser(data) {
    users.push(data);
    return data;
  }
  
  export function deleteUserById(id) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;
  
    users.splice(index, 1);
    return true;
  }