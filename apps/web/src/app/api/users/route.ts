import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@repo/database";
import { UserSchema } from "@repo/types";

export async function GET(): Promise<NextResponse> {
  const user = await prisma.user.findFirst({});
  return NextResponse.json({ name: user?.name, email: user?.email });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = req.json();
  const parsedBody = UserSchema.parse(body);

  const user = await prisma.user.create({
    data: {
      name: parsedBody.name,
      email: parsedBody.email,
      password: parsedBody.password,
    },
  });

  return NextResponse.json({ user });
}
