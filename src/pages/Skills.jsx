import React from "react";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillGroups } from "../data/siteData";

function Skills() {
  return (
    <section className="section-space pt-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="The tools and areas I use to build clean front-end projects."
          description="Each card groups the main skills so the page stays simple, readable, and easy to scan."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCard
                title={group.title}
                description={group.description}
                items={group.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
