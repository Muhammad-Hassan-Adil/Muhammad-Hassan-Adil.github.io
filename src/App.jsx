import React from 'react';
import { Mail, Link, MapPin, Terminal, Briefcase, Award, Code, Database, Cpu } from 'lucide-react';
import './index.css';

function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="animate-in delay-1">
        <h1>Muhammad Hassan Adil</h1>
        <p className="subtitle">Software Developer (Freelance) &middot; Remote &middot; Lahore, PK</p>
        <p>
          As a highly adaptable Software Developer with a strong foundation in designing, developing, testing, and maintaining high-performance software applications, I excel in remote and cross-functional team environments. With expertise in building scalable backends and modern architectures using Python, Java, and various frameworks, I specialize in delivering innovative solutions tailored to client demands. Winner of the Best Final Year Project Award for an ML-powered IoT system, I aim to create impactful digital experiences and leverage emerging technologies.
        </p>
        <div className="contact-links">
          <a href="mailto:hassan.adil605094@gmail.com" className="contact-link">
            <Mail size={18} /> Email Me
          </a>
          <a href="https://linkedin.com/in/hassan-adil0" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Link size={18} /> LinkedIn
          </a>
          <div className="contact-link" style={{ pointerEvents: 'none' }}>
            <MapPin size={18} /> Open to Remote Work
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="animate-in delay-2">
        <h2><Briefcase size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}/> Experience</h2>
        
        <div className="card">
          <div className="card-title">
            <h3>Software Engineer (Freelance / Full-Time)</h3>
            <span className="card-date">July 2025 - Present</span>
          </div>
          <span className="card-subtitle">Hotelkey &middot; Remote / Lahore, PK</span>
          <ul>
            <li>Led software development for Central Reservation System (CRS) by debugging live production issues and implementing booking logic.</li>
            <li>Collaborated with cross-functional QA and product teams to ensure seamless integration with major OTAs like Airbnb, Expedia, and Booking.com.</li>
            <li>Delivered innovative solutions and maintained high-performance backend systems.</li>
          </ul>
          <div className="tag-list">
            <span className="tag">Java</span>
            <span className="tag">SpringBoot</span>
            <span className="tag">CRS Integrations</span>
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            <h3>Lab Engineer</h3>
            <span className="card-date">Feb - June 2025</span>
          </div>
          <span className="card-subtitle">Forman Christian College (FCCU) &middot; Lahore, PK</span>
          <ul>
            <li>Created and conducted labs for Java, Python, and C++.</li>
            <li>Mentored students in Object-Oriented Programming and advanced algorithm design.</li>
          </ul>
        </div>

        <div className="card">
          <div className="card-title">
            <h3>Software Engineer Intern / Part-Time</h3>
            <span className="card-date">July 2023 - July 2024</span>
          </div>
          <span className="card-subtitle">Hotelkey &middot; Lahore, PK</span>
          <ul>
            <li>Developed data-driven integration tests in JUnit for travel platforms (Airbnb, Expedia).</li>
            <li>Analyzed backend logs to ensure accurate data synchronization with AWS-hosted systems.</li>
            <li>Engineered backend modules using Java SpringBoot and developed automated API tests with REST Assured.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="animate-in delay-3">
        <h2><Terminal size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}/> Featured Projects</h2>
        
        <div className="card">
          <div className="card-title">
            <h3>Building AI Hardware Cost Calculator</h3>
            <span className="card-date">Summer 2026</span>
          </div>
          <p className="project-highlight">Interactive tool to estimate AI hardware setup costs and optimize configurations.</p>
          <ul>
            <li>Engineered a full-stack solution to aggregate hardware pricing data.</li>
            <li>Performed bottleneck analysis for cost-effective deep learning rigs.</li>
          </ul>
          <div className="tag-list">
            <span className="tag">Full-Stack</span>
            <span className="tag">Data Aggregation</span>
            <span className="tag">Optimization Algorithms</span>
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            <h3>Face Recognition System</h3>
            <span className="card-date">Spring 2026</span>
          </div>
          <p className="project-highlight">High-accuracy attendance system using modern AI architectures.</p>
          <ul>
            <li>Implemented a robust face verification API with real-time embedding extraction.</li>
            <li>Designed adaptive profile updating for continuous learning using InsightFace and PyODBC.</li>
          </ul>
          <div className="tag-list">
            <span className="tag">Python</span>
            <span className="tag">FastAPI</span>
            <span className="tag">InsightFace</span>
            <span className="tag">SQL Server</span>
          </div>
        </div>

        <div className="card">
          <div className="card-title">
            <h3>Fall Protection Vest <Award size={16} style={{ display: 'inline', verticalAlign: 'middle', color: 'gold' }}/></h3>
            <span className="card-date">Fall 2024</span>
          </div>
          <p className="project-highlight">Best Final Year Project Award - ML-powered wearable vest.</p>
          <ul>
            <li>Trained classification models on the UMAFall dataset using Scikit-learn.</li>
            <li>Integrated with ESP32/MPU9250 sensors and connected to a Flutter app for real-time alerts.</li>
          </ul>
          <div className="tag-list">
            <span className="tag">Machine Learning</span>
            <span className="tag">IoT</span>
            <span className="tag">Flutter</span>
            <span className="tag">Scikit-learn</span>
          </div>
        </div>
      </section>

      {/* Skills & Education Section */}
      <section className="animate-in delay-3">
        <div className="skills-grid">
          <div>
            <h2><Code size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}/> Technical Skills</h2>
            <div className="card">
              <div className="skill-category">
                <h3>Backend & Programming</h3>
                <div className="tag-list">
                  <span className="tag">Java</span>
                  <span className="tag">Python</span>
                  <span className="tag">C++</span>
                  <span className="tag">SpringBoot</span>
                  <span className="tag">FastAPI</span>
                </div>
              </div>
              <div className="skill-category" style={{ marginTop: '20px' }}>
                <h3>Data & Cloud</h3>
                <div className="tag-list">
                  <span className="tag">MySQL</span>
                  <span className="tag">SQL Server</span>
                  <span className="tag">AWS</span>
                  <span className="tag">TensorFlow</span>
                  <span className="tag">Scikit-learn</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2><Award size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}/> Education</h2>
            <div className="card">
              <div className="card-title">
                <h3>BSc Computer Sciences</h3>
                <span className="card-date">Grad: Jan 2025</span>
              </div>
              <span className="card-subtitle">Forman Christian College (FCCU)</span>
              <p>Lahore, Punjab, PK</p>
            </div>
            <div className="card">
              <div className="card-title">
                <h3>A Levels</h3>
              </div>
              <span className="card-subtitle">Beaconhouse College Campus Gulberg</span>
            </div>
          </div>
        </div>
      </section>
      
      <footer style={{ textAlign: 'center', marginTop: '60px', paddingBottom: '20px', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Muhammad Hassan Adil. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
