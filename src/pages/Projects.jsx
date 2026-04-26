import React from "react";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import projects from "../data/projects.json";

function Projects() {
  return (
    <section className="section-space pt-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="A sample project section powered by JSON data."
          description="The cards below are rendered by mapping over the data in src/data/projects.json, so replacing the portfolio work later is quick and simple."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
