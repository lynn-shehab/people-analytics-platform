import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ComposedChart } from 'recharts';
import { Users, TrendingUp, Target, Award, DollarSign, UserCheck, AlertCircle, Calendar, Filter, Download, Bell, Search, Settings, ChevronDown, ArrowUp, ArrowDown, BookOpen, Briefcase, Shield, Clock, TrendingDown, Database, Zap, BarChart3, Cpu, Workflow, GitBranch, Layers, PieChart as PieChartIcon } from 'lucide-react';

const PeopleAnalyticsPlatform = () => {
  const [activeModule, setActiveModule] = useState('overview');
  const [showFilters, setShowFilters] = useState(false);
  const [showProposal, setShowProposal] = useState(true);
  const [currentProposalSection, setCurrentProposalSection] = useState('executive-summary');

  const [filters, setFilters] = useState({
    timePeriod: 'Last 6 Months',
    department: 'All Departments',
    location: 'All Locations',
    employeeStatus: 'Active',
    jobScope: 'All',
    shift: 'All',
    gender: 'All',
    grade: 'All',
    branch: 'All'
  });

  // Enhanced data sets
  const turnoverData = [
    { month: 'Jan', rate: 12.5, voluntary: 9.2, involuntary: 3.3, highPerformer: 2.1 },
    { month: 'Feb', rate: 11.8, voluntary: 8.5, involuntary: 3.3, highPerformer: 1.8 },
    { month: 'Mar', rate: 13.2, voluntary: 10.1, involuntary: 3.1, highPerformer: 2.4 },
    { month: 'Apr', rate: 12.1, voluntary: 9.0, involuntary: 3.1, highPerformer: 1.9 },
    { month: 'May', rate: 14.5, voluntary: 11.2, involuntary: 3.3, highPerformer: 2.8 },
    { month: 'Jun', rate: 13.8, voluntary: 10.5, involuntary: 3.3, highPerformer: 2.5 }
  ];

  const exitReasons = [
    { reason: 'Better Compensation', count: 42, percentage: 28 },
    { reason: 'Career Growth', count: 38, percentage: 25 },
    { reason: 'Work-Life Balance', count: 24, percentage: 16 },
    { reason: 'Management Issues', count: 18, percentage: 12 },
    { reason: 'Relocation', count: 15, percentage: 10 },
    { reason: 'Other', count: 13, percentage: 9 }
  ];

  const retentionDrivers = [
    { factor: 'Compensation', score: 7.8 },
    { factor: 'Career Development', score: 6.9 },
    { factor: 'Work Environment', score: 8.2 },
    { factor: 'Management', score: 7.5 },
    { factor: 'Work-Life Balance', score: 7.1 }
  ];

  const recruitmentFunnel = [
    { stage: 'Applications', count: 1250, conversion: 100 },
    { stage: 'Screened', count: 485, conversion: 38.8 },
    { stage: 'Interviewed', count: 142, conversion: 11.4 },
    { stage: 'Offered', count: 38, conversion: 3.0 },
    { stage: 'Hired', count: 32, conversion: 2.6 }
  ];

  const sourcePerformance = [
    { source: 'Employee Referrals', hires: 42, cost: 2100, quality: 8.9, timeToHire: 28 },
    { source: 'LinkedIn', hires: 38, cost: 5200, quality: 7.8, timeToHire: 45 },
    { source: 'Job Boards', hires: 24, cost: 3800, quality: 7.2, timeToHire: 52 },
    { source: 'Recruitment Agencies', hires: 18, cost: 8500, quality: 8.1, timeToHire: 35 },
    { source: 'Career Fairs', hires: 12, cost: 2800, quality: 7.5, timeToHire: 48 }
  ];

  const offerAcceptance = [
    { month: 'Jan', accepted: 85, declined: 15 },
    { month: 'Feb', accepted: 82, declined: 18 },
    { month: 'Mar', accepted: 88, declined: 12 },
    { month: 'Apr', accepted: 84, declined: 16 },
    { month: 'May', accepted: 86, declined: 14 },
    { month: 'Jun', accepted: 87, declined: 13 }
  ];

  const trainingData = [
    { program: 'Leadership Development', completed: 145, inProgress: 32, overdue: 8, avgScore: 8.2 },
    { program: 'Technical Skills', completed: 289, inProgress: 67, overdue: 15, avgScore: 7.8 },
    { program: 'Compliance Training', completed: 512, inProgress: 45, overdue: 23, avgScore: 7.5 },
    { program: 'Sales Enablement', completed: 178, inProgress: 42, overdue: 12, avgScore: 8.5 },
    { program: 'Soft Skills', completed: 234, inProgress: 56, overdue: 18, avgScore: 8.0 }
  ];

  const learningHours = [
    { dept: 'Engineering', hours: 42, target: 40 },
    { dept: 'Sales', hours: 38, target: 35 },
    { dept: 'Operations', hours: 28, target: 30 },
    { dept: 'Finance', hours: 35, target: 32 },
    { dept: 'Marketing', hours: 45, target: 38 },
    { dept: 'HR', hours: 40, target: 36 }
  ];

  const careerProgression = [
    { category: 'Promoted After Training', value: 32 },
    { category: 'Lateral Moves', value: 18 },
    { category: 'No Movement', value: 50 }
  ];

  const compensationData = [
    { grade: 'Junior', market: 45000, internal: 43500, gap: -3.3 },
    { grade: 'Mid-Level', market: 65000, internal: 67000, gap: 3.1 },
    { grade: 'Senior', market: 85000, internal: 82000, gap: -3.5 },
    { grade: 'Lead', market: 105000, internal: 108000, gap: 2.9 },
    { grade: 'Manager', market: 125000, internal: 122000, gap: -2.4 }
  ];

  const benefitsUtilization = [
    { benefit: 'Health Insurance', enrolled: 95, eligible: 100 },
    { benefit: 'Retirement Plan', enrolled: 78, eligible: 100 },
    { benefit: 'Gym Membership', enrolled: 42, eligible: 100 },
    { benefit: 'Learning Stipend', enrolled: 67, eligible: 100 },
    { benefit: 'Transportation', enrolled: 58, eligible: 80 }
  ];

  const turnoverCostBreakdown = [
    { category: 'Recruitment Fees', cost: 185000 },
    { category: 'Training Costs', cost: 142000 },
    { category: 'Lost Productivity', cost: 328000 },
    { category: 'Onboarding', cost: 95000 }
  ];

  const tenureDistribution = [
    { range: '<1 year', count: 385, turnover: 24.5 },
    { range: '1-2 years', count: 542, turnover: 18.2 },
    { range: '2-5 years', count: 892, turnover: 12.1 },
    { range: '5-10 years', count: 678, turnover: 8.5 },
    { range: '10+ years', count: 350, turnover: 4.2 }
  ];

  const performanceDistribution = [
    { name: 'Exceeds', value: 18, color: '#10b981' },
    { name: 'Meets+', value: 32, color: '#22c55e' },
    { name: 'Meets', value: 38, color: '#84cc16' },
    { name: 'Below', value: 12, color: '#ef4444' }
  ];

  const nineBoxData = [
    { subject: 'High Potential', A: 32, fullMark: 50 },
    { subject: 'Key Players', A: 45, fullMark: 50 },
    { subject: 'Solid Performers', A: 38, fullMark: 50 },
    { subject: 'Development Needed', A: 15, fullMark: 50 },
    { subject: 'At Risk', A: 8, fullMark: 50 }
  ];

  const successionReadiness = [
    { role: 'VP Operations', ready: 2, readyIn1: 1, noSuccessor: 0 },
    { role: 'Regional Manager', ready: 5, readyIn1: 3, noSuccessor: 1 },
    { role: 'Dept Head', ready: 8, readyIn1: 4, noSuccessor: 2 },
    { role: 'Team Lead', ready: 12, readyIn1: 6, noSuccessor: 3 }
  ];

  const mobilityPreference = [
    { pref: 'Willing to Relocate', count: 425 },
    { pref: 'Open to Remote', count: 782 },
    { pref: 'Local Only', count: 1640 }
  ];

  const modules = [
    { id: 'overview', name: 'Executive Overview', icon: TrendingUp },
    { id: 'talent-mgmt', name: 'Talent Management', icon: Award },
    { id: 'acquisition', name: 'Talent Acquisition', icon: UserCheck },
    { id: 'development', name: 'Talent Development', icon: Target },
    { id: 'rewards', name: 'Total Rewards', icon: DollarSign }
  ];

  const filterOptions = {
    timePeriod: ['Today', 'Last Week', 'Last Month', 'Last Quarter', 'Last 6 Months', 'Last Year', 'YTD', 'Custom Range'],
    department: ['All Departments', 'Engineering', 'Sales', 'Operations', 'Finance', 'Marketing', 'HR', 'Product', 'Legal'],
    location: ['All Locations', 'North America', 'EMEA', 'APAC', 'LATAM', 'Dubai', 'Beirut', 'Riyadh'],
    employeeStatus: ['Active', 'Inactive', 'All', 'Probation', 'Notice Period'],
    jobScope: ['All', 'Managerial', 'Non-Managerial'],
    shift: ['All', 'AM', 'PM', 'Full-time', 'Part-time'],
    gender: ['All', 'Male', 'Female', 'Other'],
    grade: ['All', 'Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager', 'Director', 'VP'],
    branch: ['All Branches', 'Flagship', 'Regional', 'Outlet']
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  const kpiCards = {
    overview: [
      { label: 'Total Headcount', value: '2,847', change: '+3.2%', trend: 'up', icon: Users },
      { label: 'Turnover Rate', value: '13.8%', change: '-1.2%', trend: 'down', icon: AlertCircle },
      { label: 'Engagement Score', value: '7.8/10', change: '+0.4', trend: 'up', icon: TrendingUp },
      { label: 'Time to Fill', value: '42 days', change: '-5 days', trend: 'down', icon: Calendar },
      { label: 'Retention Rate', value: '86.2%', change: '+1.2%', trend: 'up', icon: Users },
      { label: 'Female-to-Male Ratio', value: '42:58', change: '+2%', trend: 'up', icon: Users },
      { label: 'Revenue per Employee', value: '$285K', change: '+5.2%', trend: 'up', icon: DollarSign },
      { label: 'Avg Tenure', value: '4.2 years', change: '+0.3', trend: 'up', icon: Clock }
    ],
    'talent-mgmt': [
      { label: 'High Performers', value: '18%', change: '+2.1%', trend: 'up', icon: Award },
      { label: 'Succession Coverage', value: '67%', change: '+5%', trend: 'up', icon: Users },
      { label: 'Critical Role Turnover', value: '8.2%', change: '-1.8%', trend: 'down', icon: AlertCircle },
      { label: 'Promotion Rate', value: '12.5%', change: '+1.3%', trend: 'up', icon: TrendingUp },
      { label: '9-Box High Potential', value: '32', change: '+4', trend: 'up', icon: Target },
      { label: 'Mobility Willing', value: '42%', change: '+3%', trend: 'up', icon: Users },
      { label: 'IDP Completion', value: '78%', change: '+8%', trend: 'up', icon: BookOpen },
      { label: 'Disciplinary Actions', value: '12', change: '-3', trend: 'down', icon: Shield }
    ],
    acquisition: [
      { label: 'Open Positions', value: '47', change: '-12', trend: 'down', icon: Briefcase },
      { label: 'Offer Accept Rate', value: '84%', change: '+3%', trend: 'up', icon: UserCheck },
      { label: 'Cost per Hire', value: '$4,250', change: '-$320', trend: 'down', icon: DollarSign },
      { label: 'Quality of Hire', value: '8.2/10', change: '+0.3', trend: 'up', icon: Award },
      { label: 'Time to Fill', value: '42 days', change: '-5', trend: 'down', icon: Clock },
      { label: 'Candidate Pipeline', value: '1,250', change: '+125', trend: 'up', icon: Users },
      { label: 'Vacancy Rate', value: '3.2%', change: '-0.8%', trend: 'down', icon: AlertCircle },
      { label: 'Recruiter Productivity', value: '8.5/mo', change: '+1.2', trend: 'up', icon: TrendingUp }
    ],
    development: [
      { label: 'Training Completion', value: '82%', change: '+5%', trend: 'up', icon: BookOpen },
      { label: 'Avg Learning Hours', value: '38hrs', change: '+4hrs', trend: 'up', icon: Clock },
      { label: 'Career Progression', value: '32%', change: '+3%', trend: 'up', icon: TrendingUp },
      { label: 'Certification Rate', value: '67%', change: '+8%', trend: 'up', icon: Award },
      { label: 'Overdue Training', value: '76', change: '-12', trend: 'down', icon: AlertCircle },
      { label: 'Program Satisfaction', value: '8.1/10', change: '+0.2', trend: 'up', icon: Target },
      { label: 'Coach Utilization', value: '74%', change: '+6%', trend: 'up', icon: Users },
      { label: 'Skills Gap Closure', value: '58%', change: '+7%', trend: 'up', icon: TrendingUp }
    ],
    rewards: [
      { label: 'Total Compensation', value: '$142M', change: '+8.2%', trend: 'up', icon: DollarSign },
      { label: 'Pay Equity Index', value: '0.98', change: '+0.02', trend: 'up', icon: Target },
      { label: 'Benefits Utilization', value: '68%', change: '+4%', trend: 'up', icon: Award },
      { label: 'Turnover Cost', value: '$750K', change: '-$85K', trend: 'down', icon: AlertCircle },
      { label: 'Annual Increment Avg', value: '4.2%', change: '+0.3%', trend: 'up', icon: TrendingUp },
      { label: 'Variable Pay Elig.', value: '1,245', change: '+85', trend: 'up', icon: Users },
      { label: 'FTE vs Budget', value: '98%', change: '-2%', trend: 'down', icon: Users },
      { label: 'Overtime Hours', value: '12,450', change: '-850', trend: 'down', icon: Clock }
    ]
  };

  const renderKPICards = () => {
    const cards = kpiCards[activeModule] || kpiCards.overview;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-500 mb-1">{kpi.label}</p>
                <p className="text-2xl font-bold text-gray-900 mb-2">{kpi.value}</p>
                <div className="flex items-center">
                  {kpi.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 text-emerald-600 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {kpi.change}
                  </span>
                  <span className="text-xs text-gray-400 ml-2">vs prev period</span>
                </div>
              </div>
              <div className="bg-emerald-50 p-3 rounded-lg">
                <kpi.icon className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const InsightBox = ({ title, children, type = 'info' }) => {
    const styles = {
      info: 'bg-blue-50 border-blue-500 text-blue-900',
      success: 'bg-emerald-50 border-emerald-500 text-emerald-900',
      warning: 'bg-yellow-50 border-yellow-500 text-yellow-900',
      danger: 'bg-red-50 border-red-500 text-red-900'
    };

    return (
      <div className={`border-l-4 p-4 rounded-r-lg ${styles[type]}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {type === 'info' && <TrendingUp className="w-5 h-5 mr-2" />}
            {type === 'success' && <Target className="w-5 h-5 mr-2" />}
            {type === 'warning' && <AlertCircle className="w-5 h-5 mr-2" />}
            {type === 'danger' && <AlertCircle className="w-5 h-5 mr-2" />}
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-1">{title}</h4>
            <p className="text-sm">{children}</p>
          </div>
        </div>
      </div>
    );
  };

  const BusinessProposal = () => (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          People Intelligence Platform
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          A Comprehensive Business Proposal for an Internal HR Analytics Solution
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <div className="bg-emerald-50 px-4 py-2 rounded-lg">
            <span className="text-emerald-700 font-semibold">Talent Acquisition</span>
          </div>
          <div className="bg-blue-50 px-4 py-2 rounded-lg">
            <span className="text-blue-700 font-semibold">Talent Development</span>
          </div>
          <div className="bg-purple-50 px-4 py-2 rounded-lg">
            <span className="text-purple-700 font-semibold">Total Rewards</span>
          </div>
          <div className="bg-orange-50 px-4 py-2 rounded-lg">
            <span className="text-orange-700 font-semibold">Talent Management</span>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
        {[
          'executive-summary',
          'business-case',
          'platform-architecture',
          'data-infrastructure',
          'module-breakdown',
          'implementation-roadmap',
          'cost-benefit-analysis',
          'success-metrics'
        ].map(section => (
          <button
            key={section}
            onClick={() => setCurrentProposalSection(section)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              currentProposalSection === section
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </button>
        ))}
      </div>

      <div className="prose max-w-none">
        {currentProposalSection === 'executive-summary' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Current Challenge</h3>
                <p className="text-gray-700 mb-4">
                  Our HR teams currently operate with fragmented data systems, manual reporting processes, 
                  and limited analytical capabilities. This results in delayed insights, inconsistent metrics, 
                  and missed opportunities for strategic workforce planning.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 15+ disparate HR systems and data sources</li>
                  <li>• Manual Excel-based reporting consuming 120+ hours weekly</li>
                  <li>• 4-6 week delay in critical people metrics</li>
                  <li>• Inability to perform predictive analytics</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Proposed Solution</h3>
                <p className="text-gray-700 mb-4">
                  A unified People Intelligence Platform that centralizes all HR data, provides real-time 
                  analytics, and delivers actionable insights through role-specific dashboards for each 
                  HR center of excellence.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Single source of truth for all people data</li>
                  <li>• Real-time dashboards and automated reporting</li>
                  <li>• Predictive analytics and AI-driven insights</li>
                  <li>• Self-service analytics for HR business partners</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Key Benefits</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="font-semibold">30% Faster</p>
                    <p className="text-sm text-gray-600">Decision Making</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <DollarSign className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="font-semibold">$1.2M Annual</p>
                    <p className="text-sm text-gray-600">Cost Savings</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="font-semibold">25% Improvement</p>
                    <p className="text-sm text-gray-600">Employee Retention</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="font-semibold">40% Reduction</p>
                    <p className="text-sm text-gray-600">Manual Reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add other proposal sections as needed */}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setShowProposal(false)}
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          View Platform Prototype
        </button>
        <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
          Download Full Proposal (PDF)
        </button>
      </div>
    </div>
  );

  const FilterPanel = () => (
    <div className={`bg-white border border-gray-200 rounded-lg p-6 mb-6 transition-all duration-300 ${showFilters ? 'block' : 'hidden'}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Data Filters</h3>
        <button 
          onClick={() => setShowFilters(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(filterOptions).map(([key, options]) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}
            </label>
            <select
              value={filters[key]}
              onChange={(e) => handleFilterChange(key, e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-3 mt-4">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
          Reset Filters
        </button>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
          Apply Filters
        </button>
      </div>
    </div>
  );

  const PlatformHeader = () => (
    <header className="bg-white shadow-sm border-b border-gray-200 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BarChart3 className="w-8 h-8 text-emerald-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">People Intelligence Platform</h1>
              <p className="text-sm text-gray-500">Unified HR Analytics & Insights</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            
            <button className="flex items-center px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  const PlatformNavigation = () => (
    <nav className="bg-white shadow-sm rounded-lg mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`flex items-center px-4 py-3 border-b-2 transition-colors ${
                  activeModule === module.id
                    ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {module.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );

  const DataQualityIndicator = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Data Freshness: Real-time</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Completeness: 98.7%</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Last Updated: 15 min ago</span>
          </div>
        </div>
        <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
          Refresh Data
        </button>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      {renderKPICards()}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnover Trends & Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={turnoverData}>
              <defs>
                <linearGradient id="colorVoluntary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
              <Legend />
              <Area type="monotone" dataKey="voluntary" stroke="#10b981" fillOpacity={1} fill="url(#colorVoluntary)" name="Voluntary" />
              <Line type="monotone" dataKey="highPerformer" stroke="#ef4444" strokeWidth={2} name="High Performer" />
              <Bar dataKey="involuntary" fill="#94a3b8" name="Involuntary" />
            </ComposedChart>
          </ResponsiveContainer>
          <InsightBox title="Key Insight">
            Voluntary turnover has increased 14% compared to Q1. High performer attrition averaging 2.3% monthly is concerning - particularly in Engineering (3.8%) and Sales (3.2%) departments. Exit interviews reveal compensation and career growth as primary drivers.
          </InsightBox>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Score Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceDistribution}
                cx="50%"
                cy="45%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <InsightBox title="Performance Overview">
            50% of workforce meets or exceeds expectations. Focus needed on 12% underperformers - 68% are in roles &lt;18 months suggesting onboarding or role-fit issues.
          </InsightBox>
        </div>
      </div>

      {/* Add other dashboard sections as needed */}
    </div>
  );

  const renderTalentManagement = () => (
    <div className="space-y-6">
      {renderKPICards()}
      {/* Add talent management specific content */}
    </div>
  );

  const renderAcquisition = () => (
    <div className="space-y-6">
      {renderKPICards()}
      {/* Add talent acquisition specific content */}
    </div>
  );

  const renderDevelopment = () => (
    <div className="space-y-6">
      {renderKPICards()}
      {/* Add talent development specific content */}
    </div>
  );

  const renderRewards = () => (
    <div className="space-y-6">
      {renderKPICards()}
      {/* Add total rewards specific content */}
    </div>
  );

  if (showProposal) {
    return <BusinessProposal />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PlatformHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => setShowProposal(true)}
          className="mb-4 flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
        >
          ← Back to Business Proposal
        </button>

        <PlatformNavigation />
        <FilterPanel />
        <DataQualityIndicator />

        <main>
          {activeModule === 'overview' && renderOverview()}
          {activeModule === 'talent-mgmt' && renderTalentManagement()}
          {activeModule === 'acquisition' && renderAcquisition()}
          {activeModule === 'development' && renderDevelopment()}
          {activeModule === 'rewards' && renderRewards()}
        </main>

        <div className="fixed bottom-6 right-6 flex flex-col space-y-2">
          <button className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors">
            <Download className="w-5 h-5" />
          </button>
          <button className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowProposal(true)}
            className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          >
            <BarChart3 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Add the missing ArrowRight component
const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default PeopleAnalyticsPlatform;
