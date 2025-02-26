import { getProjectDetail } from "@/app/_lib/services/project-services";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string; author: string }>;
}) {
  const { id } = await params;
  const project = getProjectDetail(id);

  return (
    <div className="p-8">
      <div className="space-y-4">
        <div>Project Title: {project?.title}</div>
        <div>Author: {project?.author}</div>
        <div>Content: {project?.content}</div>
      </div>

      <button className="border my-4 px-4 py-2">Join Project</button>
    </div>
  );
}
