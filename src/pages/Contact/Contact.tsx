import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="flex flex-col items-center py-12 bg-gray-50 mt-20">
      <h2 className="text-3xl font-bold text-[#0d9488] mb-8">Contact Us</h2>

      <div className="w-4/5 max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Card 1: Office Address */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
          <h3 className="text-2xl font-semibold text-[#0d9488] mb-4">
            Our avilability
          </h3>
          <p className="text-gray-700 font-bold mb-2">
            📍 123 Main Street, Kigali, Rwanda
          </p>
          <p className="text-gray-700 font-bold mb-4">📞 +250 788 764 432</p>
          <p className="text-gray-700 font-bold mb-4">✉ info@glowac.rw</p>
          <p className="text-gray-700 font-bold  mb-4">⏰ Mon - Fri: 9:00 AM - 5:00 PM</p>
          <p className="text-gray-700 font-bold mb-4">⏰ Saturday: 2:30 AM - 12:00 PM</p>
          <p className="text-gray-700 font-bold mb-4">⏰ Umuganda Closed</p>
          <p className="text-gray-700 font-bold mb-4">⏰ Public holiday closed</p>
        </div>

        {/* Card 2: Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
          <h3 className="text-2xl font-semibold text-[#0d9488] mb-4">
            Send Us Feedback
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
              required
            />
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Your Feedback"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#0d9488] text-white px-6 py-2 rounded-lg hover:bg-[#0b7a6f] transition"
            >
              Send Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
