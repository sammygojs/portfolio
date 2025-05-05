import { useState, useEffect } from 'react';
import '../styles/about.css';

const taglines = [
  "Securing APIs with JWT in Node.js",
  "Scaling microservices with Spring Boot & AWS",
  "Optimizing search with Elasticsearch & Redis",
  "Crafting CI/CD pipelines with Docker & Jenkins",
  "Designing resilient systems using event-driven architecture",
];

function DynamicIntro() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dynamic-intro">
      <h2>{taglines[index]}</h2>
    </div>
  );
}

export default DynamicIntro;
