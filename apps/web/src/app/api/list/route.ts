import { NextResponse } from "next/server";
import prisma from "@repo/database";

export async function GET() {
  const user = await prisma.user.findMany();
  return NextResponse.json({ user });
}
