// src/components/tabs/JavaTab.js

function JavaTab() {
    return (
      <div>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 'bold' }}>☕ Java Backend Highlights</h2>
        <ul style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '2rem'
        }}>
          <li>Engineered scalable microservices using <strong>Java, Spring Boot</strong>, <strong>Spring Security</strong>, and <strong>Hibernate</strong></li>
          <li>Implemented <strong>JWT & OAuth 2.0 authentication</strong> with RBAC for multi-tenant systems</li>
          <li>Built and optimized REST APIs connected to <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and <strong>Redis</strong></li>
          <li>Designed and automated CI/CD pipelines with <strong>Jenkins</strong>, <strong>GitHub Actions</strong>, and <strong>Maven</strong></li>
          <li>Deployed containerized apps to <strong>AWS EKS</strong> with <strong>Docker</strong> and monitored using <strong>CloudWatch</strong>, <strong>Prometheus</strong>, and <strong>Grafana</strong></li>
          <li>Achieved 85%+ code coverage through <strong>JUnit</strong>, <strong>Mockito</strong>, and <strong>REST Assured</strong></li>
          <li>Practiced <strong>Agile</strong> methodologies, led grooming sessions, mentored juniors, and contributed to sprint planning</li>
        </ul>
  
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold' }}>📁 Java Projects</h3>
        <ul style={{
          fontSize: '1.05rem',
          lineHeight: '1.7',
          paddingLeft: '1.5rem'
        }}>
          <li><strong>Supply Chain Microservices</strong> – Built backend services used by Forbes Top 100 clients for logistics workflows, secured with OAuth 2.0 and deployed to AWS EKS</li>
          <li><strong>Authentication Service</strong> – Spring Boot app for JWT-based login, token refresh, and multi-role access control</li>
          <li><strong>Monitoring Dashboard API</strong> – Developed metrics service deployed on GCP with Prometheus & Grafana integration</li>
        </ul>
      </div>
    );
  }
  
  export default JavaTab;
  