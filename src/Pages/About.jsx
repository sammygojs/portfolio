function About() {
  return (
    <section style={{
      minHeight: '90vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'left'
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
        filter: 'blur(6px) brightness(0.5)', // Blur + Darken
        zIndex: 1
      }} />

      {/* Foreground Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '2rem',
        borderRadius: '20px',
        maxWidth: '900px'
      }}>
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          About Me
        </h1>

        <p style={{
          fontSize: '1.4rem',
          maxWidth: '800px',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          I'm a passionate web developer who loves crafting sleek, powerful websites and applications.
          Specializing in React, Node.js, and modern web technologies, I aim to deliver clean, efficient, and beautiful digital experiences.
        </p>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          {/* Skill Badges */}
          {["React", "Node.js", "JavaScript", "HTML5", "CSS3", "MongoDB"].map((skill, index) => (
            <span key={index} style={{
              padding: '0.5rem 1rem',
              background: 'white',
              color: '#764ba2',
              borderRadius: '20px',
              fontWeight: 'bold'
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
