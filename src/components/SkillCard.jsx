import React from "react";

function SkillCard({ title, description, items }) {
  return (
    <article className="card-surface border-white/10 bg-slate-900/65 p-7 transition duration-300 hover:-translate-y-2 hover:border-brand-400/30 hover:bg-slate-900/80">
      <h2 className="font-display text-2xl text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-brand-100"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default SkillCard;
