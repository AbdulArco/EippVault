"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email";

    const wordCount = formData.message.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount < 10 || wordCount > 150)
      newErrors.message = "Message must be between 10 and 150 words";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("✅ Form Submitted Successfully");
      console.log(formData);
    }
  };

  return (
    <section
      id="contact-us">
    <div className="w-full flex justify-center py-14 bg-white">
      <div className="max-w-6xl w-full grid md:grid-cols-2 min-h-[650px]">

        {/* LEFT FORM SIDE */}
        <div className="px-14 py-10 flex flex-col justify-center">
          <h1 className="text-[28px] font-semibold text-gray-900 leading-tight">
            Let’s level up your brand, <br /> together
          </h1>

          <p className="text-sm text-gray-600 mt-2">
            You can reach us anytime via{" "}
            <a href="mailto:info@company.com" className="text-[#006DB3] font-medium">
              info@eippvault.com
            </a>
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6 ">

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm">First name *</label>
                <input
                  name="firstName"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#66B2FF] transition-all"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="text-red-600 text-xs mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="text-sm">Last name *</label>
                <input
                  name="lastName"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#66B2FF] transition-all"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="text-red-600 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <label className="text-sm">Email *</label>
              <input
                name="email"
                type="email"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#66B2FF] transition-all"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm">Phone number</label>
              <input
                name="phone"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#66B2FF] transition-all"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm">Message *</label>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[#66B2FF] transition-all"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm font-medium rounded-md bg-[var(--color-button)] hover:bg-[var(--color-primary-dark)] hover:text-white transition-all"
            >
              Get started
            </button>
          </form>
        </div>

        {/* RIGHT FULL IMAGE */}
        <div className="flex items-center justify-center ml-12 h-full w-full">
          <img
            src="/hero.png"
            className="w-full h-auto max-h-[600px] object-contain object-right"
            alt="Business"
          />
        </div>

      </div>
    </div>
    </section>

  );
}
