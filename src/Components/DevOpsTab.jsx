// src/components/tabs/DevOpsTab.js

function DevOpsTab() {
    return (
      <div>
        <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 'bold' }}>⚙️ DevOps & Cloud Highlights</h2>
        <ul style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          paddingLeft: '1.5rem',
          marginBottom: '2rem'
        }}>
          <li>Designed cloud-native apps using <strong>AWS Lambda, S3, EC2, SQS, and DynamoDB</strong></li>
          <li>Deployed containerized apps using <strong>Docker</strong> and managed orchestration with <strong>Kubernetes</strong></li>
          <li>Configured CI/CD pipelines with <strong>GitHub Actions</strong> and <strong>Jenkins</strong> for automated deployment</li>
          <li>Implemented infrastructure as code using <strong>Terraform</strong> and managed secrets via <strong>SSM</strong></li>
          <li>Monitored performance and logs with <strong>Prometheus, Grafana, and CloudWatch</strong></li>
        </ul>
  
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold' }}>📁 DevOps Projects</h3>
        <ul style={{
          fontSize: '1.05rem',
          lineHeight: '1.7',
          paddingLeft: '1.5rem'
        }}>
          <li><strong>Serverless E-Commerce Backend</strong> – Deployed Node.js functions using AWS Lambda and API Gateway with DynamoDB</li>
          <li><strong>CI/CD for Go Microservices</strong> – Jenkins-based pipeline integrating testing, linting, Docker builds, and deploy to GKE</li>
          <li><strong>Cloud Infra Automation</strong> – Terraform scripts to spin up complete backend infra with IAM roles, VPCs, EC2, and RDS</li>
        </ul>
      </div>
    );
  }
  
  export default DevOpsTab;