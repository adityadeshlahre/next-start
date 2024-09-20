"use server";

import prisma from "@repo/database";

export async function signup(
  username: string,
  password: string,
  email: string
) {
  const user = await prisma.user.create({
    data: {
      name: username,
      email: email,
      password: password,
    },
  });

  return user;
}
