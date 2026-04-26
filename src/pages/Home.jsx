import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import { homeHighlights } from "../data/siteData";

function Home() {
  return (
    <>
      <HeroSection />

      <section className="section-space">
        <div className="section-shell">
          <SectionHeading
            eyebrow="What I Build"
            title="Simple design choices that make the whole portfolio feel polished."
            description="The layout is clean, responsive, and easy to update when you want to replace the sample content with your own work."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {homeHighlights.map((item, index) => (
              <article
                key={item.title}
                className="card-surface animate-fade-up border-white/10 bg-slate-900/65 p-7 transition duration-300 hover:-translate-y-2 hover:border-brand-400/30 hover:bg-slate-900/80"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white shadow-lg shadow-brand-500/30">
                  0{index + 1}
                </span>
                <h2 className="mt-5 font-display text-2xl text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <div className="card-surface relative grid gap-8 overflow-hidden border-white/10 bg-slate-900/70 p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-accent-500/15 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-300">
                Next Step
              </p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">
                Use this as a strong starting point, then swap in your own
                story.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Update the text, profile image, and project data whenever you
                want. The layout is already set up to look professional on both
                mobile and desktop.
              </p>
            </div>

            <div className="relative flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                More About Me
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
