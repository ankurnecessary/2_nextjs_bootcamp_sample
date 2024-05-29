"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function deleteUser(formData: FormData) {
  const userId = Number(formData.get('userId'));
  console.log(userId);
  await prisma.user.delete({
    where: {
      id: userId
    }
  })
  revalidatePath('/');
}