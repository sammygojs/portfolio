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
        <h2>Building Dynamic and Powerful Digital Experiences</h2>
        <p>
          I’m a web developer focused on creating high-performance applications with a perfect balance of design and functionality. Passionate about React, Node.js, and modern web technologies.
        </p>
        <Link to="/projects">
          <button className="cta-button">View My Work →</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
