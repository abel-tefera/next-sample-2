import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">Snippets</h1>
        <Link
          href="/snippets/new"
          className="rounded bg-blue-200 hover:bg-blue-700 hover:text-white transition-colors"
        >
          <span className="p-2 ">Create</span>
        </Link>
      </div>
      {snippets.map(({ id, title, code }) => (
        <div key={id} className="flex flex-col my-2">
          <Link href={`/snippets/${id}`}>
            <div className="font-bold hover:text-blue-700 hover:underline">
              {title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
