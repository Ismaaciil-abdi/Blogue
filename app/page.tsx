import { Suspense } from "react";
import { prisma } from "./utils/db";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Skeleton } from "@/components/ui/skeleton";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updateAt: true,
    },
  });
  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>
      <Suspense fallback={<BLogPostGrid />}>
        <BlogPost />
      </Suspense>
    </div>
  );
}

async function BlogPost() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {data.map((item) => (
        <BlogPostCard data={item} key={item.id} />
      ))}
    </div>
  );
}

function BLogPostGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm h-[400px] flex flex-col overflow-hidden"
          key={index}
        >
          <Skeleton className="h-48 w-full rounded-none" />
          <div className="p-4 flex-1 flex flex-col gap-3">
            <Skeleton className="h-6 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="h-8 w-8 rounded-full mr-2">
                <Skeleton className="h-8 w-8 rounded-full mr-2" />
                <Skeleton className="h-8 w-8 rounded-full mr-2" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
