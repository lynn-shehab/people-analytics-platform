import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart,
  AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import {
  Users, TrendingUp, TrendingDown, Target, Award, DollarSign,
  UserCheck, AlertCircle, Calendar, Filter, Download, Bell,
  ChevronDown, ArrowUp, ArrowDown, BookOpen, Briefcase, Shield,
  Clock, Crown, Star, GraduationCap, Map, Building, Home,
  BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon
} from 'lucide-react';

const PeopleAnalyticsPlatform = () => {
  const [activeModule, setActiveModule] = useState('executive');
  const [showFilters, setShowFilters] = useState(false);

  // EXACT FILTERS AS SPECIFIED
  const [filters, setFilters] = useState({
    // General Filters
    timePeriod: 'Last 6 Months',
    dateRange: { start: '2024-01-01', end: '2024-06-30' },
    department: 'All Departments',
    team: 'All Teams',
    location: 'All Locations',
    region: 'All Regions',
    timeset: 'All',
    shift: 'All',
    jobScope: 'All',
    gender: 'All',
    nationality: 'All',
    grade: 'All',
    branchType: 'All',
    businessType: 'All',
    branch: 'All',
    division: 'All',
    employeeStatus: 'Active',
    brand: 'All',
    company: 'All',
    title: 'All',
    tenureRange: 'All',
    generation: 'All',
    ageRange: 'All',
    employeeId: '',
    employeeLifecycleStatus: 'All',
    employeeStatusDetailed: 'Active',

    // Talent Management Filters
    performanceRating: 'All',
    potentialRating: 'All',
    mobilityStatus: 'All',
    successorAvailability: 'All',
    skillSets: 'All',
    competencyStage: 'All',
    disciplinaryActions: 'All',
    exitType: 'All',
    exitReason: 'All',
    exitRegret: 'All',
    promotionTimeframe: 'All',
    transferType: 'All',
    absenteeismRate: 'All',

    // Talent Acquisition Filters
    sourceOfHire: 'All',
    onboardingStatus: 'All',
    hiringManager: 'All',
    recruiter: 'All',
    candidateStage: 'All',
    jobOfferDeclinedReason: 'All',

    // Talent Development Filters
    program: 'All',
    coach: 'All',
    category: 'All',
    trainingCompletionStatus: 'All',
    learningType: 'All',

    // Total Rewards Filters
    headcountType: 'All',
    benefitType: 'All',
    insuranceType: 'All',
    leaveType: 'All',
    variablePayEligibility: 'All'
  });

  // DATA MATCHING YOUR EXACT KPIS
  const data = {
    executive: {
      // Turnover metrics as specified
      turnover: [
        { month: 'Jan', overall: 12.5, highPerformer: 2.1, criticalRole: 1.8, retention: 87.5 },
        { month: 'Feb', overall: 11.8, highPerformer: 1.8, criticalRole: 1.5, retention: 88.2 },
        { month: 'Mar', overall: 13.2, highPerformer: 2.4, criticalRole: 2.1, retention: 86.8 },
        { month: 'Apr', overall: 12.1, highPerformer: 1.9, criticalRole: 1.7, retention: 87.9 },
        { month: 'May', overall: 14.5, highPerformer: 2.8, criticalRole: 2.4, retention: 85.5 },
        { month: 'Jun', overall: 13.8, highPerformer: 2.5, criticalRole: 2.2, retention: 86.2 }
      ],
      // Workforce Diversity Index as specified
      diversity: [
        { category: 'Gender Diversity', score: 72 },
        { category: 'Nationality Mix', score: 65 },
        { category: 'Age Distribution', score: 78 },
        { category: 'Inclusion Index', score: 7.8 }
      ],
      // Engagement Heatmap as specified
      engagementHeatmap: [
        { team: 'Engineering', score: 8.2 },
        { team: 'Sales', score: 7.8 },
        { team: 'Marketing', score: 8.5 },
        { team: 'Finance', score: 7.2 },
        { team: 'HR', score: 8.8 },
        { team: 'Operations', score: 7.6 }
      ],
      // Average Tenure as specified
      tenure: [
        { role: 'Engineering', tenure: 3.8 },
        { role: 'Sales', tenure: 2.5 },
        { role: 'Marketing', tenure: 4.2 },
        { role: 'Finance', tenure: 5.1 },
        { role: 'HR', tenure: 6.2 }
      ]
    },

    talentManagement: {
      // 9-Box Grid as specified
      nineBox: [
        { performance: 'High', potential: 'High', count: 32 },
        { performance: 'High', potential: 'Medium', count: 45 },
        { performance: 'High', potential: 'Low', count: 18 },
        { performance: 'Medium', potential: 'High', count: 28 },
        { performance: 'Medium', potential: 'Medium', count: 156 },
        { performance: 'Medium', potential: 'Low', count: 42 },
        { performance: 'Low', potential: 'High', count: 8 },
        { performance: 'Low', potential: 'Medium', count: 15 },
        { performance: 'Low', potential: 'Low', count: 12 }
      ],
      // Succession Readiness as specified
      succession: [
        { role: 'CEO', ready: 2, readyIn1: 1, noSuccessor: 0 },
        { role: 'VP Engineering', ready: 3, readyIn1: 2, noSuccessor: 0 },
        { role: 'VP Sales', ready: 2, readyIn1: 1, noSuccessor: 1 },
        { role: 'Regional Manager', ready: 5, readyIn1: 3, noSuccessor: 1 },
        { role: 'Department Head', ready: 8, readyIn1: 4, noSuccessor: 2 }
      ],
      // Performance Review Correlation with Turnover
      performanceTurnover: [
        { performance: 'Exceeds', turnover: 2.1 },
        { performance: 'Meets', turnover: 8.5 },
        { performance: 'Below', turnover: 18.2 }
      ],
      // Exit Reasons as specified
      exitReasons: [
        { reason: 'Better Compensation', count: 42, percentage: 28 },
        { reason: 'Career Growth', count: 38, percentage: 25 },
        { reason: 'Work-Life Balance', count: 24, percentage: 16 },
        { reason: 'Management Issues', count: 18, percentage: 12 },
        { reason: 'Relocation', count: 15, percentage: 10 },
        { reason: 'Other', count: 13, percentage: 9 }
      ]
    },

    talentAcquisition: {
      // Recruitment Funnel as specified
      funnel: [
        { stage: 'Applications', count: 1250, conversion: 100 },
        { stage: 'Screened', count: 485, conversion: 38.8 },
        { stage: 'Interviewed', count: 142, conversion: 11.4 },
        { stage: 'Offered', count: 38, conversion: 3.0 },
        { stage: 'Hired', count: 32, conversion: 2.6 }
      ],
      // Source Performance as specified
      sources: [
        { source: 'Employee Referrals', hires: 42, cost: 2100, quality: 8.9, timeToHire: 28 },
        { source: 'LinkedIn', hires: 38, cost: 5200, quality: 7.8, timeToHire: 45 },
        { source: 'Job Boards', hires: 24, cost: 3800, quality: 7.2, timeToHire: 52 },
        { source: 'Recruitment Agencies', hires: 18, cost: 8500, quality: 8.1, timeToHire: 35 }
      ],
      // Time to Hire Dashboard as specified
      timeToHire: [
        { role: 'Engineering', timeToFill: 52, timeToHire: 38, target: 45 },
        { role: 'Sales', timeToFill: 38, timeToHire: 28, target: 40 },
        { role: 'Marketing', timeToFill: 35, timeToHire: 25, target: 35 },
        { role: 'Finance', timeToFill: 45, timeToHire: 32, target: 42 }
      ],
      // Offer Acceptance & Decline as specified
      offerAcceptance: [
        { month: 'Jan', accepted: 85, declined: 15 },
        { month: 'Feb', accepted: 82, declined: 18 },
        { month: 'Mar', accepted: 88, declined: 12 },
        { month: 'Apr', accepted: 84, declined: 16 }
      ]
    },

    talentDevelopment: {
      // Training Completion Rate as specified
      training: [
        { program: 'Leadership Development', completed: 145, inProgress: 32, overdue: 8, completion: 78 },
        { program: 'Technical Skills', completed: 289, inProgress: 67, overdue: 15, completion: 77 },
        { program: 'Sales Enablement', completed: 178, inProgress: 42, overdue: 12, completion: 77 },
        { program: 'Compliance Training', completed: 512, inProgress: 45, overdue: 23, completion: 88 }
      ],
      // Competency Gap Analysis as specified
      competencies: [
        { skill: 'Leadership', current: 65, target: 80, gap: -15 },
        { skill: 'Data Analysis', current: 45, target: 70, gap: -25 },
        { skill: 'Project Management', current: 60, target: 75, gap: -15 },
        { skill: 'Technical Expertise', current: 80, target: 85, gap: -5 }
      ],
      // Career Progression Rate as specified
      careerProgression: [
        { category: 'Promoted After Training', value: 32 },
        { category: 'Lateral Moves', value: 18 },
        { category: 'Skill Enhancement', value: 25 },
        { category: 'No Movement', value: 25 }
      ],
      // Learning Hours as specified
      learningHours: [
        { department: 'Engineering', hours: 42, target: 40 },
        { department: 'Sales', hours: 38, target: 35 },
        { department: 'Marketing', hours: 45, target: 38 },
        { department: 'Finance', hours: 35, target: 32 }
      ]
    },

    totalRewards: {
      // Compensation Ratio as specified
      compensation: [
        { grade: 'Junior', market: 45000, internal: 43500, gap: -3.3 },
        { grade: 'Mid-Level', market: 65000, internal: 62000, gap: -4.6 },
        { grade: 'Senior', market: 85000, internal: 82000, gap: -3.5 },
        { grade: 'Manager', market: 125000, internal: 122000, gap: -2.4 }
      ],
      // Benefits Utilization Rate as specified
      benefits: [
        { benefit: 'Health Insurance', enrolled: 95, utilization: 92 },
        { benefit: 'Retirement Plan', enrolled: 78, utilization: 85 },
        { benefit: 'Learning Stipend', enrolled: 67, utilization: 78 },
        { benefit: 'Wellness Program', enrolled: 35, utilization: 58 }
      ],
      // Turnover Cost as specified
      turnoverCost: [
        { category: 'Recruitment Fees', cost: 185000 },
        { category: 'Training Costs', cost: 142000 },
        { category: 'Lost Productivity', cost: 328000 },
        { category: 'Onboarding', cost: 95000 }
      ],
      // Tenure Distribution as specified
      tenureDistribution: [
        { range: '<1 year', count: 385, turnover: 24.5 },
        { range: '1-2 years', count: 542, turnover: 18.2 },
        { range: '2-5 years', count: 892, turnover: 12.1 },
        { range: '5-10 years', count: 678, turnover: 8.5 }
      ]
    }
  };

  // EXACT KPI CARDS AS SPECIFIED
  const kpiCards = {
    executive: [
      { label: 'Employee Headcount', value: '2,847', change: '+3.2%', trend: 'up', icon: Users },
      { label: 'Turnover Rate', value: '13.8%', change: '-1.2%', trend: 'down', icon: TrendingDown },
      { label: 'Retention Rate', value: '86.2%', change: '+1.2%', trend: 'up', icon: Users },
      { label: 'Offer Acceptance Rate', value: '84%', change: '+3%', trend: 'up', icon: UserCheck },
      { label: 'Engagement Score', value: '7.8/10', change: '+0.4', trend: 'up', icon: TrendingUp },
      { label: 'Female-to-Male Ratio', value: '42:58', change: '+2%', trend: 'up', icon: Users }
    ],
    talentManagement: [
      { label: 'High Performer Turnover', value: '2.3%', change: '-0.4%', trend: 'down', icon: AlertCircle },
      { label: 'Critical Role Turnover', value: '8.2%', change: '-1.8%', trend: 'down', icon: AlertCircle },
      { label: 'Succession Readiness', value: '67%', change: '+5%', trend: 'up', icon: Target },
      { label: '9-Box High Potential', value: '32', change: '+4', trend: 'up', icon: Star },
      { label: 'Promotion Rate', value: '12.5%', change: '+1.3%', trend: 'up', icon: TrendingUp },
      { label: 'IDP Completion', value: '78%', change: '+8%', trend: 'up', icon: BookOpen }
    ],
    talentAcquisition: [
      { label: 'Time to Fill', value: '42 days', change: '-5 days', trend: 'down', icon: Clock },
      { label: 'Cost per Hire', value: '$4,250', change: '-$320', trend: 'down', icon: DollarSign },
      { label: 'Quality of Hire', value: '8.2/10', change: '+0.3', trend: 'up', icon: Award },
      { label: 'Vacancy Rate', value: '3.2%', change: '-0.8%', trend: 'down', icon: AlertCircle },
      { label: 'Candidate Pipeline', value: '1,250', change: '+125', trend: 'up', icon: Users },
      { label: 'Recruiter Productivity', value: '8.5/mo', change: '+1.2', trend: 'up', icon: TrendingUp }
    ],
    talentDevelopment: [
      { label: 'Training Completion', value: '82%', change: '+5%', trend: 'up', icon: BookOpen },
      { label: 'Avg Learning Hours', value: '38hrs', change: '+4hrs', trend: 'up', icon: Clock },
      { label: 'Career Progression', value: '32%', change: '+3%', trend: 'up', icon: TrendingUp },
      { label: 'Certification Rate', value: '67%', change: '+8%', trend: 'up', icon: Award },
      { label: 'Skills Gap Closure', value: '58%', change: '+7%', trend: 'up', icon: Target },
      { label: 'Program Satisfaction', value: '8.1/10', change: '+0.2', trend: 'up', icon: TrendingUp }
    ],
    totalRewards: [
      { label: 'Pay Equity Index', value: '0.98', change: '+0.02', trend: 'up', icon: Target },
      { label: 'Benefits Utilization', value: '68%', change: '+4%', trend: 'up', icon: Award },
      { label: 'Turnover Cost', value: '$750K', change: '-$85K', trend: 'down', icon: DollarSign },
      { label: 'Compensation Ratio', value: '97.2%', change: '+1.8%', trend: 'up', icon: TrendingUp },
      { label: 'Annual Increment Avg', value: '4.2%', change: '+0.3%', trend: 'up', icon: TrendingUp },
      { label: 'FTE vs Budget', value: '98%', change: '-2%', trend: 'down', icon: Users }
    ]
  };

  // Enhanced Filter Panel with ALL your specified filters
  const FilterPanel = () => {
    const [activeFilterCategory, setActiveFilterCategory] = useState('general');

    const filterCategories = {
      general: {
        title: 'General Filters',
        filters: [
          { key: 'timePeriod', label: 'Time Period', type: 'select', 
            options: ['Day', 'Week', 'Month', 'Quarter', 'Year', 'Calendar Year', 'Fiscal Year', 'Like-for-like', 'Date Range'] },
          { key: 'department', label: 'Department', type: 'select', 
            options: ['All Departments', 'Engineering', 'Sales', 'Marketing', 'Finance', 'HR', 'Operations', 'Product', 'Legal'] },
          { key: 'team', label: 'Team', type: 'select', 
            options: ['All Teams', 'Frontend', 'Backend', 'Sales Ops', 'Digital Marketing', 'Financial Planning', 'Talent Acquisition'] },
          { key: 'location', label: 'Location/Region', type: 'select', 
            options: ['All Locations', 'North America', 'EMEA', 'APAC', 'LATAM', 'Dubai', 'Beirut', 'Riyadh'] },
          { key: 'timeset', label: 'Timeset', type: 'select', 
            options: ['All', 'Full-time', 'Part-time'] },
          { key: 'shift', label: 'Shift', type: 'select', 
            options: ['All', 'AM', 'PM'] },
          { key: 'jobScope', label: 'Job Scope', type: 'select', 
            options: ['All', 'Managerial', 'Non-managerial'] },
          { key: 'gender', label: 'Gender', type: 'select', 
            options: ['All', 'Male', 'Female', 'Other'] },
          { key: 'nationality', label: 'Nationality', type: 'select', 
            options: ['All', 'Local', 'Expat', 'Multiple'] },
          { key: 'grade', label: 'Grade', type: 'select', 
            options: ['All', 'Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager', 'Director', 'VP'] },
          { key: 'employeeStatus', label: 'Employee Status', type: 'select', 
            options: ['All', 'Active', 'Inactive', 'Probation', 'Notice Period'] }
        ]
      },
      talentManagement: {
        title: 'Talent Management Filters',
        filters: [
          { key: 'performanceRating', label: 'Performance Rating', type: 'select', 
            options: ['All', 'Exceeds Expectations', 'Meets Expectations', 'Below Expectations'] },
          { key: 'potentialRating', label: 'Potential Rating', type: 'select', 
            options: ['All', 'High', 'Medium', 'Low'] },
          { key: 'mobilityStatus', label: 'Mobility Status', type: 'select', 
            options: ['All', 'Willing to Relocate', 'Open to Remote', 'Local Only'] },
          { key: 'successorAvailability', label: 'Successor Availability', type: 'select', 
            options: ['All', 'Ready Now', 'Ready in 1-2 Years', 'No Successor'] },
          { key: 'skillSets', label: 'Skill Sets/Certifications', type: 'select', 
            options: ['All', 'Technical', 'HIPO', 'AMP', 'Leadership'] },
          { key: 'disciplinaryActions', label: 'Disciplinary Actions', type: 'select', 
            options: ['All', 'With Actions', 'No Actions'] },
          { key: 'exitType', label: 'Type of Leaving', type: 'select', 
            options: ['All', 'Voluntary', 'Involuntary'] },
          { key: 'exitReason', label: 'Exit Reason', type: 'select', 
            options: ['All', 'Better Compensation', 'Career Growth', 'Work-Life Balance', 'Management Issues'] }
        ]
      },
      talentAcquisition: {
        title: 'Talent Acquisition Filters',
        filters: [
          { key: 'sourceOfHire', label: 'Source of Hire', type: 'select', 
            options: ['All', 'Employee Referrals', 'LinkedIn', 'Job Boards', 'Recruitment Agencies', 'Career Fairs'] },
          { key: 'onboardingStatus', label: 'Onboarding Status', type: 'select', 
            options: ['All', 'New Hires', 'Completed Onboarding', 'In Progress'] },
          { key: 'recruiter', label: 'Recruiter', type: 'select', 
            options: ['All', 'Sarah Mitchell', 'James Chen', 'Maria Garcia', 'Ahmed Hassan'] },
          { key: 'candidateStage', label: 'Candidate Stage', type: 'select', 
            options: ['All', 'Screened', 'Interviewed', 'Offered', 'On Hold'] }
        ]
      },
      talentDevelopment: {
        title: 'Talent Development Filters',
        filters: [
          { key: 'program', label: 'Program', type: 'select', 
            options: ['All', 'Leadership Development', 'Technical Skills', 'Sales Enablement', 'Compliance Training'] },
          { key: 'trainingCompletionStatus', label: 'Training Completion Status', type: 'select', 
            options: ['All', 'Completed', 'In Progress', 'Overdue'] },
          { key: 'learningType', label: 'Learning Type', type: 'select', 
            options: ['All', 'Classroom', 'Online', 'On-the-job', 'Coaching'] }
        ]
      },
      totalRewards: {
        title: 'Total Rewards Filters',
        filters: [
          { key: 'headcountType', label: 'Headcount Type', type: 'select', 
            options: ['All', 'Permanent', 'Contract'] },
          { key: 'benefitType', label: 'Type of Benefit', type: 'select', 
            options: ['All', 'Health Insurance', 'Retirement Plan', 'Learning Stipend', 'Wellness Program'] },
          { key: 'variablePayEligibility', label: 'Variable Pay Eligibility', type: 'select', 
            options: ['All', 'Eligible', 'Not Eligible'] }
        ]
      }
    };

    const handleFilterChange = (filterKey, value) => {
      setFilters(prev => ({ ...prev, [filterKey]: value }));
    };

    return (
      <div className={`bg-white border border-gray-200 rounded-lg p-6 mb-6 ${showFilters ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Advanced Data Filters</h3>
          <button 
            onClick={() => setShowFilters(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {Object.keys(filterCategories).map(category => (
            <button
              key={category}
              onClick={() => setActiveFilterCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                activeFilterCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filterCategories[category].title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterCategories[activeFilterCategory].filters.map(filter => (
            <div key={filter.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {filter.label}
              </label>
              <select
                value={filters[filter.key]}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {filter.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Reset Filters
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Apply Filters
          </button>
        </div>
      </div>
    );
  };

  // KPI Cards Component
  const renderKPICards = (module) => {
    const cards = kpiCards[module] || [];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cards.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
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
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Executive Dashboard - Following your exact specifications
  const ExecutiveDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('executive')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Turnover Trends - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnover Rate Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.executive.turnover}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="overall" stroke="#3b82f6" name="Overall Turnover" />
              <Line type="monotone" dataKey="highPerformer" stroke="#ef4444" name="High Performer" />
              <Line type="monotone" dataKey="criticalRole" stroke="#f59e0b" name="Critical Role" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Workforce Diversity Index - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Workforce Diversity Index</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.executive.diversity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engagement Heatmap - as specified */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Heatmap</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {data.executive.engagementHeatmap.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className={`p-4 rounded-lg ${
                item.score >= 8.0 ? 'bg-green-100 border border-green-200' :
                item.score >= 7.0 ? 'bg-yellow-100 border border-yellow-200' :
                'bg-red-100 border border-red-200'
              }`}>
                <p className="text-sm font-medium text-gray-700">{item.team}</p>
                <p className="text-2xl font-bold text-gray-900">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Average Tenure per Role - as specified */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Tenure per Role</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.executive.tenure}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tenure" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Talent Management Dashboard - as specified
  const TalentManagementDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-management')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 9-Box Grid - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">9-Box Grid</h3>
          <div className="grid grid-cols-3 gap-2">
            {data.talentManagement.nineBox.map((box, idx) => (
              <div key={idx} className={`p-3 rounded-lg text-center ${
                box.performance === 'High' && box.potential === 'High' ? 'bg-green-100 border-2 border-green-300' :
                box.performance === 'Low' && box.potential === 'Low' ? 'bg-red-100 border-2 border-red-300' :
                'bg-yellow-100 border-2 border-yellow-300'
              }`}>
                <div className="text-sm font-medium">{box.performance}</div>
                <div className="text-sm font-medium">{box.potential}</div>
                <div className="text-lg font-bold mt-1">{box.count}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Succession Readiness - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Succession Readiness</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.talentManagement.succession} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="role" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="ready" stackId="a" fill="#10b981" name="Ready Now" />
              <Bar dataKey="readyIn1" stackId="a" fill="#f59e0b" name="Ready in 1 Year" />
              <Bar dataKey="noSuccessor" stackId="a" fill="#ef4444" name="No Successor" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Exit Interviews - as specified */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Exit Reasons</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.talentManagement.exitReasons} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="reason" width={150} />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Talent Acquisition Dashboard - as specified
  const TalentAcquisitionDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-acquisition')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recruitment Funnel - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recruitment Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.talentAcquisition.funnel}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" name="Candidates" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Source Performance - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Candidate Source Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.talentAcquisition.sources}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="source" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hires" fill="#10b981" name="Hires" />
              <Bar dataKey="cost" fill="#ef4444" name="Cost" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Time-to-Hire Dashboard - as specified */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Time-to-Hire Dashboard</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.talentAcquisition.timeToHire}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="timeToFill" fill="#3b82f6" name="Time to Fill" />
            <Bar dataKey="timeToHire" fill="#10b981" name="Time to Hire" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Talent Development Dashboard - as specified
  const TalentDevelopmentDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-development')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Training Completion Rate - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Completion Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.talentDevelopment.training}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="program" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completion" fill="#3b82f6" name="Completion %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Competency Gap Analysis - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Competency Gap Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.talentDevelopment.competencies} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="skill" />
              <Tooltip />
              <Bar dataKey="current" fill="#3b82f6" name="Current" />
              <Bar dataKey="target" fill="#94a3b8" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Total Rewards Dashboard - as specified
  const TotalRewardsDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('total-rewards')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Compensation Ratio - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Compensation Ratio vs Market</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.totalRewards.compensation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grade" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="market" fill="#94a3b8" name="Market" />
              <Bar dataKey="internal" fill="#3b82f6" name="Internal" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Benefits Utilization Rate - as specified */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits Utilization Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.totalRewards.benefits}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ benefit, utilization }) => `${benefit}: ${utilization}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="utilization"
              >
                {data.totalRewards.benefits.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Turnover Cost - as specified */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnover Cost Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.totalRewards.turnoverCost}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Cost']} />
            <Bar dataKey="cost" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Platform Header
  const PlatformHeader = () => (
    <header className="bg-white shadow-sm border-b border-gray-200 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BarChart3 className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">People Analytics Platform</h1>
              <p className="text-sm text-gray-500">Enterprise HR Analytics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  // Platform Navigation
  const PlatformNavigation = () => {
    const modules = [
      { id: 'executive', name: 'Executive Overview', icon: Crown },
      { id: 'talent-management', name: 'Talent Management', icon: Users },
      { id: 'talent-acquisition', name: 'Talent Acquisition', icon: UserCheck },
      { id: 'talent-development', name: 'Talent Development', icon: GraduationCap },
      { id: 'total-rewards', name: 'Total Rewards', icon: DollarSign }
    ];

    return (
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
                      ? 'border-blue-500 text-blue-600 bg-blue-50'
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
  };

  // Main App Return
  return (
    <div className="min-h-screen bg-gray-50">
      <PlatformHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlatformNavigation />
        <FilterPanel />

        <main className="pb-12">
          {activeModule === 'executive' && <ExecutiveDashboard />}
          {activeModule === 'talent-management' && <TalentManagementDashboard />}
          {activeModule === 'talent-acquisition' && <TalentAcquisitionDashboard />}
          {activeModule === 'talent-development' && <TalentDevelopmentDashboard />}
          {activeModule === 'total-rewards' && <TotalRewardsDashboard />}
        </main>
      </div>
    </div>
  );
};

export default PeopleAnalyticsPlatform;
