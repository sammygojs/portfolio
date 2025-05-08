import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <section className="home-section">
      {/* Background Layer */}
      <div className="home-bg" />

      {/* Content */}
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Sammy</span></h1>
        <h2>Versatile Engineer with Expertise in Backend & DevOps</h2>
        <p>
          I’m a developer focused on cloud-first applications
           with a perfect balance of design and functionality. Passionate about GoLang, Node.js, 
           and modern web technologies.
        </p>
        {/* <p>
  As a versatile developer, I craft high-performance applications with precision and creativity. 
  Whether it's building scalable backends with <span className="highlight">Java & Spring</span>, creating fast APIs with <span className="highlight">Node.js</span>, or scripting intelligent solutions in <span className="highlight">Python</span>, I thrive on blending design with engineering excellence.
</p> */}
        <Link to="/projects">
          <button className="cta-button">View My Work</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
