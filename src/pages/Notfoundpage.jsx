import React from "react";
import { Link } from "react-router-dom";

function Notfoundpage() {
  return (
    <section className="section-shell flex min-h-[70vh] items-center py-32">
      <div className="card-surface grid w-full gap-0 overflow-hidden border-white/10 bg-slate-900/65 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
            alt="Workspace desk"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/45" />
        </div>

        <div className="flex items-center p-8 md:p-12">
          <div className="max-w-xl">
            <span className="section-badge">404 Error</span>
            <h1 className="mt-6 font-display text-4xl text-white md:text-6xl">
              This page is missing, but the portfolio is still in shape.
            </h1>
            <p className="mt-5 text-base leading-8 text-slate-300">
              The link may be broken or the page may have moved. Use the button
              below to head back to the homepage or open the contact page.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/" className="btn-primary">
                Go Back Home
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notfoundpage;
