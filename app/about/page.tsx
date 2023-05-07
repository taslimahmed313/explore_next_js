import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className="text-2xl">This is About Pages.</h1>
      <Link className="text-3xl mt-8 inline-block" href="/">
        Go To Home
      </Link>
    </div>
  );
}
