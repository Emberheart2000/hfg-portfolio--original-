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
                <img src="/images/profilepicture.png" alt="Jannik Fauser" class="profile-picture">
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
                    description="Do you often lose track of your open apps while working on your laptop? Focal brings order to your digital workspace by allowing applications to be spatially arranged – directly on the walls around you." />

                <ProjectCard title="NERVOUS SYSTEM" subtitle="INTERACTIVE COMMUNICATION"
                    image="/images/ics/ics_cover2.png" url="/subjects/ics"
                    description="An interactive exhibition piece that explores the connection between technology and human nervous systems." />

                <ProjectCard title="GARDENHELPER" subtitle="INTERFACE DESIGN"
                    image="/images/interface/interface_cover.png" url="/subjects/interface"
                    description="Exploring new ways of communication through innovative design concepts and strategies." />

                <ProjectCard title="TORNADO OCCURRENCES" subtitle="DATA VISUALIZATION"
                    image="/images/dataset/datavis_cover.png" url="/subjects/datavset"
                    description="Data visualisation of Tornado Occurencies in the United States from 1950 until 2020." />
                
                <ProjectCard title="ANIMAL JOURNEY" subtitle="PROGRAMMING"
                    image="/images/programming/programming_cover.png" url="/subjects/programming"
                    description="Interactive website that lets users explore their favourite animals in their natural habitat." />
            </div>
        </section>

        <!-- CV Section -->
        <section id="cv" class="cv-section maxwidth">
            <div class="section-header">
                <div class="neo-separator"></div>
                <h5 class="subtitle-text teal-text">CURRICULUM VITAE</h5>
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
                                    <img src="/icons/icons/user_experience.png" alt="UX/UI" class="skill-icon">
                                    <span>UX/UI Design</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/icons/wireframes.png" alt="wireframing" class="skill-icon">
                                    <span>Wireframing</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/icons/prototyping.png" alt="prototyping" class="skill-icon">
                                    <span>Prototyping</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/icons/user_research.png" alt="user research" class="skill-icon">
                                    <span>User Research</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/icons/visual_design.png" als="visual design" class="skill-icon">
                                    <span>Visual Design</span>
                                </div>
                            </div>
                        </div>

                        <!-- Design Tools -->
                        <div class="skills-category">
                            <h4 class="skills-category-title">Design Tools</h4>
                            <div class="skills-list">
                                <div class="skill-item">
                                    <img src="/icons/figma_logo.svg" alt="Figma" class="brand-logo">
                                    <span>Figma</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/adobe_xd_logo.svg" alt="Adobe XD" class="brand-logo">
                                    <span>Adobe XD</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/photoshop_logo.svg" alt="Photoshop" class="brand-logo">
                                    <span>Photoshop</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/illustrator_logo.svg" alt="Illustrator" class="brand-logo">
                                    <span>Illustrator</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/after_effects_logo.svg" alt="After Effects" class="brand-logo">
                                    <span>After Effects</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/protopie_logo.svg" alt="Protopie" class="brand-logo">
                                    <span>Protopie</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/miro_logo.svg" alt="Miro" class="brand-logo">
                                    <span>Miro</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/slack_logo.svg" alt="Slack" class="brand-logo">
                                    <span>Slack</span>
                                </div>
                            </div>
                        </div>

                        <!-- Development -->
                        <div class="skills-category">
                            <h4 class="skills-category-title">Development</h4>
                            <div class="skills-list">
                                <div class="skill-item">
                                    <img src="/icons/html_logo.svg" alt="HTML/CSS" class="brand-logo">
                                    <span>HTML/CSS</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/javascript_logo.svg" alt="JavaScript" class="brand-logo">
                                    <span>JavaScript</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/three.js_logo.svg" alt="Three.js" class="brand-logo">
                                    <span>Three.js</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/framework_logo.svg" alt="Vue.js" class="brand-logo">
                                    <span>Vue.js</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/nuxt_logo.svg" alt="Nuxt.js" class="brand-logo">
                                    <span>Nuxt.js</span>
                                </div>
                                <div class="skill-item">
                                    <img src="/icons/arduino_logo.svg" alt="Arduino" class="brand-logo">
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
                        Download my CV
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
    object-fit: contain;
}

.skill-item:hover .brand-logo {
    transform: scale(1.1);
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

    .profile-picture {
        display: none;
    }
}
</style>