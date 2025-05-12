import React, { useState } from 'react';

const mockProjects = [
  {
    title: 'Spring microservices app',
    description: 'Java Spring app orchestrating microservices using Eureka Client to discover microservices automatically and dynamically while managing the service health using spring framework',
    domain: 'Backend',
    image: 'https://via.placeholder.com/300x180?text=Taxi+App',
    techStack: ['Java', 'Spring', 'Eureka Client'],
    demoLink: '#',
    codeLink: 'https://github.com/sammygojs/Spring_EurekaClient_PhotoAppUsers',
  },
  {
    title: 'Plantify',
    description: 'This progressive web application allows users to record and view plant sightings, assist with identification, and engage in discussions through a real-time chat feature.',
    domain: 'Full Stack',
    image: 'https://via.placeholder.com/300x180?text=E-Commerce+API',
    techStack: ['Node.js', 'MongoDB', 'IndexedDB', 'SPARQL'],
    demoLink: '#',
    codeLink: 'https://github.com/sammygojs/PlantBook',
  },
  {
    title: 'Trade Smart',
    description: 'Real-Time Trading Platform where users can trade multi-commodities their manage portfolio. The prices of stocks are managed by an external dotnet service with dynamic prices.',
    domain: 'Full Stack',
    image: 'https://github.com/sammygojs/Trading-Platform',
    techStack: ['Node.js', 'Express', 'C# ', 'Dotnet', '.NET', 'React', 'Prisma'],
    demoLink: '#',
    codeLink: 'https://github.com/sammygojs/Trading-Platform',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js and Tailwind.',
    domain: 'Frontend',
    image: 'https://via.placeholder.com/300x180?text=Portfolio',
    techStack: ['React', 'Tailwind'],
    demoLink: '#',
    codeLink: 'https://github.com/sammygojs/portfolio',
  },
  {
    title: 'EnvironTech',
    description: 'Developed a full-stack carbon offset platform using React, Tailwind CSS, Flask, and MySQL, enabling users to calculate emissions, track progress, and purchase solar products.',
    domain: 'Full Stack',
    image: 'https://via.placeholder.com/300x180?text=DevOps+Tool',
    techStack: ['Python', 'Flask', 'SQLite', 'Pytest', 'Tailwind CSS', 'Stripe'],
    demoLink: '#',
    codeLink: 'https://github.com/sammygojs/EnvironTech',
  },
  // {
  //   title: 'EnvironTec',
  //   description: 'full-stack carbon offset platform using React, Tailwind CSS, Flask, and MySQL, enabling users to calculate emissions, track progress, and purchase solar products.',
  //   domain: 'Full Stack',
  //   image: 'https://via.placeholder.com/300x180?text=DevOps+Tool',
  //   techStack: ['Python', 'Flask', 'SQLite', 'Pytest', 'Tailwind CSS', 'Stripe'],
  //   demoLink: '#',
  //   codeLink: 'https://github.com/sammygojs/EnvironTech',
  // },
  {
    title: 'Go_TaskManager',
    description: 'A full-featured backend task management API built with Go, Gin, and GORM. Includes JWT authentication, admin controls, projects, tags, pagination, filtering, and Swagger documentation.',
    domain: 'Backend',
    image: 'https://via.placeholder.com/300x180?text=Go+Task+API',
    techStack: ['Go', 'Gin', 'GORM', 'SQLite', 'JWT', 'Swagger'],
    demoLink: '#',
    codeLink: 'https://github.com/sammygojs/go_project_tasks_project',
  },
  
];

const domains = ['All', 'Full Stack',
  'Frontend',
  'Backend', 'Serverless', 'DevOps'];

function ProjectCard({ project }) {
  return (
    <div style={{
      backgroundColor: '#222',
      borderRadius: '15px',
      padding: '1rem',
      width: '300px',
      minHeight: '320px', // Keeps height consistent
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Pushes button to bottom
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      textAlign: 'left',
      transition: 'transform 0.3s ease'
    }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {/* <img src={project.image} alt={project.title} style={{
            width: '100%',
            borderRadius: '10px',
            marginBottom: '1rem'
          }} /> */}
      <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', textAlign: 'center', }}>{project.title}</h2>
      <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>{project.description}</p>

      {/* Tech Stack */}
      <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.techStack.map((tech, i) => (
          <span key={i} style={{
            backgroundColor: '#764ba2',
            padding: '0.25rem 0.6rem',
            borderRadius: '10px',
            fontSize: '0.75rem'
          }}>{tech}</span>
        ))}
      </div>

      {/* Code Access Button */}
      <a
        href={project.codeLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          textAlign: 'center',
          marginTop: '0.5rem',
          backgroundColor: '#fff',
          color: '#111',
          fontWeight: 'bold',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          transition: 'all 0.3s ease'
        }}
        onClick={() => {
          window.gtag?.('event', 'click', {
            event_category: 'project_code',
            event_label: `Codebase: ${project.title}`,
          });
        }}
      >
        Codebase
      </a>
    </div>
  );
}


export default function ProjectsWithDomainAndTags() {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [activeTags, setActiveTags] = useState([]);

  const domainFiltered = selectedDomain === 'All'
    ? mockProjects
    : mockProjects.filter(p => p.domain === selectedDomain);

  const availableTags = Array.from(new Set(
    domainFiltered.flatMap(p => p.techStack)
  )).sort();

  const toggleTag = (tag) => {
    setActiveTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = activeTags.length === 0
    ? domainFiltered
    : domainFiltered.filter(project =>
      activeTags.every(tag => project.techStack.includes(tag))
    );

  return (
    <section style={{
      minHeight: '100vh',
      position: 'relative',
      padding: '2rem',
      backgroundColor: '#111',
      color: 'white',
      overflow: 'hidden'
    }}>
      {/* Background GIF */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: 'url(/assets/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'blur(6px) brightness(0.5)',
        zIndex: 1
      }} />

      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', textAlign: 'center' }}>My Projects</h1>

        {/* Domain Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          {domains.map(domain => (
            <button
              key={domain}
              onClick={() => {
                setSelectedDomain(domain);
                setActiveTags([]); // reset tags when switching domain
              }}
              style={{
                backgroundColor: selectedDomain === domain ? '#764ba2' : '#fff',
                color: selectedDomain === domain ? '#fff' : '#764ba2',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              {domain}
            </button>
          ))}
        </div>

        {/* Tag Filters */}
        {availableTags.length > 0 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}>
            {availableTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                style={{
                  backgroundColor: activeTags.includes(tag) ? '#764ba2' : '#fff',
                  color: activeTags.includes(tag) ? '#fff' : '#764ba2',
                  border: 'none',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Project Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {filteredProjects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
