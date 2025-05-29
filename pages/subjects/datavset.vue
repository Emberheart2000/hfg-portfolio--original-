<template>
  <div class="wrapper">
    <div class="project-container maxwidth">
      <div class="project-header">
        <h5 class="subtitle-text teal-text">DATA VISUALIZATION</h5>
        <h1 class="neo-title">TORNADO TRACKER</h1>
      </div>

      <div class="project-hero neo-card">
        <img src="/images/dataset/datavis_cover.png" alt="Tornado Tracker Data Visualization">
      </div>

      <div class="project-content neo-container">
        <div class="project-info">
          <div class="info-item">
            <h3 class="teal-text">Year</h3>
            <p>2024</p>
          </div>
          <div class="info-item">
            <h3 class="teal-text">Category</h3>
            <p>Data Visualization</p>
          </div>
          <div class="info-item">
            <h3 class="teal-text">Context</h3>
            <p>University Lab Week</p>
          </div>
          <div class="info-item">
            <h3 class="teal-text">Tools</h3>
            <p>D3.js, TopoJSON, NOAA Dataset</p>
          </div>
        </div>

        <div class="project-description">
          <h2 class="section-title teal-accent">Project Overview</h2>
          <p>
            During our university's Lab Week, I created an interactive data visualization exploring tornado patterns 
            across the United States. The project investigates how tornadoes develop and which regions are most 
            affected by different tornado intensities from 1950 to 2022.
          </p>

          <div class="neo-separator"></div>

          <h2 class="section-title teal-accent">Data & Background</h2>
          <p>
            The visualization is based on a comprehensive dataset from the <strong class="teal-text">National Oceanic 
            and Atmospheric Administration (NOAA)</strong>, covering all tornado records in US counties from 1950 to 2022. 
            Tornadoes are classified using the <strong class="teal-text">Enhanced Fujita Scale (EF-Scale)</strong>, 
            which rates tornado intensity based on damage caused rather than wind speed, as wind velocities are often 
            difficult to measure accurately.
          </p>

          <div class="neo-separator"></div>

          <h2 class="section-title teal-accent">Interactive Visualization</h2>
          <p>
            The visualization uses <strong class="teal-text">TopoJSON format</strong> to display US counties as an 
            interactive map. Users can explore tornado occurrences through color-coded county representations, with 
            flexible filtering options for deeper analysis.
          </p>

          <div class="visualization-features">
            <div class="feature-card neo-card">
              <h4 class="teal-text">Year Selection</h4>
              <p>Filter data by specific years to analyze temporal patterns and identify peak tornado activity periods.</p>
            </div>
            
            <div class="feature-card neo-card">
              <h4 class="teal-text">Intensity Filtering</h4>
              <p>View tornadoes by EF-Scale rating to understand the geographic distribution of tornado strengths.</p>
            </div>
            
            <div class="feature-card neo-card">
              <h4 class="teal-text">Cumulative View</h4>
              <p>Display aggregated data across all years for comprehensive long-term trend analysis.</p>
            </div>
          </div>

          <div class="neo-separator"></div>

          <h2 class="section-title teal-accent">Key Insights</h2>
          <p>
            The interactive visualization reveals significant patterns in tornado distribution across the United States, 
            highlighting the concentration of severe weather events in specific geographic corridors and seasonal variations 
            in tornado activity over the decades.
          </p>

          <div class="insights-card neo-card">
            <h3 class="teal-text">Workshop Outcome</h3>
            <p>
              This Lab Week project provided hands-on experience with large-scale geospatial data visualization, 
              D3.js implementation, and interactive data storytelling techniques for communicating complex 
              meteorological patterns to diverse audiences.
            </p>
          </div>
        </div>
      </div>

      <div class="project-navigation">
        <NuxtLink to="/" class="neo-button outline">Back to Home</NuxtLink>
        <NuxtLink to="/projects" class="neo-button">View All Projects</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// No additional logic needed for this project page
</script>

<style scoped>
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

.data-features {
  padding: 1.5rem;
  border-radius: 1rem;
  margin: 2rem 0;
  box-shadow:
    8px 8px 16px var(--neo-shadow-dark),
    -8px -8px 16px var(--neo-shadow-light);
}

.data-features h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.feature-list {
  margin: 0;
  padding-left: 1.5rem;
}

.feature-list li {
  margin-bottom: 0.5rem;
  color: #555;
}

.visualization-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow:
    8px 8px 16px var(--neo-shadow-dark),
    -8px -8px 16px var(--neo-shadow-light);
}

.feature-card h4 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.feature-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

.insights-card {
  padding: 1.5rem;
  border-radius: 1rem;
  margin: 2rem 0;
  box-shadow:
    8px 8px 16px var(--neo-shadow-dark),
    -8px -8px 16px var(--neo-shadow-light);
}

.insights-card h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.insights-card p {
  margin: 0;
  color: #555;
  line-height: 1.7;
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
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .visualization-features {
    grid-template-columns: 1fr;
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
}
</style>