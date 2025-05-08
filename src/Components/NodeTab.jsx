// src/components/tabs/NodeTab.js

function NodeTab() {
    return (
      <div>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 'bold' }}>⚡ Node.js + React Highlights</h2>
        <ul style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '2rem'
        }}>
          <li>Developed backend APIs with <strong>Node.js</strong> and <strong>Express.js</strong> using modular MVC structure</li>
          <li>Integrated <strong>JWT-based authentication</strong>, user roles, and session handling</li>
          <li>Built frontend UI with <strong>React.js</strong>, including responsive layout and dynamic routing</li>
          <li>Created and consumed <strong>RESTful APIs</strong> and handled state with Context and Redux</li>
          <li>Managed backend validation, error handling middleware, and secure API consumption</li>
        </ul>
  
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold' }}>📁 Node.js Projects</h3>
        <ul style={{
          fontSize: '1.05rem',
          lineHeight: '1.7',
          paddingLeft: '1.5rem'
        }}>
          <li><strong>Full-Stack Food Tracker App</strong> – Built using Node.js, Express, MongoDB, and React. Features meal logging, user accounts, and OCR/AI plans</li>
          <li><strong>Supplier Ordering System</strong> – Node.js app for user-supplier ordering with JWT-based auth and order history management</li>
          <li><strong>REST API with Rate Limiting</strong> – Secured Express API using Helmet, JWT middleware, and custom rate limiting logic</li>
        </ul>
      </div>
    );
  }
  
  export default NodeTab;