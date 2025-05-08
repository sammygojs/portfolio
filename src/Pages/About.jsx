// src/pages/About.js
import { useState } from 'react';
import JavaTab from '../Components/JavaTab';
import NodeTab from '../Components/NodeTab';
import PythonGoTab from '../Components/PythonGoTab';
import DevOpsTab from '../Components/DevOpsTab';

function About() {
  const [activeTab, setActiveTab] = useState('java');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'java': return <JavaTab />;
      case 'node': return <NodeTab />;
      case 'pythongo': return <PythonGoTab />;
      case 'devOps': return <DevOpsTab />;
      default: return <JavaTab />;
    }
  };

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
      flexDirection: 'column'
    }}>

      {/* Background Layer */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
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
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
        }}>
          About Me
        </h1>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          I’m <strong>Sumit Akoliya</strong>, a Sheffield-based software engineer with a passion for building fast, scalable, and user-centric applications. With experience across <strong>Java Spring Boot, Node.js, Python, and cloud platforms like AWS and Azure</strong>, I specialize in developing distributed systems, secure APIs, and microservices for real-world production use.
        </p>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          My journey spans across large-scale e-commerce systems, search optimization services, and event-driven architectures. I focus heavily on <strong>Test-Driven Development (TDD)</strong>, continuous integration, and clean code practices. I’ve worked in agile teams, mentored junior devs, and consistently delivered high-impact features for global clients.
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button onClick={() => setActiveTab('java')} style={tabButtonStyle(activeTab === 'java')}>Java Backend</button>
          <button onClick={() => setActiveTab('node')} style={tabButtonStyle(activeTab === 'node')}>Node + React</button>
          <button onClick={() => setActiveTab('pythongo')} style={tabButtonStyle(activeTab === 'pythongo')}>Python + Go</button>
          <button onClick={() => setActiveTab('devOps')} style={tabButtonStyle(activeTab === 'devOps')}>DevOps</button>
        </div>

        {renderTabContent()}
      </div>
    </section>
  );
}

const tabButtonStyle = (isActive) => ({
  backgroundColor: isActive ? '#764ba2' : 'white',
  color: isActive ? 'white' : '#764ba2',
  padding: '0.6rem 1.4rem',
  borderRadius: '10px',
  fontWeight: '600',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
});

export default About;
