// Pages/NotFound.jsx
// import { Link } from 'react-router-dom';
import '../styles/home.css'; // Reusing the home theme styles

function NotFound() {
  return (
    <section className="home-section">
      {/* Background Layer */}
      <div className="notFound-bg" />

      {/* Content */}
      <div className="home-content">
        <h1>Yes, it's a 404. <span className="highlight"></span></h1>
        <h2>Nothing to see here, mate.</h2>
        {/* <p>
          I’m a web developer focused on creating high-performance applications with a perfect balance of design and functionality. Passionate about React, Node.js, and modern web technologies.
        </p> */}
        {/* <Link to="/projects">
          <button className="cta-button">Mind if I take you take back to action? →</button>
        </Link> */}
      </div>
    </section>
  );
}

export default NotFound;
