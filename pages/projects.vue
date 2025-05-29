<template>
  <div class="wrapper">
    <div class="projects-container maxwidth">
      <div class="projects-header">
        <h1 class="what-if-title">What if...</h1>
      </div>

      <div class="projects-grid">
        <!-- Focal Project -->
        <NuxtLink to="/subjects/invention" class="project-card neo-card">
          <div class="project-content">
            <p class="project-description" 
               :style="{ backgroundImage: `url(/images/invention/invention_cover.png)` }">
              <span class="description-text">
                ...we could <strong class="highlight-text">organize our digital chaos</strong> 
                in three-dimensional space around us?
              </span>
            </p>
            <div class="project-meta">
              <span class="project-type">Mixed Reality</span>
              <span class="project-year">2024-2025</span>
            </div>
          </div>
          <div class="project-hover-overlay">
            <span class="project-name">Focal</span>
            <div class="arrow-icon">→</div>
          </div>
        </NuxtLink>

        <!-- GardenHelper Project -->
        <NuxtLink to="/subjects/interface" class="project-card neo-card">
          <div class="project-content">
            <p class="project-description" 
               :style="{ backgroundImage: `url(/images/gardenhelper/gardenhelper_cover.png)` }">
              <span class="description-text">
                ...keeping plants alive was as <strong class="highlight-text">simple as having 
                a conversation</strong> with them?
              </span>
            </p>
            <div class="project-meta">
              <span class="project-type">Interface Design</span>
              <span class="project-year">2024-2025</span>
            </div>
          </div>
          <div class="project-hover-overlay">
            <span class="project-name">GardenHelper</span>
            <div class="arrow-icon">→</div>
          </div>
        </NuxtLink>

        <!-- Animals Website Project -->
        <NuxtLink to="/subjects/programming" class="project-card neo-card">
          <div class="project-content">
            <p class="project-description" 
               :style="{ backgroundImage: `url(/images/animals/animals_cover.png)` }">
              <span class="description-text">
                ...children could <strong class="highlight-text">step into the wild</strong> 
                and meet their favorite animals face to face?
              </span>
            </p>
            <div class="project-meta">
              <span class="project-type">Web Design</span>
              <span class="project-year">2024</span>
            </div>
          </div>
          <div class="project-hover-overlay">
            <span class="project-name">Animal Explorer</span>
            <div class="arrow-icon">→</div>
          </div>
        </NuxtLink>

        <!-- ICS Project -->
        <NuxtLink to="/subjects/ics" class="project-card neo-card">
          <div class="project-content">
            <p class="project-description" 
               :style="{ backgroundImage: `url(/images/ics/ics_cover.png)` }">
              <span class="description-text">
                ...complex data could <strong class="highlight-text">tell its own story</strong> 
                through beautiful, intuitive visualizations?
              </span>
            </p>
            <div class="project-meta">
              <span class="project-type">Data Visualization</span>
              <span class="project-year">2024</span>
            </div>
          </div>
          <div class="project-hover-overlay">
            <span class="project-name">ICS Dashboard</span>
            <div class="arrow-icon">→</div>
          </div>
        </NuxtLink>
      </div>

      <div class="projects-footer">
        <p class="footer-text">
          Each project explores a unique possibility, 
          <span class="teal-text">challenging conventional thinking</span> 
          and creating new solutions for everyday problems.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add any necessary logic here
</script>

<style scoped>
.projects-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.projects-header {
  text-align: center;
  margin-bottom: 4rem;
}

.what-if-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  color: var(--neo-text-color);
  margin: 0;
  text-align: left;
  text-shadow: 
    2px 2px 4px var(--neo-shadow-dark),
    -2px -2px 4px var(--neo-shadow-light);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  position: relative;
  padding: 2rem;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  background: var(--neo-bg-color);
  box-shadow:
    12px 12px 24px var(--neo-shadow-dark),
    -12px -12px 24px var(--neo-shadow-light);
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card:hover {
  box-shadow:
    8px 8px 16px var(--neo-shadow-dark),
    -8px -8px 16px var(--neo-shadow-light);
  transform: translateY(-2px);
}

.project-card:hover .project-hover-overlay {
  opacity: 1;
  transform: translateY(0);
}

.project-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0;
  border-radius: 0.5rem;
  overflow: hidden;
}

.description-text {
  display: block;
  padding: 1.5rem;
  background: var(--neo-bg-color);
  color: var(--neo-text-color);
  border-radius: 0.5rem;
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
}

.project-card:hover .description-text {
  background: transparent;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: inherit;
  background-size: cover;
  background-position: center;
  text-shadow: none;
}

.highlight-text {
  color: var(--neo-accent-color);
  font-weight: 600;
  transition: all 0.4s ease;
}

.project-card:hover .highlight-text {
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.teal-text {
  color: var(--neo-accent-color);
  font-weight: 600;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: var(--neo-text-secondary);
  margin-top: auto;
  z-index: 3;
  position: relative;
}

.project-type {
  background: var(--neo-accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-year {
  font-weight: 500;
}

.project-hover-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, var(--neo-accent-color), #00a8cc);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
  z-index: 4;
}

.project-name {
  font-size: 1.2rem;
  font-weight: 600;
}

.arrow-icon {
  font-size: 1.5rem;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.project-card:hover .arrow-icon {
  transform: translateX(5px);
}

.projects-footer {
  text-align: center;
  margin-top: 3rem;
}

.footer-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--neo-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* Fallback for browsers that don't support background-clip: text */
@supports not (-webkit-background-clip: text) {
  .project-card:hover .description-text {
    background: rgba(255, 255, 255, 0.1);
    color: var(--neo-text-color);
    backdrop-filter: blur(2px);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    min-height: 180px;
    padding: 1.5rem;
  }
  
  .what-if-title {
    margin-bottom: 2rem;
  }
  
  .projects-header {
    margin-bottom: 3rem;
  }
  
  .description-text {
    padding: 1.25rem;
  }
}

@media (max-width: 500px) {
  .project-card {
    padding: 1.25rem;
  }
  
  .project-description {
    font-size: 1rem;
  }
  
  .project-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .description-text {
    padding: 1rem;
  }
}
</style>