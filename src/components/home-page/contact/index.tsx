"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check, Send, X } from "lucide-react";
import { data } from "@/utils/data/home-page/contact";

type FormData = {
  name: string;
  email: string;
  services: string;
  mobile: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const emptyForm: FormData = { name: "", email: "", services: "", mobile: "", message: "" };

const fieldClass =
  "w-full rounded-lg border border-neutral-200 bg-white p-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30";

export default function ContactUs() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-16">
      <div className="mx-auto grid w-[90%] max-w-6xl gap-10 md:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase text-neutral-500">Get in Touch</h4>
          <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
            {data.heading} <span className="text-brand">{data.subheading}</span>
          </h2>
          <p className="mt-4 text-neutral-600">{data.description}</p>

          <div className="my-6 h-0.5 w-full bg-neutral-200" />

          <ul className="space-y-6 text-neutral-700">
            {data.contacts.map(({ label, value, icon: Icon }) => (
              <li key={label} className="flex items-start gap-4">
                <Icon className="size-6 text-brand" aria-hidden />
                <div>
                  <p className="font-bold">{label}</p>
                  <p>{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-lg bg-surface p-6 shadow-md">
          <h3 className="mb-4 flex items-center text-xl font-bold text-ink">
            <Send className="mr-2 text-brand" aria-hidden /> Send Your Details
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="name"
              required
              maxLength={100}
              className={fieldClass}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              autoComplete="email"
              required
              maxLength={150}
              className={fieldClass}
            />
          </div>

          <select
            name="services"
            value={form.services}
            onChange={handleChange}
            required
            className={fieldClass}
          >
            <option value="">Select Service</option>
            {data.service.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Your Mobile Number"
            autoComplete="tel"
            required
            maxLength={20}
            className={fieldClass}
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write Message"
            rows={4}
            required
            maxLength={2000}
            className={fieldClass}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-lg bg-brand py-3 font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>

          <div aria-live="polite">
            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-green-600">
                <Check className="size-4" aria-hidden /> Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-600">
                <X className="size-4" aria-hidden /> Something went wrong. Try again!
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
