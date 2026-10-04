import { getUser } from "@/lib/services/userService";

export async function GET(request, { params }) {
  const { id } = await params;
  
  const result = getUser(id);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json(result.data);
}