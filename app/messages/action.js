"use server"; 

import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(id) {
  
  const index = messages.findIndex((msg) => msg.id === id);
  
  if (index !== -1) {
    messages.splice(index, 1); 
    return { success: true };
  }
  
  return { success: false, error: "Pesan tidak ditemukan" };
}