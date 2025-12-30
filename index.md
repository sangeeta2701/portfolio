---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Sangeeta Gupta"
  # text: "Senior Flutter Developer | Mobile App Engineer"
  text: "Software Engineer"

  tagline: "Specialized in Flutter, Firebase, React Native, and building scalable mobile applications with leadership in engineering teams."
  image:
    src: /profile.png
    alt: "Sangeeta Gupta"
  actions:
    - theme: brand
      text: View Experience
      link: /experience
    - theme: alt
      text: Explore Projects
      link: /projects
    # - theme: dark
    #   text: Download Resume
    #   link: /resume.pdf
    #   target: _blank
---

# Skills Overview {style=" font-size:28px; margin-top:40px;"}

<div class="skill-category">
  <h4>Programming Languages</h4>
  <div class="skills-container">
    <span class="skill-pill">Dart</span>
    <span class="skill-pill">Python</span>
    <span class="skill-pill">JavaScript</span>
  </div>
</div>

<div class="skill-category">
  <h4>Mobile Development</h4>
  <div class="skills-container">
    <span class="skill-pill">Flutter</span>
    <span class="skill-pill">React Native</span>
    <span class="skill-pill">Android Development</span>
    <span class="skill-pill">Responsive UI/UX</span>
    <span class="skill-pill">App Publishing (Play Store)</span>
  </div>
</div>

<div class="skill-category">
  <h4>Core Engineering & Architecture</h4>
  <div class="skills-container">
    <span class="skill-pill">State Management (Provider, GetX)</span>
    <span class="skill-pill">REST API Integration</span>
    <span class="skill-pill">Reusable Components & Modules</span>
    <span class="skill-pill">Error Handling & Debugging</span>
    <span class="skill-pill">Performance Optimization</span>
  </div>
</div>

<div class="skill-category">
  <h4>Backend & Infrastructure</h4>
  <div class="skills-container">
    <span class="skill-pill">Firebase (Auth, DB, Storage, Notification)</span>
    <span class="skill-pill">Integration with External SDKs</span>
    <span class="skill-pill">Third-party API Integrations</span>
    <span class="skill-pill">Data Pipelines</span>
  </div>
</div>

<div class="skill-category">
  <h4>Project Delivery & Team Leadership</h4>
  <div class="skills-container">
    <span class="skill-pill">Team Management & Mentoring</span>
    <span class="skill-pill">Leadership & Cross-team Collaboration</span>
    <span class="skill-pill">Agile Development</span>
    <span class="skill-pill">Project Documentation (FRD/BRD)</span>
    <span class="skill-pill">Manual Testing & Validation</span>
  </div>
</div>

<div class="skill-category">
  <h4>Tools & Platforms</h4>
  <div class="skills-container">
    <span class="skill-pill">Git & Collaboration</span>
    <span class="skill-pill">Figma</span>
    <span class="skill-pill">Android Studio</span>
    <span class="skill-pill">VS Code</span>
    <span class="skill-pill">WordPress</span>
    <span class="skill-pill">Jira</span>
  </div>
</div>

## Testimonials & Feedback

<div class="testimonial-wrapper">

  <div class="testimonial-card">
    <p>⭐️⭐️⭐️⭐️⭐️</p>
    <p>Received direct client appreciation for successfully integrating the BLE SDK into the mobile application and accurately fetching device data in real time. Additionally, delivered a fully functional dynamic admin web application that enables seamless user report monitoring. The project was acknowledged for its reliability, data accuracy, and smooth end-to-end execution</p>
    <h4>- Client(Ashok Shah), myBioMtrx Project</h4>
  </div>

  <div class="testimonial-card">
    <p>⭐️⭐️⭐️⭐️⭐️</p>
    <p>Earned client recognition for completing the application ahead of the agreed timeline, along with implementing all requested enhancements and improvements. The client expressed high satisfaction with the delivery quality, responsiveness to change requests, and ability to exceed expectations.</p>
    <h4>- Client(Joon Kim), Kio Yamato Project</h4>
  </div>

  <div class="testimonial-card">
    <p>⭐️⭐️⭐️⭐️⭐️</p>
    <p>Appreciated by the company CEO for independently leading and delivering the entire web application, from development to hosting, before the project deadline. Recognized for achieving a polished and intuitive UI/UX, smooth functionality, and consistency in meeting all business and user requirements without escalation.</p>
    <h4>- CEO(Jasper David), MomFirst Project</h4>
  </div>

</div>

## Interested in Working Together?

If you are looking for a dedicated **Software Engineer** experienced in building scalable mobile applications with **Flutter**, **React Native**, and **Firebase**, I would be glad to connect.  
I am open to opportunities in **mobile development**, **product engineering**, and **tech leadership** roles.

📩 **Email:** <sangeeta.gupta.dev@gmail.com>  
🔗 **LinkedIn:** https://www.linkedin.com/in/sangeeta-gupta-074123214/  
💼 **GitHub:** https://github.com/sangeeta2701

<div style="margin-top:20px;">
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sangeeta.gupta.dev@gmail.com"
  target="_blank"
     style="
       background:#4F46E5;
       color:white;
       padding:10px 20px;
       border-radius:8px;
       text-decoration:none;
       font-weight:600;
       font-size:15px;
     ">
      Contact for Opportunities
  </a>
</div>

---

<style>
.skill-category {
  margin-bottom: 32px;
}
.skill-category h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  border-left: 4px solid var(--vp-c-brand);
  padding-left: 12px;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
  padding: 8px 0 18px;
}
.skill-pill {
  background: var(--vp-c-bg-soft);
  padding: 10px 16px;
  border-radius: 22px;
  font-size: 14px;
  border: 1px solid var(--vp-c-border);
  white-space: nowrap;
  transition: 0.2s ease;
}
.skill-pill:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}
.dark .skill-pill {
  background: #1e1e1e;
  border-color: #444;
}
.testimonial-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.testimonial-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform .2s ease, box-shadow .2s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}

.testimonial-card p {
  margin: 8px 0;
  font-size: 15px;
  line-height: 1.5;
}
.testimonial-card h4 {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-brand);
}
</style>
