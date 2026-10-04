import { getAllUsers } from "@/lib/services/userService";

export async function GET() {
  const data = getAllUsers();
  return Response.json(data);
}