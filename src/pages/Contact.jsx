import { useState } from "react";
import {
  FaWhatsapp,
  FaUser,
  FaEnvelope,
  FaGraduationCap,
  FaRegCommentDots,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    className: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Admission Enquiry*

👤 Name: ${form.name}
🏫 Class: ${form.className}
📧 Email: ${form.email}

📝 Message:
${form.message}`;

    const phone = 919801006339;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full px-6">

        <div className="text-center">

          <h2 className="text-5xl font-black text-white">
            Contact Us
          </h2>

          <p className="mt-4 text-gray-300">
            Fill the form and we'll redirect you to WhatsApp.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div className="relative">

              <FaUser className="absolute left-4 top-5 text-yellow-400" />

              <input
                type="text"
                name="name"
                required
                placeholder="Student Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 outline-none"
              />

            </div>

            <div className="relative">

              <FaGraduationCap className="absolute left-4 top-5 text-yellow-400" />

              <input
                type="text"
                name="className"
                required
                placeholder="Class (6-10)"
                value={form.className}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 outline-none"
              />

            </div>

            <div className="relative md:col-span-2">

              <FaEnvelope className="absolute left-4 top-5 text-yellow-400" />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 outline-none"
              />

            </div>

            <div className="relative md:col-span-2">

              <FaRegCommentDots className="absolute left-4 top-5 text-yellow-400" />

              <textarea
                rows="6"
                name="message"
                required
                placeholder="Your Message..."
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/10 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 outline-none resize-none"
              />

            </div>

          </div>

          <button
            type="submit"
            className="mt-8 w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold text-lg transition"
          >
            <FaWhatsapp className="text-2xl" />
            Send on WhatsApp
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;