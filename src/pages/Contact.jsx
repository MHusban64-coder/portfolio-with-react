import React from "react";
import SectionHeading from "../components/SectionHeading";
import { contactDetails, siteData } from "../data/siteData";

function Contact() {
  return (
    <section className="section-space pt-32">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let&apos;s talk about your next project."
              description="This form is UI only, which makes it a good starter layout for adding email or backend functionality later."
            />

            <div className="grid gap-4">
              {contactDetails.map((item) => (
                <div
                  key={item.title}
                  className="card-surface border-white/10 bg-slate-900/65 p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {item.title}
                  </p>
                  {item.link.startsWith("mailto") ? (
                    <a
                      href={item.link}
                      className="mt-3 block text-lg font-semibold text-white transition duration-300 hover:text-accent-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-3 text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="card-surface border-white/10 bg-slate-900/65 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                Social Links
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {siteData.socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary px-4 py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="card-surface border-white/10 bg-slate-900/65 p-8 md:p-10">
            <form
              className="grid gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Full Name
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input-surface"
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Email Address
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="input-surface"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Project Type
                <select className="input-surface">
                  <option>Portfolio Website</option>
                  <option>Landing Page</option>
                  <option>Dashboard UI</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Subject
                <input
                  type="text"
                  placeholder="What would you like to build?"
                  className="input-surface"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Message
                <textarea
                  rows="6"
                  placeholder="Tell me a little about your idea..."
                  className="input-surface rounded-3xl"
                />
              </label>

              <button type="submit" className="btn-primary mt-2 w-fit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
