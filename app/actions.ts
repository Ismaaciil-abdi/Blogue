"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleSubmit(fromData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const title = fromData.get("title");
  const content = fromData.get("content");
  const url = fromData.get("url");
  const data = await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorId: user.id as string,
      authorImage: user.picture as string,
      authorName: user.given_name as string,
    },
  });
  return redirect("/dashboard");
}
