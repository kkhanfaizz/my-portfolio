import Navbar from "@/components/Navbar";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Business Landing Page",
    desc: "A modern business landing page built with Next.js & Tailwind.",
    demo: "https://business-landing-page-mu.vercel.app",
    code: "https://github.com/kkhanfaizz/business-landing-page",
  },
  {
    id: 2,
    title: "Blog Website",
    desc: "A blog website with multiple posts and a clean design.",
    demo: "https://blog-demo-delta.vercel.app",
    code: "https://github.com/kkhanfaizz/blog-demo",
  },
  {
    id: 3,
    title: "E-commerce Frontend",
    desc: "E-commerce site with product listing and cart system.",
    demo: "https://ecommerce-frontend-ecru-pi.vercel.app",
    code: "https://github.com/kkhanfaizz/ecommerce-frontend",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-10">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10">
        {projects.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.desc}</p>
            <div className="flex justify-between mt-3">
              <Link href={p.demo} className="text-blue-600 hover:underline">
                Live Demo
              </Link>
              <Link href={p.code} className="text-green-600 hover:underline">
                Source Code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
