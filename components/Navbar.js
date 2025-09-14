import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-2xl font-bold text-blue-600">Fahim Portfolio</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
