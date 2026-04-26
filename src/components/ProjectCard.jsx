import React from "react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function ProjectCard({ project }) {
  return (
    <article className="card-surface overflow-hidden border-white/10 bg-slate-900/65 transition duration-300 hover:-translate-y-2 hover:border-brand-400/30 hover:shadow-glow">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-7">
        <span className="inline-flex rounded-full border border-brand-400/30 bg-brand-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-200">
          {project.category}
        </span>

        <h2 className="mt-5 font-display text-2xl text-white">
          {project.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary gap-2 px-5 py-3"
          >
            Live Demo
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary gap-2 px-5 py-3"
          >
            View Code
            <CodeBracketIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
