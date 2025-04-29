import { useEffect, useState } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  useEffect(() => {
    fetch('https://api.github.com/users/sammygojs/repos')
      .then(response => response.json())
      .then(data => {
        const originalRepos = data.filter(repo => !repo.fork);
        setRepos(originalRepos);
      })
      .catch(error => console.error('Error fetching repos:', error));
  }, []);

  const filteredRepos = selectedLanguage === 'All'
    ? repos
    : repos.filter(repo => repo.language === selectedLanguage);

  // Get unique languages
  const languages = ['All', ...new Set(repos.map(repo => repo.language).filter(Boolean))];

  return (
    <section style={{
      minHeight: '90vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      color: 'white',
      textAlign: 'center'
    }}>
      
      {/* Background GIF Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: 'url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2hpMmZmdHlkc3U1eHJ1OTlpZHdoNGp3NmlxZTh6MTE2cTRyMzFwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w6JyQiYum7Qbu/giphy.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(6px) brightness(0.5)',
        zIndex: 1
      }} />

      {/* Foreground Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>My Projects</h1>

        {/* Language Filter Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLanguage(lang)}
              style={{
                backgroundColor: selectedLanguage === lang ? '#764ba2' : 'white',
                color: selectedLanguage === lang ? 'white' : '#764ba2',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {filteredRepos.map(repo => (
            <div key={repo.id} style={{
              background: 'white',
              color: '#333',
              padding: '2rem',
              borderRadius: '15px',
              width: '300px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{repo.name}</h2>
              <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                {repo.description ? repo.description : "No description available."}
              </p>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                Language: {repo.language ? repo.language : "N/A"}
              </p>
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#764ba2', fontWeight: 'bold', textDecoration: 'none' }}
              >
                View Code →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
