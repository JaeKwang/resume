'use client'

import Introduce from "@/app/components/home/introduce";
import Works from "@/app/components/home/works";
import Education from "@/app/components/home/education";
import Projects from "@/app/components/home/projects";
import Skills from "@/app/components/home/skills";

export default function ResumePage() {

  return (
    <div className="bg-gray-200">
      <section id="introduce" className="main-section">
        <Introduce />
      </section>
      <section id="skills" className="main-section">
        <Skills />
      </section>
      <section id="experience" className="main-section">
        <Works />
      </section>
      <section id="education" className="main-section">
        <Education />
      </section>
      <section id="projects" className="main-section">
        <Projects />
      </section>
    </div>
  );
}
