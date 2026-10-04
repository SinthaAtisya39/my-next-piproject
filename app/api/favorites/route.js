import { getAllFavorites, addFavorite, updateFavorite} from "@/lib/services/favoriteService";

export async function GET() {
  const data = getAllFavorites();
  return Response.json(data);
}
export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch (error) {
    return Response.json(
      { error: "Format JSON tidak valid" },
      { status: 400 }
    );
  }

  const result = addFavorite(body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json(result.data, { status: result.status });
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    const result = updateFavorite(body);

    if (!result.success) {
      return Response.json({ error: result.error }, { status: result.status });
    }

    return Response.json(result.data);
  } catch (error) {
    return Response.json({ error: "Format request tidak valid" }, { status: 400 });
  }
}