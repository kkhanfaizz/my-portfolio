export default function Blog() {
   const blogs = [
    {
      title: "Getting Started with Next.js",
      link: "https://blog-demo-delta.vercel.app/posts/nextjs-guide", // apna deployed link
    },
    {
      title: "Top 5 TailwindCSS Tips",
      link: "https://blog-demo-delta.vercel.app/posts/tailwindcss-tips", // apna deployed link
    },
    {
      title: "Freelancing Tips for Developers",
      link: "https://blog-demo-delta.vercel.app/posts/freelancing-tips", // apna deployed link
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">My Blog</h2>
      <ul className="space-y-4">
        {blogs.map((b,i)=>(
          <li key={i} className="border p-4 rounded-lg hover:shadow-md">
            <a href={b.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">{b.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
