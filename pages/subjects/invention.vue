<template>
  <div class="wrapper">
    <div class="project-container maxwidth">
      <div class="project-header">
        <h5 class="subtitle-text teal-text">INVENTION DESIGN</h5>
        <h1 class="neo-title">FOCAL</h1>
      </div>

      <div class="project-hero neo-card">
        <img src="/images/invention/invention_cover.png" alt="Focal Project">
      </div>

      <div class="project-content neo-container">
        <div class="project-info">
          <div class="info-item">
            <h3 class="teal-text">Year</h3>
            <p>2024 - 2025</p>
          </div>
          <div class="info-item">
            <h3 class="teal-text">Category</h3>
            <p>Mixed Reality Interface</p>
          </div>
          <div class="info-item">
            <h3 class="teal-text">Tools</h3>
            <p>Miro, Figma, After Effects, Protopie, Apple Vision Pro</p>
          </div>
          <div class="info-item">
            <h3 class="teal-text">Team</h3>
            <div>
              <GroupMemberTag group-link="https://www.linkedin.com/in/jannik-fauser/" label="Jannik" />
              <GroupMemberTag group-link="https://timon.design" label="Timon" />
              <GroupMemberTag group-link="https://www.linkedin.com/in/eric-hochstatter-91b368358/" label="Eric" />
            </div>
          </div>
        </div>

        <div class="project-description">
          <h2 class="section-title teal-accent">Project Overview</h2>
          <p>
            Do you often lose track of your open apps while working on your laptop? Focal brings order to
            your digital workspace by allowing applications to be spatially arranged – directly on the walls
            around you.
          </p>

          <p>
            With various gestures, you can pull apps towards you and seamlessly switch between three different
            information levels. This creates a new, structured way of digital working that adapts to your needs.
          </p>

          <div class="neo-separator"></div>

          <h2 class="section-title teal-accent">The Problem</h2>
          <p>
            In today's digital work environment, we are constantly surrounded by numerous open applications.
            Traditional operating systems offer only limited possibilities for organizing these applications, which can
            lead to overwhelm and reduced productivity.
          </p>

          <div class="project-gallery">
            <div class="gallery-item neo-card">
              <img src="/images/invention/invention_cover.png" alt="Process Image 1">
            </div>
            <div class="gallery-item neo-card">
              <img src="/images/invention/invention_cover.png" alt="Process Image 2">
            </div>
          </div>

          <div class="neo-separator"></div>

          <h2 class="section-title teal-accent">The Solution</h2>
          <p>
            Focal uses Mixed Reality to give digital workspaces a spatial dimension. Applications
            can be positioned around the user, with three information levels enabling intuitive organization:
          </p>

          <ul class="solution-list">
            <li>
              <strong class="teal-text">Peripheral Level:</strong> Less important apps remain in view without
              being distracting
            </li>
            <li>
              <strong class="teal-text">Focus Level:</strong> Actively used apps are placed in optimal position
            </li>
            <li>
              <strong class="teal-text">Detail Level:</strong> Enables deep interaction with a single application
            </li>
          </ul>

          <p>
            Through intuitive gestures, users can effortlessly switch between these levels and thus
            control their attention in a targeted manner.
          </p>
        </div>
      </div>

      <div class="project-navigation">
        <NuxtLink to="/" class="neo-button outline">Back to Home</NuxtLink>

        <!-- Show next project button if there is a next project -->
        <NuxtLink v-if="nextProject && !haveVisitedAll" :to="nextProject.url" class="neo-button">
          Next Project
        </NuxtLink>

        <!-- Show previous projects button if all projects have been visited -->
        <NuxtLink v-if="haveVisitedAll && prevProject" :to="prevProject.url" class="neo-button">
          Previous Project
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '~/composables/useProjectsStore';
import GroupMemberTag from '~/components/GroupMemberTag.vue';
import { onMounted, computed } from 'vue';

const projectId = 'invention';
const projectsStore = useProjectsStore();

// Get next and previous projects
const nextProject = computed(() => projectsStore.getNextProject(projectId));
const prevProject = computed(() => projectsStore.getPreviousProject(projectId));

// Check if all projects have been visited
const haveVisitedAll = computed(() => projectsStore.hasVisitedAll());

onMounted(() => {
  // Mark this project as visited when the page loads
  projectsStore.markVisited(projectId);
});
</script>

<style>
.project-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.project-header {
  margin-bottom: 3rem;
  text-align: center;
}

.teal-text {
  color: var(--neo-accent-color) !important;
}

.teal-accent {
  color: var(--neo-accent-color);
  font-weight: 600;
}

.project-hero {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow:
    15px 15px 30px var(--neo-shadow-dark),
    -15px -15px 30px var(--neo-shadow-light);
}

.project-hero img {
  width: 100%;
  display: block;
}

.project-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item h3 {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.info-item p {
  font-size: 1.1rem;
  color: var(--neo-text-color);
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--neo-text-color);
}

.project-description p {
  margin-bottom: 1.5rem;
}

.solution-list {
  margin: 1.5rem 0 2rem 1.5rem;
}

.solution-list li {
  margin-bottom: 1rem;
  position: relative;
  padding-left: 1.5rem;
}

.solution-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--neo-accent-color);
  border-radius: 50%;
  box-shadow:
    2px 2px 4px var(--neo-shadow-dark),
    -2px -2px 4px var(--neo-shadow-light);
}

.project-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

.gallery-item {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow:
    8px 8px 16px var(--neo-shadow-dark),
    -8px -8px 16px var(--neo-shadow-light);
}

.gallery-item img {
  width: 100%;
  display: block;
}

.project-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}

.project-navigation .neo-button.outline {
  margin-right: auto;
}

@media (max-width: 768px) {
  .project-content {
    grid-template-columns: 1fr;
  }

  .project-info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .project-navigation {
    flex-direction: column;
    gap: 1rem;
  }

  .project-navigation .neo-button {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 500px) {
  .project-info {
    grid-template-columns: 1fr;
  }

  .project-gallery {
    grid-template-columns: 1fr;
  }
}
</style>