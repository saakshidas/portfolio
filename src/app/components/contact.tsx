'use client';
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"loading" | "success" | "error" | "">("");

  const validate = (): Errors => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: undefined });
    if (status) setStatus("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section style={{ maxWidth: 400, margin: "0 auto", padding: "2rem 0" }}>
      <h2 style={{ textAlign: "center", color: "#00ffd0" }}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }} noValidate>
        <label htmlFor="contact-name">
          Name
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            required
            autoComplete="name"
          />
          {errors.name && <span id="contact-name-error" style={{ color: "#ff4d4f", fontSize: 13 }}>{errors.name}</span>}
        </label>
        <label htmlFor="contact-email">
          Email
          <input
            id="contact-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            required
            autoComplete="email"
          />
          {errors.email && <span id="contact-email-error" style={{ color: "#ff4d4f", fontSize: 13 }}>{errors.email}</span>}
        </label>
        <label htmlFor="contact-message">
          Message
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            required
            autoComplete="off"
          />
          {errors.message && <span id="contact-message-error" style={{ color: "#ff4d4f", fontSize: 13 }}>{errors.message}</span>}
        </label>
        <button
          type="submit"
          style={{ background: "#00ffd0", color: "#181818", border: "none", borderRadius: 6, padding: 12, fontWeight: 600, cursor: "pointer" }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && <p style={{ color: "#00c776", textAlign: "center" }}>Message sent!</p>}
        {status === "error" && <p style={{ color: "#ff4d4f", textAlign: "center" }}>Something went wrong. Try again.</p>}
      </form>
    </section>
  );
};

export default Contact;
