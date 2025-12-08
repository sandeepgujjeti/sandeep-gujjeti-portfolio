import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] =
    useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",    // e.g. "service_xxx"
        "YOUR_TEMPLATE_ID",   // e.g. "template_yyy"
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"     // e.g. "AbCdEfG12345"
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        className="w-full border rounded px-3 py-2 bg-transparent"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className="w-full border rounded px-3 py-2 bg-transparent"
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        className="w-full border rounded px-3 py-2 bg-transparent"
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <textarea
        className="w-full border rounded px-3 py-2 bg-transparent"
        name="message"
        placeholder="Your Message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm">Message sent successfully ✅</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}
    </form>
  );
};

export default ContactForm;
