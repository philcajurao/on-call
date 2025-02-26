
import Link from "next/link";
import { getProjects } from "../auth/services/project-services";

export default function Projects() {

    const projectData = getProjects()
  return (
    <div className="px-8">
      <div className="flex gap-4 py-8">
        {projectData?.map((project) => (
          <div key={project.id} className="border p-4 max-w-sm space-y-4">
            <h2 className="font-bold text-2xl">{project.title}</h2>
            <p>{project.content}</p>
            <div>
                <Link href={`/projects/${project.id}`} className="underline">See Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
