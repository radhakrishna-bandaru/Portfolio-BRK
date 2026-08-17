import { useEffect, useState } from "react";
import "./App.css";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [selectedResume, setSelectedResume] = useState(null);
  const [resumeNumPages, setResumeNumPages] = useState(null);
  useEffect(() => {
  const alreadyShown = sessionStorage.getItem("brkSplashShown");

  if (alreadyShown) {
    setShowSplash(false);
    return;
  }

  setShowSplash(true);

  const timer = setTimeout(() => {
    sessionStorage.setItem("brkSplashShown", "true");
    setShowSplash(false);
  }, 2500);

  return () => clearTimeout(timer);
}, []);
  useEffect(() => {
  const elements = document.querySelectorAll(
    ".section-label, .about-main, .detail-card, .timeline-item, " +
    ".project-card, .skill-group, .experience-main, " +
    ".certificate-item, .achievement, .contact-inner"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  elements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

  return () => observer.disconnect();
}, []);
const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const progress =
      documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
const [showTopButton, setShowTopButton] = useState(false);

useEffect(() => {
  const handleTopButton = () => {
    setShowTopButton(window.scrollY > 500);
  };

  window.addEventListener("scroll", handleTopButton);

  handleTopButton();

  return () => {
    window.removeEventListener("scroll", handleTopButton);
  };
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <>
    <div
  className="scroll-progress"
  style={{ width: `${scrollProgress}%` }}
></div>

      {showSplash && (
        <div className="splash-screen">
          <div className="splash-content">

            <div className="brk-logo">
              BRK
            </div>

            <div className="loading-track">
              <div className="loading-progress"></div>
            </div>

            <p>LOADING PORTFOLIO</p>

          </div>
        </div>
      )}
      {showTopButton && (
  <button
    className="back-to-top"
    onClick={scrollToTop}
    aria-label="Back to top"
  >
    ↑
  </button>
)}


    
     <div className="portfolio">

       

      <header className="navbar">

  <a
    href="#home"
    className="logo"
    onClick={() => setMenuOpen(false)}
  >
    BRK<span>.</span>
  </a>

  <nav className={menuOpen ? "mobile-open" : ""}>

    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#education" onClick={() => setMenuOpen(false)}>
      Education
    </a>

    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#skills" onClick={() => setMenuOpen(false)}>
      Skills
    </a>

    <a href="#experience" onClick={() => setMenuOpen(false)}>
      Experience
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

  </nav>


 <button
  type="button"
  className="resume-button"
  onClick={() =>
    setSelectedResume("/radhakrishnabandaru-resume.pdf")
  }
>
  Resume
</button>


  <button
    className={`menu-button ${menuOpen ? "open" : ""}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

</header>



        <section id="home" className="hero">

          <div className="hero-text">

            <p className="eyebrow">
              COMPUTER SCIENCE • AI & ML
            </p>

            <h1>
              Bandaru
              <br />
              <span>Radha Krishna</span>
            </h1>

            <p className="hero-description">
              Motivated Computer Science and Engineering student
              specializing in Artificial Intelligence and Machine
              Learning, with a strong foundation in Java, Python
              and object-oriented programming.
            </p>

            <div className="hero-actions">

              <a href="#projects" className="primary-button">
                Explore Projects
              </a>

              <a href="#contact" className="outline-button">
                Contact Me
              </a>

            </div>
            <div className="hero-socials">

  <a
    href="https://github.com/radhakrishna-bandaru"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://linkedin.com/in/radhakrishna-bandaru"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>

  <a href="mailto:radhakrishnabandaru8@gmail.com">
    Email ↗
  </a>

</div>
<div className="hero-meta">

  <div>
    <span>Location</span>
    <strong>Rajahmundry, AP</strong>
  </div>

  <div>
    <span>FOCUS</span>
    <strong>AI / ML</strong>
  </div>

  <div>
    <span>DEGREE</span>
    <strong>B.Tech</strong>
  </div>

</div>

          </div>


          <div className="hero-visual">

            <div className="visual-circle">
              <span>BRK</span>
            </div>

            <div className="visual-text">
              <strong>AI / ML</strong>
              <small>SOFTWARE • TECHNOLOGY</small>
            </div>

          </div>

        </section>




        <section id="about" className="section">

          <div className="section-label">
            <span>01</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">

            <div className="about-main">

              <h3>
                Turning ideas into
                <span> practical technology.</span>
              </h3>

              <p>
                {`I'm`} a Computer Science and Engineering student
                specializing in Artificial Intelligence and Machine
                Learning. I have a strong foundation in Java, Python
                and object-oriented programming.
              </p>

              <p>
                I am passionate about developing efficient and
                reliable software solutions while continuously
                learning emerging technologies.
              </p>
              <div className="about-stats">

  <div className="stat-item">
    <strong>7.14</strong>
    <span>CGPA</span>
  </div>

  <div className="stat-item">
    <strong>2027</strong>
    <span>Graduation</span>
  </div>

  <div className="stat-item">
    <strong>02</strong>
    <span>Projects</span>
  </div>

  <div className="stat-item">
    <strong>01</strong>
    <span>Internship</span>
  </div>

</div>

            </div>


            <div className="about-details">

              <div className="detail-card">
                <small>NAME</small>
                <strong>Bandaru Radha Krishna</strong>
              </div>

              <div className="detail-card">
                <small>LOCATION</small>
                <strong>Rajahmundry, Andhra Pradesh</strong>
              </div>

              <div className="detail-card">
                <small>DEGREE</small>
                <strong>B.Tech CSE — AI/ML</strong>
              </div>

              <div className="detail-card">
                <small>CGPA</small>
                <strong>7.14</strong>
              </div>

            </div>

          </div>

        </section>


   
        <section id="education" className="section dark">

          <div className="section-label">
            <span>02</span>
            <h2>Education</h2>
          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                2023 — 2027
              </div>

              <div className="timeline-content">

                <h3>BVC College of Engineering</h3>

                <p>
                  Bachelor of Technology — Computer Science
                  and Engineering (AI/ML)
                </p>

                <strong>CGPA: 7.14</strong>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                2021 — 2023
              </div>

              <div className="timeline-content">

                <h3>Career Point Junior College</h3>

                <p>
                  Andhra Pradesh Board of Intermediate
                  Education (BIEAP)
                </p>

                <p>
                  MPC — Mathematics, Physics, Chemistry
                </p>

                <strong>Percentage: 66%</strong>

              </div>

            </div>


            <div className="timeline-item">

              <div className="timeline-year">
                2020 — 2021
              </div>

              <div className="timeline-content">

                <h3>C.G.T.M.E.M. School</h3>

                <p>
                  Secondary School Certification (X)
                </p>

                <strong>Percentage: 85%</strong>

              </div>

            </div>

          </div>

        </section>


    

        <section id="projects" className="section">

  <div className="section-label">
    <span>03</span>
    <h2>Projects</h2>
  </div>


  <div className="projects-grid">

    

    <article className="project-card featured-project">

      <div className="project-header">

        <span className="project-number">
          01
        </span>

        <span className="project-category">
          MACHINE LEARNING
        </span>

      </div>


      <div className="project-body">

        <h3>
          Credit Card
          <br />
          Approval Prediction
        </h3>

        <p className="project-description">
          A Flask-based web application that uses a
          Machine Learning model to predict credit card
          approval based on customer input.
        </p>


        <div className="project-highlights">

          <div>
            <span>01</span>
            <p>Real-time ML predictions</p>
          </div>

          <div>
            <span>02</span>
            <p>Responsive banking UI</p>
          </div>

          <div>
            <span>03</span>
            <p>Git & GitHub version control</p>
          </div>

        </div>


        <div className="tech-list">

          <span>Python</span>
          <span>Flask</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Scikit-learn</span>
          <span>Pandas</span>
          <span>NumPy</span>
          <span>Joblib</span>

        </div>

      </div>


      <div className="project-footer">

        <a
          href="https://creditcardapprovalprediction.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          View Live Demo
          <span>↗</span>
        </a>

        <a
          href="https://github.com/radhakrishna-bandaru/Credit-card-approval-prediction"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span>↗</span>
        </a>

      </div>

    </article>


   

    <article className="project-card featured-project">

      <div className="project-header">

        <span className="project-number">
          02
        </span>

        <span className="project-category">
          WEB DEVELOPMENT
        </span>

      </div>


      <div className="project-body">

        <h3>
          Online
          <br />
          Examination System
        </h3>

        <p className="project-description">
          A responsive online examination platform built
          with React.js featuring authentication, dynamic
          examinations and client-side validation.
        </p>


        <div className="project-highlights">

          <div>
            <span>01</span>
            <p>Login & Signup authentication</p>
          </div>

          <div>
            <span>02</span>
            <p>Dynamic examination module</p>
          </div>

          <div>
            <span>03</span>
            <p>SPA navigation with React Router</p>
          </div>

        </div>


        <div className="tech-list">

          <span>React.js</span>
          <span>Vite</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>React Router</span>
          <span>React Icons</span>
          <span>LocalStorage</span>

        </div>

      </div>


      <div className="project-footer">

        <a
          href="https://online-examination-system-rk.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          View Live Demo
          <span>↗</span>
        </a>

        <a
          href="https://github.com/radhakrishna-bandaru/Online-examination-system"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <span>↗</span>
        </a>

      </div>

    </article>

  </div>

</section>


  

        <section id="skills" className="section dark">

  <div className="section-label">
    <span>04</span>
    <h2>Skills</h2>
  </div>

  <div className="skills-showcase">

    <div className="skill-category">
      <div className="skill-category-head">
        <span>01</span>
        <h3>Programming</h3>
      </div>

      <div className="skill-tags">
        <span>C</span>
        <span>Python</span>
        <span>Java</span>
      </div>
    </div>


    <div className="skill-category">
      <div className="skill-category-head">
        <span>02</span>
        <h3>Web Development</h3>
      </div>

      <div className="skill-tags">
        <span>HTML5</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React</span>
      </div>
    </div>


    <div className="skill-category">
      <div className="skill-category-head">
        <span>03</span>
        <h3>Database</h3>
      </div>

      <div className="skill-tags">
        <span>MySQL</span>
      </div>
    </div>


    <div className="skill-category">
      <div className="skill-category-head">
        <span>04</span>
        <h3>Tools</h3>
      </div>

      <div className="skill-tags">
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
      </div>
    </div>


    <div className="skill-category">
      <div className="skill-category-head">
        <span>05</span>
        <h3>Soft Skills</h3>
      </div>

      <div className="skill-tags">
        <span>Time Management</span>
        <span>Patience</span>
        <span>Communication</span>
        <span>Logical Thinking</span>
        <span>Team Handling</span>
      </div>
    </div>

  </div>

</section>



       <section id="experience" className="section">

  <div className="section-label">
    <span>05</span>
    <h2>Experience</h2>
  </div>

  <div className="experience-layout">

    <div className="experience-meta">
      <span>05/2025</span>
      <span>—</span>
      <span>07/2025</span>
    </div>

    <div className="experience-main">

      <div className="experience-top">
        <div>
          <p className="experience-role">
            AI INTERN
          </p>

          <h3>
            Artificial Intelligence Medical &
            Engineering Researchers Society
          </h3>
        </div>

        <span className="completed-badge">
          COMPLETED
        </span>
      </div>

      <p className="experience-description">
        Developed AI solutions using Roboflow and
        Hugging Face for computer vision tasks.
        Built and evaluated image classification
        models using annotated datasets.
      </p>

      <div className="experience-points">

        <div>
          <span>01</span>
          <p>
            Dataset annotation, preprocessing and
            management using Roboflow.
          </p>
        </div>

        <div>
          <span>02</span>
          <p>
            Built and evaluated image classification
            models using annotated datasets.
          </p>
        </div>

        <div>
          <span>03</span>
          <p>
            Utilized Hugging Face pre-trained models
            to explore AI and Generative AI applications.
          </p>
        </div>

        <div>
          <span>04</span>
          <p>
            Evaluated model performance and gained
            hands-on experience with end-to-end AI workflows.
          </p>
        </div>

      </div>

      <a
        href="https://demo.roboflow.com/mobile-phone-detection-cfuwz/1?publishable_key=rf_AUp9C7vUGqOZj8r0ZxfGFqwfZx53"
        target="_blank"
        rel="noreferrer"
        className="experience-demo"
      >
        View Roboflow Demo ↗
      </a>

    </div>

  </div>

</section>


     
       <section className="section dark">

  <div className="section-label">
    <span>06</span>
    <h2>Certificates</h2>
  </div>

  <div className="certificate-list">

    <div
  className="certificate-item"
  onClick={() =>
  setSelectedCertificate(
    new URL("/certificates/c-language.pdf", window.location.origin).href
  )
}
>
      <span className="certificate-index">01</span>

      <div>
        <h3>C Language</h3>
        <p>
          Training in Programming with C Language
        </p>
        <small>
          Certification No: 2023/BCI/246
        </small>
      </div>
    </div>

<div
  className="certificate-item"
 onClick={() =>
  setSelectedCertificate(
    new URL("/certificates/html5.pdf", window.location.origin).href
  )
}
>
      <span className="certificate-index">02</span>

      <div>
        <h3>HTML5</h3>
        <p>
          Infosys Course Completion Certificate
        </p>
      </div>
    </div>


    <div
  className="certificate-item"
 onClick={() =>
  setSelectedCertificate(
    new URL("/certificates/entrepreneurship.pdf", window.location.origin).href
  )
}
>
      <span className="certificate-index">03</span>

      <div>
        <h3>Entrepreneurship</h3>
        <p>
          Startup Business Management Programme
          — Andhra Pradesh Innovation Society
        </p>
      </div>
    </div>


    <div
  className="certificate-item"
 onClick={() =>
  setSelectedCertificate(
    new URL("/certificates/servicenow-csa.pdf", window.location.origin).href
  )
}
>
      <span className="certificate-index">04</span>

      <div>
        <h3>ServiceNow Certified System Administrator</h3>
        <p>
          ServiceNow CSA
        </p>
        <small>
          May 2026
        </small>
      </div>
    </div>


    <div
  className="certificate-item"
 onClick={() =>
  setSelectedCertificate(
    new URL("/certificates/servicenow-cad.pdf", window.location.origin).href
  )
}
>
      <span className="certificate-index">05</span>

      <div>
        <h3>ServiceNow Certified Application Developer</h3>
        <p>
          ServiceNow CAD
        </p>
        <small>
          June 2026
        </small>
      </div>
    </div>

<div
  className="certificate-item"
 onClick={() =>
  setSelectedCertificate(
    new URL("/certificates/servicenow-micro.pdf", window.location.origin).href
  )
}
>
  <span className="certificate-index">06</span>

  <div>
    <h3>Welcome to ServiceNow</h3>
    <p>ServiceNow Micro-Certification</p>
    <small>Issued: March 2026</small>
  </div>
</div>

<div
  className="certificate-item"
 onClick={() =>
  setSelectedCertificate(
    new URL(
      "/certificates/nptel-ai-hr-management.pdf",
      window.location.origin
    ).href
  )
}
>
  <span className="certificate-index">07</span>

  <div>
    <h3>AI in Human Resource Management</h3>
    <p>NPTEL Elite Certification</p>
    <small>Jan–Apr 2026</small>
  </div>
</div>

  </div>

</section>
{selectedCertificate && (
  <div
    className="certificate-modal"
    onClick={() => setSelectedCertificate(null)}
  >
    <div
      className="certificate-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="certificate-close"
        onClick={() => setSelectedCertificate(null)}
      >
        ×
      </button>

      <div className="certificate-preview">
  <Document
  file={selectedResume}
  onLoadSuccess={({ numPages }) => setResumeNumPages(numPages)}
  loading={
    <div className="certificate-loading">
      Loading resume...
    </div>
  }
  error={
    <div className="certificate-loading">
      Unable to load resume.
    </div>
  }
>
  {Array.from(
    new Array(resumeNumPages || 0),
    (_, index) => (
      <Page
        key={`resume-page-${index + 1}`}
        pageNumber={index + 1}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        width={700}
      />
    )
  )}
</Document>
</div>

    <div className="certificate-modal-actions">
  <a
    href={selectedCertificate}
    download
    className="certificate-download"
  >
    Download ↓
  </a>
</div>
    </div>
  </div>
)}

{selectedResume && (
  <div
    className="certificate-modal"
    onClick={() => setSelectedResume(null)}
  >
    <div
      className="certificate-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="certificate-close"
        onClick={() => setSelectedResume(null)}
      >
        ×
      </button>

      <div className="resume-preview">
       <Document
  file={selectedResume}
  onLoadSuccess={({ numPages }) => setResumeNumPages(numPages)}
  loading={
    <div className="certificate-loading">
      Loading resume...
    </div>
  }
  error={
    <div className="certificate-loading">
      Unable to load resume.
    </div>
  }
>
  {Array.from(
    { length: resumeNumPages || 0 },
    (_, index) => (
      <Page
        key={`resume-page-${index + 1}`}
        pageNumber={index + 1}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        width={700}
      />
    )
  )}
</Document>
      </div>

      <div className="certificate-modal-actions">
        <a
          href={selectedResume}
          download
          className="certificate-download"
        >
          Download ↓
        </a>
      </div>
    </div>
  </div>
)}
       

       <section className="section">

  <div className="section-label">
    <span>07</span>
    <h2>Achievements</h2>
  </div>

  <div className="achievements">

    <div className="achievement">
      <span>01</span>

      <div>
        <p className="achievement-rank">
          4TH PRIZE
        </p>

        <h3>
          AIGNITE National-Level Gen AI Hackathon 2025
        </h3>

        <p>
          Conducted by V Cube Software Solutions at
          Srinivasa Institute of Engineering & Technology.
        </p>
      </div>
    </div>


    <div className="achievement">
      <span>02</span>

      <div>
        <p className="achievement-rank">
          2ND PLACE
        </p>

        <h3>
          ACT-2K25 Hackathon
        </h3>

        <p>
          Organized by the Department of Computer Science
          & Engineering at BVC College of Engineering.
        </p>
      </div>
    </div>


    <div className="achievement">
      <span>03</span>

      <div>
        <p className="achievement-rank">
          PARTICIPATION
        </p>

        <h3>
          Coding Puzzle — ACT 2K25
        </h3>

        <p>
          Participated in the Coding Puzzle event organized
          by the Department of CSE at BVC College of Engineering.
        </p>
      </div>
    </div>

  </div>

</section>
<section className="section dark">

  <div className="section-label">
    <span>08</span>
    <h2>Languages</h2>
  </div>

  <div className="languages-grid">

    <div className="language-card">
      <span>01</span>

      <div>
        <h3>Telugu</h3>
        <p>Native</p>
      </div>
    </div>

    <div className="language-card">
      <span>02</span>

      <div>
        <h3>English</h3>
        <p>Professional Working Proficiency</p>
      </div>
    </div>

  </div>

</section>


       

       <section id="contact" className="contact">

  <div className="contact-inner">

    <p className="eyebrow">
      LET'S CONNECT
    </p>

    <h2>
      Have an idea?
      <br />
      <span>Let's build it.</span>
    </h2>

    <p className="contact-description">
      I'm open to opportunities, collaborations and
      interesting technology projects.
    </p>

    <a
      href="mailto:radhakrishnabandaru8@gmail.com"
      className="contact-button"
    >
      Send Me an Email
      <span>↗</span>
    </a>


    <div className="contact-grid">

      <a
        href="mailto:radhakrishnabandaru8@gmail.com"
        className="contact-item"
      >
        <span className="contact-label">
          EMAIL
        </span>

        <strong>
          radhakrishnabandaru8@gmail.com
        </strong>

        <span className="contact-arrow">
          ↗
        </span>
      </a>


      <a
        href="tel:9701860489"
        className="contact-item"
      >
        <span className="contact-label">
          PHONE
        </span>

        <strong>
          +91 9701860489
        </strong>

        <span className="contact-arrow">
          ↗
        </span>
      </a>


      <a
        href="https://linkedin.com/in/radhakrishna-bandaru"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <span className="contact-label">
          LINKEDIN
        </span>

        <strong>
          radhakrishna-bandaru
        </strong>

        <span className="contact-arrow">
          ↗
        </span>
      </a>


      <a
        href="https://github.com/radhakrishna-bandaru"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <span className="contact-label">
          GITHUB
        </span>

        <strong>
          radhakrishna-bandaru
        </strong>

        <span className="contact-arrow">
          ↗
        </span>
      </a>

    </div>

  </div>

</section>



       <footer className="footer">

  <div className="footer-left">

    <a href="#home" className="footer-logo">
      BRK<span>.</span>
    </a>

    <p>
      Computer Science • AI & ML
    </p>

  </div>


  <div className="footer-center">

    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#experience">Experience</a>
    <a href="#contact">Contact</a>

  </div>


  <div className="footer-right">

    <p>
      ©Bandaru Radha Krishna
    </p>

    <p>
      Rajahmundry, Andhra Pradesh
    </p>

  </div>

</footer>

      </div>
    </>
  );
}

export default App;