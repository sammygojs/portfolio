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
        backgroundImage: 'url(/assets/bg.png)',
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

        {/* 🎓 Education */}
        <div style={{
          // marginBottom: '3rem',
          // padding: '1.5rem',
          // backgroundColor: 'rgba(255, 255, 255, 0.05)',
          // borderRadius: '12px',
          // boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          // backdropFilter: 'blur(6px)',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #ffffff50',
            paddingBottom: '0.5rem',
            textAlign: 'center'
          }}>
            🎓 Education
          </h2>

          {/* Masters */}
          <div style={{ marginBottom: '1.5rem',justifyItems: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>
              Masters Advanced Computer Science
            </h3>
            <p style={{ margin: 0, fontSize: '1.1rem', color: '#ccc' }}>
              <strong>University of Sheffield, UK</strong> — Graduated with Merit
            </p>
            <ul style={{ marginTop: '0.5rem', fontSize: '1rem', paddingLeft: '1.2rem', color: '#ccc' }}>
              <li>Specialized in backend systems, distributed computing, and software architecture</li>
              <li>Dissertation on graph algorithms & flow-based heuristics for NP-hard problems</li>
              <li>Team-based projects in Django, GPU (CUDA), and full-stack Java</li>
            </ul>
          </div>

          {/* Bachelors */}
          <div style={{justifyItems: 'center'}}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>
              BEng Computer Engineering
            </h3>
            <ul style={{ marginTop: '0.5rem', fontSize: '1rem', paddingLeft: '1.2rem', color: '#ccc' }}>
              <li>Core subjects: Data Structures, OS, DBMS, Algorithms, OOP</li>
              <li>Capstone: Real-time transport routing system with GPS/traffic APIs</li>
              <li>Mentored juniors via coding club and hosted tech events</li>
            </ul>
          </div>
        </div>

        {/* 📁 Certifications */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: '2rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #ffffff50',
            paddingBottom: '0.5rem',
            textAlign: 'center'
          }}>
            📁 Certifications
          </h2>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}>
            <img
              src="assets/metaCert.png"
              alt="Meta Backend Certificate"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '12px',
                border: '2px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}
            />
            <img
              src="assets/GoogleCert.png"
              alt="Google Cybersecurity Certificate"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '12px',
                border: '2px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}
            />
          </div>
        </div>

        {/* 🧠 Domain Expertise Tabs */}
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid #ffffff50',
          paddingBottom: '0.5rem',
          textAlign: 'center'
        }}>
          🧠 Domain Expertise
        </h2>

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
