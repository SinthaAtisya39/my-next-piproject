"use server"; 

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(formData) {
    try {
        
        const id = formData.get("id");
  
        const { error } = await supabase
            .from("messages")
            .delete()
            .eq("id", id);

        if (error) {
            console.error("Gagal menghapus di Supabase:", error.message);
            return;
        }

        revalidatePath("/messages");
    } catch (error) {
        console.error("Gagal menghapus:", error);
    }
}