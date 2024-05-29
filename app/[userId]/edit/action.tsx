"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function getUser(id: number) {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })
  return user;
}

export async function editUser(formData: FormData) {
  const userId = Number(formData.get('userId'));
  const name = formData.get('name')?.toString();
  const age = Number(formData.get('age'));
  const role = formData.get('role')?.toString();

  await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      name,
      age,
      role
    }
  });

  redirect('/');
}