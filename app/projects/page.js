export default function Projects() {
  const projects = [
    {
      title: "Business Landing Page",
      link: "https://business-landing-page-mu.vercel.app/", // apna deployed link
    },
    {
      title: "Blog Website",
      link: "https://blog-demo-delta.vercel.app/", // apna deployed link
    },
    {
      title: "Ecommerce Website",
      link: "https://ecommerce-frontend-ecru-pi.vercel.app/", // apna deployed link
    },
  ];

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <ul className="space-y-4">
        {projects.map((p, i) => (
          <li key={i} className="border p-4 rounded-lg hover:shadow-md">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
