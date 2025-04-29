function Contact() {
  return (
    <section style={{
      minHeight: '90vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      
      {/* Background GIF Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: 'url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjI4dGp6NDU5NXphMG00dmEweWcwdzB0emV6YXRuOThjd2VmeXpzcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fmMdxlVwsCmTtA4V6a/giphy.gif)',
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '3rem',
        borderRadius: '20px',
        maxWidth: '800px',
        width: '100%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // gap: '2rem'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          // letterSpacing: '1px'
        }}>
          Contact Me
        </h1>

        <p style={{
          fontSize: '1.4rem',
          maxWidth: '700px',
          // lineHeight: '1.6'
        }}>
          Feel free to reach out to me if you want to collaborate, hire me, or just say hello! 🚀
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          fontSize: '1.2rem',
          marginTop: '1rem'
        }}>
          <a href="mailto:sammy.akoliya@gmail.com" style={{
            background: 'white',
            color: '#764ba2',
            padding: '0.8rem 2rem',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.3s, color 0.3s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#764ba2';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#764ba2';
          }}
          >
            📧 Email Me
          </a>

          <a href="https://www.linkedin.com/in/sumitakoliya" target="_blank" rel="noopener noreferrer" style={{
            background: 'white',
            color: '#764ba2',
            padding: '0.8rem 2rem',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'background-color 0.3s, color 0.3s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#764ba2';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#764ba2';
          }}
          >
            💼 Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
