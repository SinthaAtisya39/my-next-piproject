import { NextResponse } from "next/server";

export async function GET(){
    const myProfile = {
        name: "Sintha Atisya",
        role: "Peserta Bootcamp",
        team: "RA Lasminingrat",
        favoriteTech: ["Next.js", "Tailwind CSS", "React"]
    };

    return NextResponse.json(myProfile);
}
