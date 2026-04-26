import React from "react";
import { Link } from "react-router-dom";
import { navLinks, siteData } from "../data/siteData";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/40 backdrop-blur-xl">
      <div className="section-shell py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl text-white">{siteData.name}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A clean React and Tailwind portfolio starter built with reusable
              sections and simple content that is easy to replace.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-semibold text-slate-300 transition duration-300 hover:text-brand-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
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

            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} {siteData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
