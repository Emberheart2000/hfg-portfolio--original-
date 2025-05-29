<template>
    <div class="wrapper">
        <section id="home" class="hero-section maxwidth">
            <div class="hero-content">
                <h5 class="subtitle-text teal-text">HELLO THERE! MY NAME IS</h5>
                <h1 class="neo-title">Jannik Fauser</h1>
                <p class="hero-description">I'm a passionate interaction design student who likes to design and test
                    ideas. I really like to explore new problems and test if my solution could fit the problem. I'm
                    really into smart home and plants, but I haven't found a good way to connect them together yet.</p>
                <div class="hero-buttons">

                    <NuxtLink to="/projects" class="neo-button">View Projects</NuxtLink>
                    <NuxtLink to="/contact" class="neo-button outline">Get in Touch</NuxtLink>
                </div>
            </div>
            <div class="hero-image neo-card">
                <img src="/images/profilepicture.png" alt="Jannik Fauser">
            </div>
        </section>
        <section id="projects" class="projects-section maxwidth">
            <div class="section-header">
                <div class="neo-separator"></div>
                <h5 class="subtitle-text teal-text">RECENT PROJECTS</h5>
            </div>

            <div class="projects-grid">
                <ProjectCard title="FOCAL" subtitle="INVENTION DESIGN" image="/images/invention/invention_cover.png"
                    url="/subjects/invention"
                    description="Verlierst du beim Arbeiten am Laptop oft den Überblick über deine geöffneten Apps? Focal bringt Ordnung in dein digitales Arbeitsumfeld, indem Anwendungen räumlich anordnet werden können – direkt an den Wänden um dich herum." />

                <ProjectCard title="NERVOUS SYSTEM" subtitle="INTERACTIVE COMMUNICATION"
                    image="/images/ics/ics_cover2.png" url="/subjects/iks"
                    description="An interactive exhibition piece that explores the connection between technology and human nervous systems." />

                <ProjectCard title="GARDENHELPER" subtitle="INTERFACE DESIGN"
                    image="/images/interface/interface_cover.png" url="/subjects/interface"
                    description="Exploring new ways of communication through innovative design concepts and strategies." />

                <ProjectCard title="PROGRAMMING" subtitle="ANIMAL JOURNEY"
                    image="/images/programming/programming_cover.png" url="/subjects/invention"
                    description="What if people could explore their favourite animals on an interactive Website?" />

                <ProjectCard title="DATA VISUALIZATION" subtitle="TORNADO OCCURRENCE"
                    image="/images/dataset/datavis_cover.png" url="/subjects/datavset"
                    description="What if people would know where tornados occur before they do?" />
            </div>
        </section>

        <!-- CV Section -->
        <section id="cv" class="cv-section maxwidth">
            <div class="section-header">
                <div class="neo-separator"></div>
                <h5 class="subtitle-text teal-text">MY EXPERIENCE</h5>
                <h2 class="section-title">Curriculum Vitae</h2>
            </div>

            <div class="cv-container">
                <!-- Education Section -->
                <div class="cv-category neo-container">
                    <div class="cv-category-header">
                        <div class="cv-icon">🎓</div>
                        <h3 class="cv-category-title teal-accent">Education</h3>
                    </div>

                    <div class="cv-items">
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2023 - Present</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Bachelor of Arts, Interaction Design</h4>
                                <p class="cv-location">HfG – University of Design, Schwäbisch Gmünd</p>
                                <p class="cv-description">Focused on creating intuitive user experiences and innovative
                                    interactive systems. Developed skills in UX/UI design, prototyping, and user
                                    research
                                    methods. Also really interested in design management and speculative design
                                    approaches.</p>
                            </div>
                        </div>

                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2020 - 2023</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">State-certified Graphic Designer</h4>
                                <p class="cv-location">Vocational college Kolping, Schwäbisch Gmünd</p>
                                <p class="cv-description">Focused on layout and print, corporate design and
                                    illustration.
                                    Graduated with honors.</p>
                            </div>
                        </div>
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2019-2020</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Bachelor of Engineering, Industrial Engineering and Management
                                    (incomplete)
                                </h4>
                                <p class="cv-location">University of Applied Sciences, Aalen</p>
                                <p class="cv-description">Focused on manufacturing products and how to manage an own
                                    buisness.
                                </p>
                            </div>
                        </div>
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2010 - 2018</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Abitur</h4>
                                <p class="cv-location">Franziskus Gymnasium, Mutlangen</p>
                                <p class="cv-description">Focused on science and technology, also interested in
                                    economics.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Work Experience Section -->
                <div class="cv-category neo-container">
                    <div class="cv-category-header">
                        <div class="cv-icon">💼</div>
                        <h3 class="cv-category-title teal-accent">Work Experience</h3>
                    </div>

                    <div class="cv-items">
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2023</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Corporate Design and Marketing</h4>
                                <p class="cv-location">Fechner Sauna</p>
                                <p class="cv-description">Designed custom sauna concepts and represented the company at
                                    trade
                                    fairs.</p>
                            </div>
                        </div>

                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2022 - 2023</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Design Internship </h4>
                                <p class="cv-location"> dickekreativ </p>
                                <p class="cv-description">Package design for clients, operating on a large format
                                    plotter,
                                    developing websites with the UI department.</p>
                            </div>
                        </div>

                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2019</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Product testing</h4>
                                <p class="cv-location">ZF TRW Alfdorf</p>
                                <p class="cv-description">Evaluating Long-term, load, and safety tests for seat belts to
                                    check
                                    their durability under prolonged use, measure their strength under high forces, and
                                    verify
                                    their reliable performance in crash scenarios to ensure compliance with
                                    international safety
                                    standards</p>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Skills Section -->
                <div class="cv-category neo-container">
                    <div class="cv-category-header">
                        <div class="cv-icon">🛠️</div>
                        <h3 class="cv-category-title teal-accent">Skills & Tools</h3>
                    </div>

                    <div class="skills-grid">
                        <!-- Design Skills -->
                        <div class="skills-category">
                            <h4 class="skills-category-title">Design Skills</h4>
                            <div class="skills-list">
                                <div class="skill-item">
                                    <span class="skill-icon">🎨</span>
                                    <span>UI/UX Design</span>
                                </div>
                                <div class="skill-item">
                                    <span class="skill-icon">⚡</span>
                                    <span>Interaction Design</span>
                                </div>
                                <div class="skill-item">
                                    <span class="skill-icon">📐</span>
                                    <span>Wireframing</span>
                                </div>
                                <div class="skill-item">
                                    <span class="skill-icon">🔧</span>
                                    <span>Prototyping</span>
                                </div>
                                <div class="skill-item">
                                    <span class="skill-icon">🔍</span>
                                    <span>User Research</span>
                                </div>
                                <div class="skill-item">
                                    <span class="skill-icon">👁️</span>
                                    <span>Visual Design</span>
                                </div>
                            </div>
                        </div>

                        <!-- Design Tools -->
                        <div class="skills-category">
                            <h4 class="skills-category-title">Design Tools</h4>
                            <div class="skills-list">
                                <div class="skill-item">
                                    <svg class="brand-logo figma-logo" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
                                            fill="#f24e1e" />
                                        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#ff7262" />
                                        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" fill="#1abcfe" />
                                        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
                                            fill="#0acf83" />
                                        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
                                            fill="#a259ff" />
                                    </svg>
                                    <span>Figma</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo adobe-logo" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M13.966 22.624c0 .374-.303.676-.677.676H2.711c-.374 0-.677-.302-.677-.676V1.353c0-.374.303-.676.677-.676H13.29c.374 0 .677.302.677.676v21.271z"
                                            fill="#470137" />
                                        <path
                                            d="M21.29.677H10.71c-.374 0-.677.302-.677.676v21.271c0 .374.303.676.677.676H21.29c.374 0 .677-.302.677-.676V1.353c0-.374-.303-.676-.677-.676z"
                                            fill="#FF61F6" />
                                        <path
                                            d="M7.234 18.546v-6.971h2.383l3.736 6.971h2.765l-4.107-7.549 3.736-6.4h-2.765l-3.365 5.851H7.234V4.477H4.851v14.069h2.383z"
                                            fill="#FFF" />
                                    </svg>
                                    <span>Adobe XD</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo adobe-logo" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M9.85 18.86h4.15l.93 2.49h2.53L13.9 9.21h-2.4L7.94 21.35h2.45l.46-2.49zm2.23-7.84l1.17 3.67h-2.34l1.17-3.67z"
                                            fill="#00005B" />
                                        <path
                                            d="M19.75.3H4.25C2.15.3.45 2 .45 4.1v15.8c0 2.1 1.7 3.8 3.8 3.8h15.5c2.1 0 3.8-1.7 3.8-3.8V4.1c0-2.1-1.7-3.8-3.8-3.8z"
                                            fill="#001e36" />
                                    </svg>
                                    <span>Photoshop</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo adobe-logo" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M10.53 10.73l2.44-6.85h.06l2.32 6.85h-4.82zm8.72 7.64L15.46 8.82c-.45-1.29-1.13-1.98-2.07-1.98s-1.62.69-2.07 1.98L7.53 18.37c-.45 1.29.11 1.98 1.24 1.98.68 0 1.24-.34 1.58-1.02l1.02-2.93h6.28l1.02 2.93c.34.68.9 1.02 1.58 1.02 1.13 0 1.69-.69 1.24-1.98z"
                                            fill="#FF9A00" />
                                        <path
                                            d="M19.75.3H4.25C2.15.3.45 2 .45 4.1v15.8c0 2.1 1.7 3.8 3.8 3.8h15.5c2.1 0 3.8-1.7 3.8-3.8V4.1c0-2.1-1.7-3.8-3.8-3.8z"
                                            fill="#330000" />
                                    </svg>
                                    <span>Illustrator</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo adobe-logo" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M4.25.3C2.15.3.45 2 .45 4.1v15.8c0 2.1 1.7 3.8 3.8 3.8h15.5c2.1 0 3.8-1.7 3.8-3.8V4.1c0-2.1-1.7-3.8-3.8-3.8H4.25z"
                                            fill="#00005B" />
                                        <path
                                            d="M17.17 8.4l-4.42 4.31 4.42 4.31c.39.38.39 1 0 1.38-.38.39-1 .39-1.38 0l-4.42-4.31-4.42 4.31c-.38.39-1 .39-1.38 0-.39-.38-.39-1 0-1.38l4.42-4.31L5.57 8.4c-.39-.38-.39-1 0-1.38.38-.39 1-.39 1.38 0l4.42 4.31L15.79 7.02c.38-.39 1-.39 1.38 0 .39.38.39 1 0 1.38z"
                                            fill="#99FF" />
                                    </svg>
                                    <span>After Effects</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo protopie-logo" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#7B68EE" />
                                        <path d="M8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" fill="white" />
                                    </svg>
                                    <span>Protopie</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo miro-logo" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" fill="#FFD02F" />
                                        <path d="M7 10h2v4H7v-4zm4-2h2v8h-2V8zm4 1h2v6h-2V9z" fill="#050038" />
                                    </svg>
                                    <span>Miro</span>
                                </div>
                            </div>
                        </div>

                        <!-- Development -->
                        <div class="skills-category">
                            <h4 class="skills-category-title">Development</h4>
                            <div class="skills-list">
                                <div class="skill-item">
                                    <svg class="brand-logo html-logo" viewBox="0 0 24 24" fill="none">
                                        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#E34F26" />
                                        <path d="M12 22.131V2.07h8.09L18.95 20.13 12 22.131z" fill="#EF652A" />
                                        <path d="M12 11.739H7.828l-.364-4.08H12V4.182H3.953l.954 10.738H12v-3.181z"
                                            fill="#EBEBEB" />
                                        <path
                                            d="M12 19.739v-3.181h-.01l-3.937-1.063-.252-2.824h3.181v-3.181H5.765l.738 8.246L12 19.739z"
                                            fill="#EBEBEB" />
                                        <path
                                            d="M11.991 11.739v3.181h3.645l-.345 3.844-3.3.891v3.181l6.063-1.681.045-.632.694-7.784H11.991z"
                                            fill="#FFF" />
                                        <path d="M11.991 4.182v3.477h7.32l.061-.68.138-1.539.072-.81H11.991z"
                                            fill="#FFF" />
                                    </svg>
                                    <span>HTML/CSS</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo js-logo" viewBox="0 0 24 24" fill="none">
                                        <path d="M0 0h24v24H0V0z" fill="#F7DF1E" />
                                        <path
                                            d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.016.047zm-9.24-.24c.12 2.131-1.36 2.784-2.775 2.784-1.28 0-2.8-.7-2.8-3.3V9.814h-2.31v7.736c0 4.5 2.553 5.45 4.051 5.45 3.6 0 5.23-1.832 5.23-6.968V9.814h-2.31v8.2z"
                                            fill="#323330" />
                                    </svg>
                                    <span>JavaScript</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo vue-logo" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
                                            fill="#4FC08D" />
                                        <path d="M0,1.61l12,20.78L24,1.61H18.18L12,14.08,5.82,1.61Z" fill="#35495E" />
                                    </svg>
                                    <span>Vue.js</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo nuxt-logo" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M6.906 5.03L10.844 12L6.906 18.97H1.031L5.969 12L1.031 5.03h5.875zm10.188 0L21.031 12l-3.937 6.97h-3.938L17.094 12l-3.938-6.97h3.938z"
                                            fill="#00DC82" />
                                        <path d="M10.844 5.03h6.25L21.031 12l-3.937 6.97h-6.25L14.781 12l-3.937-6.97z"
                                            fill="#108775" />
                                    </svg>
                                    <span>Nuxt.js</span>
                                </div>
                                <div class="skill-item">
                                    <svg class="brand-logo arduino-logo" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M23.82 12c0 6.627-5.373 12-12 12S-.177 18.627-.177 12 5.196 0 11.823 0c6.624 0 11.997 5.373 11.997 12z"
                                            fill="#00979D" />
                                        <path
                                            d="M6.677 10.5h1.646v1h-1.646v1.646h-1V11.5h-1.646v-1h1.646V8.854h1V10.5zm9.646-1.646h3.293v1h-3.293v3.292h-1v-3.292h-3.292v-1h3.292V5.562h1v3.292z"
                                            fill="#FFF" />
                                    </svg>
                                    <span>Arduino</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Download CV Button -->
                <div class="cv-download">
                    <a href="/files/Jannik_Fauser_CV.pdf" download class="neo-button">
                        <span class="download-icon">📄</span>
                        Download Full CV
                    </a>
                </div>
            </div>
        </section>

    </div>
</template>

<!-- <script setup lang="ts">
import { onMounted } from 'vue';

// Scroll behavior helper for smooth anchor navigation
onMounted(() => {
  // Handle anchor links with smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = (this as HTMLAnchorElement).getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
</script> -->

<style>
/* Teal text styling */
.teal-text {
    color: var(--neo-accent-color) !important;
}

.teal-accent {
    color: var(--neo-accent-color);
    font-weight: 600;
}

/* Hero Section */
.hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rem;
    padding: 2rem 0;
    scroll-margin-top: 6rem;
    /* For anchor navigation */
}

.hero-content {
    width: 50%;
    padding-right: 4rem;
}

.subtitle-text {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
}

.neo-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
    color: var(--neo-text-color);
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    letter-spacing: 0.05em;
    color: var(--neo-text-color);
}

.hero-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 2rem;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.neo-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--neo-text-color);
    background-color: var(--neo-bg-color);
    border-radius: 0.8rem;
    text-decoration: none;
    box-shadow:
        8px 8px 16px var(--neo-shadow-dark),
        -8px -8px 16px var(--neo-shadow-light);
    transition: all 0.3s ease;
}

.neo-button:hover {
    transform: translateY(-3px);
    box-shadow:
        10px 10px 20px var(--neo-shadow-dark),
        -10px -10px 20px var(--neo-shadow-light);
}

.neo-button:active {
    transform: translateY(0);
    box-shadow:
        inset 5px 5px 10px var(--neo-shadow-dark),
        inset -5px -5px 10px var(--neo-shadow-light);
}

.neo-button.outline {
    background-color: transparent;
    box-shadow: none;
    position: relative;
    border: 2px solid var(--neo-shadow-dark);
}

.neo-button.outline:hover {
    background-color: var(--neo-bg-color);
    box-shadow:
        5px 5px 10px var(--neo-shadow-dark),
        -5px -5px 10px var(--neo-shadow-light);
}

.hero-image {
    width: 45%;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow:
        15px 15px 30px var(--neo-shadow-dark),
        -15px -15px 30px var(--neo-shadow-light);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* CV Section */
.cv-section {
    padding: 6rem 0;
    scroll-margin-top: 6rem;
    /* For anchor navigation */
}

.section-header {
    margin-bottom: 4rem;
    text-align: center;
}

.cv-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.cv-category {
    padding: 2.5rem;
    border-radius: 1.5rem;
}

.cv-category-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.cv-icon {
    font-size: 2rem;
    margin-right: 1rem;
    background-color: var(--neo-bg-color);
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow:
        8px 8px 16px var(--neo-shadow-dark),
        -8px -8px 16px var(--neo-shadow-light);
}

.cv-category-title {
    font-size: 1.8rem;
    font-weight: 700;
}

.cv-items {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.cv-item {
    display: flex;
    gap: 2rem;
}

.cv-timeline {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;
}

.cv-year {
    font-weight: 600;
    color: var(--neo-accent-color);
    background-color: var(--neo-bg-color);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    box-shadow:
        5px 5px 10px var(--neo-shadow-dark),
        -5px -5px 10px var(--neo-shadow-light);
    margin-bottom: 1rem;
    text-align: center;
}

.cv-timeline-line {
    width: 2px;
    flex-grow: 1;
    background-color: var(--neo-shadow-dark);
    position: relative;
}

.cv-timeline-line::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0.8rem;
    height: 0.8rem;
    background-color: var(--neo-accent-color);
    border-radius: 50%;
    box-shadow:
        2px 2px 4px var(--neo-shadow-dark),
        -2px -2px 4px var(--neo-shadow-light);
}

.cv-content {
    flex-grow: 1;
}

.cv-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.cv-location {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1rem;
    font-style: italic;
}

.cv-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
}

/* Skills section */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.skills-category {
    background-color: var(--neo-bg-color);
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow:
        inset 5px 5px 10px var(--neo-shadow-dark),
        inset -5px -5px 10px var(--neo-shadow-light);
}

.skills-category-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    color: var(--neo-accent-color);
    text-align: center;
}

.skills-list {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.6rem 0.8rem;
    background-color: var(--neo-bg-color);
    border-radius: 0.5rem;
    box-shadow:
        3px 3px 6px var(--neo-shadow-dark),
        -3px -3px 6px var(--neo-shadow-light);
    transition: all 0.3s ease;
    font-size: 0.9rem;
    font-weight: 500;
}

.skill-item:hover {
    transform: translateY(-2px);
    box-shadow:
        5px 5px 10px var(--neo-shadow-dark),
        -5px -5px 10px var(--neo-shadow-light);
}

.skill-icon {
    font-size: 1.1rem;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.brand-logo {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.skill-item:hover .brand-logo {
    transform: scale(1.1);
}

/* Brand specific colors */
.figma-logo:hover {
    filter: brightness(1.1);
}

.adobe-logo:hover {
    filter: brightness(1.1);
}

.protopie-logo:hover {
    filter: brightness(1.1);
}

.miro-logo:hover {
    filter: brightness(1.1);
}

.html-logo:hover {
    filter: brightness(1.1);
}

.js-logo:hover {
    filter: brightness(1.1);
}

.vue-logo:hover {
    filter: brightness(1.1);
}

.nuxt-logo:hover {
    filter: brightness(1.1);
}

.arduino-logo:hover {
    filter: brightness(1.1);
}

/* CV Download Button */
.cv-download {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
}

.cv-download .neo-button {
    display: flex;
    align-items: center;
    padding: 0.8rem 2rem;
}

.download-icon {
    font-size: 1.2rem;
    margin-right: 0.8rem;
}

/* Projects Section */
.projects-section {
    padding: 4rem 0;
    scroll-margin-top: 6rem;
    /* For anchor navigation */
}

.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

/* Media Queries */
@media (max-width: 1024px) {
    .hero-section {
        flex-direction: column;
    }

    .hero-content,
    .hero-image {
        width: 100%;
    }

    .hero-content {
        padding-right: 0;
        margin-bottom: 3rem;
    }

    .cv-item {
        flex-direction: column;
        gap: 1rem;
    }

    .cv-timeline {
        flex-direction: row;
        justify-content: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .cv-timeline-line {
        display: none;
    }

    .cv-year {
        margin-bottom: 0;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 1.8rem;
    }

    .cv-category {
        padding: 2rem 1.5rem;
    }

    .skills-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .skills-category {
        padding: 1.2rem;
    }

    .skill-item {
        padding: 0.5rem 0.7rem;
        font-size: 0.85rem;
    }

    .brand-logo,
    .skill-icon {
        width: 18px;
        height: 18px;
        font-size: 1rem;
    }
}

@media (max-width: 480px) {
    .hero-buttons {
        flex-direction: column;
        gap: 1rem;
    }

    .hero-buttons .neo-button {
        width: 100%;
        text-align: center;
    }

    .cv-year {
        font-size: 0.9rem;
        padding: 0.4rem 0.8rem;
    }

    .cv-title {
        font-size: 1.1rem;
    }

    .skills-grid {
        gap: 1rem;
    }

    .skills-category {
        padding: 1rem;
    }

    .skill-item {
        padding: 0.4rem 0.6rem;
        font-size: 0.8rem;
    }

    .brand-logo,
    .skill-icon {
        width: 16px;
        height: 16px;
        font-size: 0.9rem;
    }


    .skill-pill {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }

    .skill-icon,
    .skill-icon-svg {
        width: 0.9rem;
        height: 0.9rem;
        font-size: 0.9rem;
    }
}
</style>