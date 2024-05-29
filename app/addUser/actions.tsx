"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function createUser(formData: FormData) {
  const name = formData.get("name")?.toString() ?? "";
  const age = Number(formData.get("age")) ?? 0;
  const role = formData.get("role")?.toString() ?? "";

  try {
    const response = await prisma.user.create({
      data: {
        name,
        age,
        role,
      },
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/");
}
