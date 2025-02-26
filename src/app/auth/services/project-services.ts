import { projectData } from "../data/project-data";

export function getProjects() {
    return projectData
}   

export function getProjectDetail(id: string) {
    return projectData.find(project => project.id === parseInt(id))
}   