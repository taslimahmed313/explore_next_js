import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Helle World!</h1>
      <Link className="text-3xl mt-8 inline-block" href="/about">
        Go To About Page
      </Link>
    </main>
  );
}
