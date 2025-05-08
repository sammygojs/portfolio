// src/components/tabs/PythonGoTab.js

function PythonGoTab() {
    return (
      <div>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 'bold' }}>⚡ Python & Go Highlights</h2>
        <ul style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '2rem'
        }}>
          <li>Built REST APIs using <strong>FastAPI</strong> and <strong>Flask</strong> with Pydantic validation and OAuth2/JWT</li>
          <li>Developed CLI tools and scripts with <strong>Python</strong> for automation and data manipulation</li>
          <li>Implemented microservices in <strong>GoLang</strong> using the <strong>Gin</strong> and <strong>Echo</strong> frameworks</li>
          <li>Managed database integration with <strong>GORM</strong> and <strong>SQLAlchemy</strong></li>
          <li>Performed unit testing using <strong>pytest</strong> and <strong>Go’s testing package</strong></li>
        </ul>
  
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold' }}>📁 Python/Go Projects</h3>
        <ul style={{
          fontSize: '1.05rem',
          lineHeight: '1.7',
          paddingLeft: '1.5rem'
        }}>
          <li><strong>Real-Time Task Manager</strong> – GoLang backend with user/project/task APIs, RBAC, JWT, and Swagger docs</li>
          <li><strong>AI-Powered Meal Logger</strong> – Flask + OCR to scan food entries, extract calories, and log them in MongoDB</li>
          <li><strong>File Processor CLI</strong> – Python tool for batch file renaming, parsing logs, and CSV summarization</li>
        </ul>
      </div>
    );
  }
  
  export default PythonGoTab;
  