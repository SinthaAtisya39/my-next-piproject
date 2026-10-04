"use server"; // Wajib ditambahkan di baris paling atas

import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(id) {
  const index = messages.findIndex((m) => m.id === id);
  
  if (index !== -1) {
    
    messages.splice(index, 1);
    
    revalidatePath("/messages");
  }
}