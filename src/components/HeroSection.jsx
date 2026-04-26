import React from "react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute right-0 top-28 h-80 w-80 rounded-full bg-glow-500/20 blur-3xl" />
      <div className="absolute left-1/3 top-44 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up space-y-8">
          <span className="section-badge">Modern Portfolio Website</span>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Hello, I&apos;m
            </p>
            <h1 className="font-display text-5xl leading-tight text-white md:text-7xl">
              {siteData.name}
              <span className="mt-2 block bg-gradient-to-r from-brand-300 via-violet-300 to-accent-300 bg-clip-text text-transparent">
                {siteData.role}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              {siteData.intro} {siteData.heroDescription}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>

          <div className="grid max-w-2xl gap-4 sm:grid-cols-3">
            {siteData.heroStats.map((item) => (
              <div
                key={item.label}
                className="card-surface border-white/15 bg-white/5 p-5 hover:border-brand-400/35 hover:bg-white/[0.08]"
              >
                <p className="font-display text-3xl text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <div className="card-surface relative overflow-hidden border-white/15 bg-slate-900/55 p-4">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src={siteData.profileImage}
                alt={siteData.name}
                className="h-[440px] w-full object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-[24px] border border-white/10 bg-slate-950/65 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-300">
                Current Focus
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Responsive layouts, reusable components, and clean portfolio
                UI with simple content updates.
              </p>
            </div>
          </div>

          <div className="card-surface absolute -bottom-6 -left-4 hidden max-w-xs animate-float border-brand-400/25 bg-slate-950/70 p-5 md:block">
            <p className="font-semibold text-white">{siteData.availability}</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Built with React, Tailwind CSS, and a structure that is easy to
              grow later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
