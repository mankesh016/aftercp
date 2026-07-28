import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="prompt-line">
          <span className="path">guest@aftercp</span>:~$ <span className="typewriter">whoami --honest</span>
        </div>

        <h1>
          Where blackboxes
          <br /> go to get <em>opened.</em>
        </h1>

        <p className="lede">
          I&apos;m Mankesh — Codeforces Candidate Master, ICPC Regionalist twice over, and someone who spent way too
          long treating <strong>&quot;System Design&quot;</strong> and <strong>&quot;DevOps&quot;</strong> as buzzwords
          to survive instead of ideas worth actually understanding.
        </p>

        <div className="badge">
          <span className="dot"></span> status: under construction
        </div>
      </section>

      {/* StorySection */}

      <section className="story">
        <div className="eyebrow">a sneak peek at how we&apos;ll learn things here</div>
        <blockquote>
          <p>&quot;Go learn System Design,&quot; they said.</p>
          <p>
            Cool. But what <em>is</em> it? Turns out it&apos;s mostly two things wearing a trench coat — Low-Level
            Design (how you structure code, OOP, clean architecture) and High-Level Design (how systems talk to each
            other at scale: load balancers, caching, databases).
          </p>
          <p>
            Here&apos;s the fun part: back in 1994, four guys — nicknamed the{" "}
            <span className="highlight">&quot;Gang of Four&quot;</span> — wrote a book with 23 design principles. Google
            didn&apos;t exist yet. Facebook didn&apos;t exist yet. And three decades later, senior engineers at those
            very companies still lean on ideas from that book.
          </p>
          <p>
            That&apos;s not trivia. That&apos;s the point — good engineering ideas are timeless. Once you know{" "}
            <em>why</em> they exist, you stop memorizing and start understanding.
          </p>
        </blockquote>
        <div className="tail">// full story dropping soon</div>
      </section>

      {/* ProjectsSection */}
      <section>
        <div className="eyebrow">currently shipped</div>
        <p className="mono section-intro">
          While the guidance library brews, here&apos;s what&apos;s already live and running.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      {/* ForStrip */}
      <section className="for-strip">
        <p>
          Built for juniors, fellow CPers, and anyone tired of being told <span className="amber">what</span> to learn
          without ever being told <span className="amber">why</span> it&apos;s worth learning.
        </p>
      </section>
    </div>
  );
}
