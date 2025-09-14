"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mvgbyvzb", { // 👈 apna Formspree endpoint lagao
        method: "POST",
        body: form,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <div className="p-10 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 border rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600 font-medium">
          ✅ Thanks for your message! I’ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-red-600 font-medium">
          ❌ Oops! Something went wrong. Please try again later.
        </p>
      )}
    </div>
  );
}
