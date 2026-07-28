import { Project } from "@/data/projects";

export default function ProjectCard({ name, description, stack, url }: Project) {
  const displayUrl = url.replace("https://", "");

  return (
    <div className="project-card">
      <div className="card-top">
        <h3>{name}</h3>
        <span className="verdict-tag">AC</span>
      </div>
      <p>{description}</p>
      <span className="stack">{stack}</span>
      <a className="visit" href={url} target="_blank" rel="noopener noreferrer">
        {displayUrl} →
      </a>
    </div>
  );
}
