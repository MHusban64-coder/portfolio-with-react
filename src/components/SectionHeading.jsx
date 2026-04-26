import React from "react";

function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";

  return (
    <div
      className={`flex max-w-3xl flex-col gap-4 ${
        centered ? "mx-auto items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && <span className="section-badge">{eyebrow}</span>}
      <h1 className="font-display text-4xl leading-tight text-white md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="text-base leading-8 text-slate-300 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
