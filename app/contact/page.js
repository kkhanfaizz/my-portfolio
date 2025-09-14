export default function Contact() {
  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
}
