import React from "react";
import SectionHeading from "../components/SectionHeading";
import { aboutParagraphs, aboutStats, siteData } from "../data/siteData";

function About() {
  return (
    <section className="section-space pt-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title={`A little more about ${siteData.name}.`}
          description="This page keeps the bio simple and professional, with space for a short story, image, and a few quick details."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface overflow-hidden border-white/10 bg-slate-900/65">
            <img
              src={siteData.profileImage}
              alt={siteData.name}
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          <div className="card-surface border-white/10 bg-slate-900/65 p-8 md:p-10">
            <div className="space-y-5">
              {aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-slate-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="muted-panel p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Location
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {siteData.location}
                </p>
              </div>
              <div className="muted-panel p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Email
                </p>
                <a
                  href={`mailto:${siteData.email}`}
                  className="mt-2 block text-lg font-semibold text-white transition duration-300 hover:text-accent-300"
                >
                  {siteData.email}
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutStats.map((item) => (
                <div
                  key={item.label}
                  className="muted-panel p-5"
                >
                  <p className="font-display text-2xl text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
