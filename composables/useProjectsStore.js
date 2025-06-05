// Define available projects
const projectList = [
  {
    id: 'invention',
    name: 'FOCAL',
    url: '/subjects/invention',
    next: 'iks'
  },
  {
    id: 'ics',
    name: 'NERVOUS SYSTEM',
    url: '/subjects/ics',
    next: 'interface'
  },
  {
    id: 'interface',
    name: 'GARDENHELPER',
    url: '/subjects/interface',
    next: 'programming'
  },
  {
    id: 'programming',
    name: 'ANIMAL JOURNEY',
    url: '/subjects/programming',
    next: 'dataset'
  },
  {
    id: 'dataset',
    name: 'TORNADO OCCURRENCES',
    url: '/subjects/dataset',
    next: null // Last project
  }
];

// Store for tracking project visits
export const useProjectsStore = () => {
  const visitedProjects = useState('visitedProjects', () => ({}));
  
  // Mark a project as visited
  const markVisited = (projectId) => {
    visitedProjects.value[projectId] = true;
  };
  
  // Check if a project has been visited
  const hasVisited = (projectId) => {
    return !!visitedProjects.value[projectId];
  };
  
  // Check if all projects have been visited
  const hasVisitedAll = () => {
    return projectList.every(project => hasVisited(project.id));
  };
  
  // Get the next project (if any)
  const getNextProject = (currentProjectId) => {
    const currentProject = projectList.find(p => p.id === currentProjectId);
    if (!currentProject || !currentProject.next) return null;
    
    return projectList.find(p => p.id === currentProject.next);
  };
  
  // Get the previous project (if any)
  const getPreviousProject = (currentProjectId) => {
    const currentIndex = projectList.findIndex(p => p.id === currentProjectId);
    if (currentIndex <= 0) return null;
    
    return projectList[currentIndex - 1];
  };
  
  return {
    projectList,
    visitedProjects: readonly(visitedProjects),
    markVisited,
    hasVisited,
    hasVisitedAll,
    getNextProject,
    getPreviousProject
  };
};