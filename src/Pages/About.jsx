// import DynamicIntro from "../Components/DynamicIntro";

function About() {
  return (
    <section style={{
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '3rem 2rem',
      textAlign: 'left',
    }}>
      
      {/* Background GIF Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: 'url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTJtZ2JoYXhzbmViNWU5bXZlc3QyODFqdGVvMzBhNW5lY3FuaXpzbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IARsaTPpY5IiY/giphy.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(6px) brightness(0.5)',
        zIndex: 1,
      }} />

      {/* Foreground Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '3rem',
        borderRadius: '20px',
        maxWidth: '960px',
        backdropFilter: 'blur(5px)',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          About Me
        </h1>

        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          marginBottom: '2rem',
        }}>
          I’m <strong>Sumit Akoliya</strong>, a Sheffield-based software engineer with a passion for building fast, scalable, and user-centric applications. With experience across <strong>Java Spring Boot, Node.js, Python, and cloud platforms like AWS and Azure</strong>, I specialize in developing distributed systems, secure APIs, and microservices for real-world production use.
        </p>

        {/* 🔁 Rotating tagline */}
        {/* <DynamicIntro /> */}

        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.8',
          marginBottom: '2rem',
        }}>
          My journey spans across large-scale e-commerce systems, search optimization services, and event-driven architectures. I focus heavily on <strong>Test-Driven Development (TDD)</strong>, continuous integration, and clean code practices. I’ve worked in agile teams, mentored junior devs, and consistently delivered high-impact features for global clients.
        </p>

        {/* Key Highlights */}
        <h2 style={{ fontSize: '1.6rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          ⚡ Key Highlights:
        </h2>
        <ul style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '2rem'
        }}>
          <li>Built microservices using <strong>Java, Spring Boot, and Node.js</strong> with RESTful APIs and JWT auth</li>
          <li>Designed distributed systems using <strong>AWS Lambda, SQS, SNS, and DynamoDB</strong></li>
          <li>Implemented CI/CD with <strong>Jenkins, Docker, GitHub, and Git Flow</strong></li>
          <li>Integrated search & caching with <strong>Elasticsearch and Redis</strong></li>
          <li>Worked with <strong>MongoDB, MySQL, and PostgreSQL</strong> for data-intensive apps</li>
        </ul>

        {/* Certifications & Achievements */}
        <h2 style={{ fontSize: '1.6rem', marginTop: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          🏅 Certifications & Achievements
        </h2>
        <ul style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '2rem'
        }}>
          <li><strong>Certified Backend Developer - Meta (2023)</strong>: Successfully completed Meta's backend track</li>
          <li><strong>Google CyberSecurity Certification (2024)</strong>: Hands-on understanding of secure software practices</li>
          <li><strong>Top Performer - LTIMindtree (2022)</strong>: Recognized for exceptional contributions and delivery</li>
          <li><strong>ETH Hackathon Web 3.0 (London, 2023)</strong>: Developed and demoed blockchain solutions in a live event</li>
        </ul>

        {/* Certificate Images */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* <img 
            src="https://drive.google.com/uc?export=view&id=1xjxzh075ljhgK8ngOhtxkqIwQ14_PNo5" 
            alt="Meta Backend Certificate" 
            style={{ width: '250px', borderRadius: '12px', border: '1px solid #fff' }} 
          />
          <img 
            src="https://drive.google.com/uc?export=view&id=1F2ptoaa5yJlbvoeH9TTU9LsWVsiqMFSr" 
            alt="Google CyberSecurity Certificate" 
            style={{ width: '300px', borderRadius: '12px', border: '1px solid #fff' }} 
          /> */}
        </div>

        {/* Skill Badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.2rem'
        }}>
          {[
            "Java", "Spring Boot", "Node.js", "Python", "JavaScript",
            "React.js", "MongoDB", "DynamoDB", "AWS", "Docker", "Jenkins"
          ].map((skill, index) => (
            <span key={index} style={{
              padding: '0.5rem 1rem',
              background: 'white',
              color: '#764ba2',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '0.95rem'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
