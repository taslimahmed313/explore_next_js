import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Home Page</h1>
      <Link className="text-3xl mt-8 inline-block" href="/about">
        Go To About Page
      </Link>
      <br />
      <Link className="text-4xl mt-8 inline-block" href="/users">
        Users
      </Link>
    </main>
  );
}
