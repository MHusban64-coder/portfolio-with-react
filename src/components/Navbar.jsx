import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, siteData } from "../data/siteData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const initials = siteData.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[28px] border border-white/10 bg-slate-950/65 px-5 py-4 shadow-glow backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 via-violet-500 to-accent-500 font-display text-sm text-white shadow-glow">
                {initials}
              </span>
              <div>
                <p className="font-display text-lg text-white">
                  {siteData.name}
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  {siteData.role}
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:border-brand-400/50 hover:text-brand-100 md:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>

          {menuOpen && (
            <nav className="mt-4 grid gap-2 border-t border-white/10 pt-4 md:hidden">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-brand-500 to-violet-500 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
