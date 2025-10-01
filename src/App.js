// Business Proposal Document Component
const BusinessProposalDocument = () => (
  <div className="max-w-4xl mx-auto bg-white p-8">
    <div className="prose max-w-none">
      <h1>People Intelligence Platform Business Proposal</h1>
      
      <h2>1. Executive Summary</h2>
      <p>
        This proposal outlines the development of an internal People Intelligence Platform that will 
        transform how our HR organization leverages data for strategic decision-making. Inspired by 
        Visier's industry-leading approach, this platform will provide unified, real-time analytics 
        across all HR functions while reducing costs and increasing operational efficiency.
      </p>

      <h2>2. Business Case</h2>
      <h3>Current Challenges</h3>
      <ul>
        <li><strong>Data Fragmentation:</strong> 15+ disparate HR systems creating data silos</li>
        <li><strong>Manual Reporting:</strong> 120+ hours weekly spent on manual data aggregation</li>
        <li><strong>Delayed Insights:</strong> 4-6 week lag in critical people metrics</li>
        <li><strong>Limited Predictive Capabilities:</strong> Inability to forecast trends and risks</li>
        <li><strong>Inconsistent Metrics:</strong> Different calculations across teams</li>
      </ul>

      <h3>Proposed Solution Benefits</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4>Operational Efficiency</h4>
          <ul>
            <li>70% reduction in manual reporting time</li>
            <li>Real-time data availability</li>
            <li>Automated KPI tracking</li>
          </ul>
        </div>
        <div>
          <h4>Strategic Impact</h4>
          <ul>
            <li>Predictive turnover modeling</li>
            <li>Skills gap forecasting</li>
            <li>Recruitment pipeline optimization</li>
          </ul>
        </div>
      </div>

      <h2>3. Platform Architecture</h2>
      <h3>Core Components</h3>
      
      <h4>Data Ingestion Layer</h4>
      <ul>
        <li><strong>Automated Connectors:</strong> Pre-built integrations with ATS, HRIS, LMS, Performance systems</li>
        <li><strong>Data Validation:</strong> Automated data quality checks and cleansing</li>
        <li><strong>Real-time Streaming:</strong> Live data updates from source systems</li>
        <li><strong>GDPR Compliance:</strong> Built-in privacy and data protection</li>
      </ul>

      <h4>Analytics Engine</h4>
      <ul>
        <li><strong>Pre-built Metrics:</strong> 200+ standard HR calculations</li>
        <li><strong>Machine Learning:</strong> Predictive models for turnover, performance, etc.</li>
        <li><strong>Custom Calculations:</strong> Drag-and-drop metric builder</li>
        <li><strong>Scenario Modeling:</strong> What-if analysis capabilities</li>
      </ul>

      <h4>Visualization & Reporting</h4>
      <ul>
        <li><strong>Role-based Dashboards:</strong> Tailored views for each HR COE</li>
        <li><strong>Interactive Exploration:</strong> Drill-down and data slicing</li>
        <li><strong>Automated Insights:</strong> AI-generated narrative explanations</li>
        <li><strong>Mobile Responsive:</strong> Access from any device</li>
      </ul>

      <h2>4. Module Specifications</h2>

      <h3>Talent Acquisition Dashboard</h3>
      <p><strong>Primary Users:</strong> Recruiters, Talent Acquisition Managers, HR Business Partners</p>
      
      <h4>Key Metrics:</h4>
      <ul>
        <li>Time to Fill (Overall & by Department)</li>
        <li>Time to Hire (Stage-level analysis)</li>
        <li>Quality of Hire (Performance ratings at 6/12 months)</li>
        <li>Source Effectiveness & Cost per Source</li>
        <li>Offer Acceptance Rate & Decline Reasons</li>
        <li>Candidate Pipeline Health & Conversion Rates</li>
        <li>Recruiter Productivity & Capacity</li>
        <li>Diversity Hiring Metrics</li>
      </ul>

      <h4>Dashboards & Visualizations:</h4>
      <ul>
        <li><strong>Recruitment Funnel Analytics:</strong> Stage-by-stage conversion analysis</li>
        <li><strong>Source Performance Dashboard:</strong> ROI by recruitment channel</li>
        <li><strong>Hiring Manager Scorecards:</strong> Performance metrics by department</li>
        <li><strong>Diversity & Inclusion Tracking:</strong> Demographic analysis throughout pipeline</li>
        <li><strong>Recruitment Cost Analysis:</strong> Budget vs actual spending</li>
      </ul>

      <h3>Talent Development Dashboard</h3>
      <p><strong>Primary Users:</strong> L&D Managers, Talent Development Specialists, HRBPs</p>

      <h4>Key Metrics:</h4>
      <ul>
        <li>Training Completion Rates (Overall & by Program)</li>
        <li>Learning Hours per Employee & Department</li>
        <li>Skills Gap Analysis & Coverage</li>
        <li>Certification Compliance Rates</li>
        <li>Training ROI & Effectiveness Scores</li>
        <li>Career Progression Tracking</li>
        <li>Succession Readiness Scores</li>
        <li>IDP Completion & Impact</li>
      </ul>

      <h3>Total Rewards Dashboard</h3>
      <p><strong>Primary Users:</strong> Compensation & Benefits Analysts, Total Rewards Managers</p>

      <h4>Key Metrics:</h4>
      <ul>
        <li>Compensation Ratio vs Market</li>
        <li>Pay Equity Analysis (Gender, Ethnicity, etc.)</li>
        <li>Benefits Utilization & Cost Analysis</li>
        <li>Turnover Cost Calculations</li>
        <li>Variable Pay Effectiveness</li>
        <li>Budget vs Actual Headcount Costs</li>
        <li>Overtime Analysis & Trends</li>
      </ul>

      <h3>Talent Management Dashboard</h3>
      <p><strong>Primary Users:</strong> Talent Management Directors, HR Business Partners, Senior Leadership</p>

      <h4>Key Metrics:</h4>
      <ul>
        <li>9-Box Grid Distribution & Movement</li>
        <li>Succession Coverage for Critical Roles</li>
        <li>High Potential Identification & Retention</li>
        <li>Performance Distribution & Trends</li>
        <li>Critical Role Turnover Risk</li>
        <li>Internal Mobility Rates</li>
        <li>Employee Engagement Scores</li>
        <li>Retention Risk Predictions</li>
      </ul>

      <h2>5. Implementation Roadmap</h2>

      <h3>Phase 1: Foundation (Months 1-3)</h3>
      <ul>
        <li>Data architecture and ETL pipeline development</li>
        <li>Core platform infrastructure setup</li>
        <li>Basic data connectors for primary HR systems</li>
        <li>Executive Overview dashboard development</li>
      </ul>

      <h3>Phase 2: Core Modules (Months 4-6)</h3>
      <ul>
        <li>Talent Acquisition dashboard implementation</li>
        <li>Talent Management module development</li>
        <li>Advanced analytics and ML model integration</li>
        <li>User acceptance testing and training</li>
      </ul>

      <h3>Phase 3: Advanced Features (Months 7-9)</h3>
      <ul>
        <li>Talent Development and Total Rewards modules</li>
        <li>Predictive analytics and forecasting</li>
        <li>Mobile application development</li>
        <li>Advanced reporting and export capabilities</li>
      </ul>

      <h2>6. Success Metrics</h2>

      <h3>Quantitative Benefits</h3>
      <ul>
        <li><strong>30% faster</strong> HR decision-making processes</li>
        <li><strong>$1.2M annual savings</strong> in reduced manual reporting and improved efficiency</li>
        <li><strong>25% improvement</strong> in key employee retention metrics</li>
        <li><strong>40% reduction</strong> in time spent on data aggregation and validation</li>
        <li><strong>15% improvement</strong> in recruitment efficiency and quality of hire</li>
      </ul>

      <h3>Qualitative Benefits</h3>
      <ul>
        <li>Single source of truth for all people data</li>
        <li>Enhanced strategic partnership between HR and business leaders</li>
        <li>Improved data-driven culture across the organization</li>
        <li>Proactive rather than reactive people management</li>
        <li>Enhanced employee experience through better people practices</li>
      </ul>

      <h2>7. Technical Requirements</h2>

      <h3>Data Integration</h3>
      <ul>
        <li>API-based connectors for Workday, SAP SuccessFactors, or other HRIS</li>
        <li>ATS integration (Greenhouse, Lever, Taleo, etc.)</li>
        <li>LMS and performance management system connections</li>
        <li>Payroll and benefits administration systems</li>
        <li>Employee survey platforms (Glint, Culture Amp, etc.)</li>
      </ul>

      <h3>Infrastructure</h3>
      <ul>
        <li>Cloud-based data warehouse (Snowflake, BigQuery, or Redshift)</li>
        <li>Real-time data processing capabilities</li>
        <li>Enterprise-grade security and compliance</li>
        <li>Scalable architecture for growing data volumes</li>
        <li>Disaster recovery and business continuity</li>
      </ul>

      <h2>8. Conclusion</h2>
      <p>
        The People Intelligence Platform represents a strategic investment in our organization's 
        most valuable asset: our people. By building this internal capability, we will not only 
        achieve significant cost savings compared to external solutions like Visier, but also 
        create a competitive advantage through data-driven people decisions.
      </p>
      <p>
        This platform will position our HR organization as strategic partners to the business, 
        enable proactive workforce planning, and ultimately drive better business outcomes through 
        optimized people strategies.
      </p>
    </div>
  </div>
);
