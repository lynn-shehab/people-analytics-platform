import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ComposedChart,
  Treemap, FunnelChart, Funnel, LabelList, RadialBarChart, RadialBar
} from 'recharts';
import { 
  Users, TrendingUp, Target, Award, DollarSign, UserCheck, AlertCircle, Calendar, Filter, Download, Bell, 
  ChevronDown, ArrowUp, ArrowDown, BookOpen, Briefcase, Shield, Clock, Crown, Star, Heart, Brain, GraduationCap,
  Map, Building, Home, Zap, BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon
} from 'lucide-react';

const PeopleAnalyticsPlatform = () => {
  const [activeModule, setActiveModule] = useState('executive');
  const [showFilters, setShowFilters] = useState(false);

  // Comprehensive Filter State - Following your exact specifications
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

  // Enhanced Data Sets matching your KPIs
  const executiveData = {
    turnover: [
      { month: 'Jan', overall: 12.5, voluntary: 9.2, involuntary: 3.3, highPerformer: 2.1, criticalRole: 1.8 },
      { month: 'Feb', overall: 11.8, voluntary: 8.5, involuntary: 3.3, highPerformer: 1.8, criticalRole: 1.5 },
      { month: 'Mar', overall: 13.2, voluntary: 10.1, involuntary: 3.1, highPerformer: 2.4, criticalRole: 2.1 },
      { month: 'Apr', overall: 12.1, voluntary: 9.0, involuntary: 3.1, highPerformer: 1.9, criticalRole: 1.7 },
      { month: 'May', overall: 14.5, voluntary: 11.2, involuntary: 3.3, highPerformer: 2.8, criticalRole: 2.4 },
      { month: 'Jun', overall: 13.8, voluntary: 10.5, involuntary: 3.3, highPerformer: 2.5, criticalRole: 2.2 }
    ],
    workforceMetrics: [
      { metric: 'Headcount', current: 2847, previous: 2750, change: 3.5 },
      { metric: 'Turnover Rate', current: 13.8, previous: 15.0, change: -8.0 },
      { metric: 'Retention Rate', current: 86.2, previous: 85.0, change: 1.4 },
      { metric: 'Engagement Score', current: 7.8, previous: 7.4, change: 5.4 },
      { metric: 'Female-to-Male Ratio', current: 42, previous: 40, change: 5.0 }
    ],
    diversity: [
      { category: 'Gender Diversity', score: 72, target: 80 },
      { category: 'Nationality Mix', score: 65, target: 75 },
      { category: 'Age Distribution', score: 78, target: 85 },
      { category: 'Inclusion Index', score: 7.8, target: 8.5 }
    ]
  };

  const talentManagementData = {
    nineBox: [
      { performance: 'High', potential: 'High', count: 32, percentage: 11.2 },
      { performance: 'High', potential: 'Medium', count: 45, percentage: 15.8 },
      { performance: 'High', potential: 'Low', count: 18, percentage: 6.3 },
      { performance: 'Medium', potential: 'High', count: 28, percentage: 9.8 },
      { performance: 'Medium', potential: 'Medium', count: 156, percentage: 54.7 },
      { performance: 'Medium', potential: 'Low', count: 42, percentage: 14.7 },
      { performance: 'Low', potential: 'High', count: 8, percentage: 2.8 },
      { performance: 'Low', potential: 'Medium', count: 15, percentage: 5.3 },
      { performance: 'Low', potential: 'Low', count: 12, percentage: 4.2 }
    ],
    succession: [
      { role: 'CEO', ready: 2, readyIn1: 1, noSuccessor: 0, criticality: 'Critical' },
      { role: 'VP Engineering', ready: 3, readyIn1: 2, noSuccessor: 0, criticality: 'High' },
      { role: 'VP Sales', ready: 2, readyIn1: 1, noSuccessor: 1, criticality: 'High' },
      { role: 'Regional Manager', ready: 5, readyIn1: 3, noSuccessor: 1, criticality: 'Medium' },
      { role: 'Department Head', ready: 8, readyIn1: 4, noSuccessor: 2, criticality: 'Medium' }
    ],
    performance: [
      { rating: 'Exceeds Expectations', count: 285, percentage: 10 },
      { rating: 'Meets Expectations', count: 1995, percentage: 70 },
      { rating: 'Below Expectations', count: 285, percentage: 10 },
      { rating: 'Needs Improvement', count: 285, percentage: 10 }
    ]
  };

  const talentAcquisitionData = {
    funnel: [
      { stage: 'Applications', count: 1250, conversion: 100 },
      { stage: 'Screened', count: 485, conversion: 38.8 },
      { stage: 'Interviewed', count: 142, conversion: 11.4 },
      { stage: 'Offered', count: 38, conversion: 3.0 },
      { stage: 'Hired', count: 32, conversion: 2.6 }
    ],
    sources: [
      { source: 'Employee Referrals', candidates: 245, hires: 42, cost: 2100, quality: 8.9 },
      { source: 'LinkedIn', candidates: 385, hires: 38, cost: 5200, quality: 7.8 },
      { source: 'Job Boards', candidates: 420, hires: 24, cost: 3800, quality: 7.2 },
      { source: 'Recruitment Agencies', candidates: 85, hires: 18, cost: 8500, quality: 8.1 },
      { source: 'Career Fairs', candidates: 115, hires: 12, cost: 2800, quality: 7.5 }
    ],
    timeMetrics: [
      { role: 'Engineering', timeToFill: 52, timeToHire: 38, target: 45 },
      { role: 'Sales', timeToFill: 38, timeToHire: 28, target: 40 },
      { role: 'Marketing', timeToFill: 35, timeToHire: 25, target: 35 },
      { role: 'Finance', timeToFill: 45, timeToHire: 32, target: 42 }
    ]
  };

  const talentDevelopmentData = {
    training: [
      { program: 'Leadership Development', completed: 145, inProgress: 32, overdue: 8, completion: 78 },
      { program: 'Technical Skills', completed: 289, inProgress: 67, overdue: 15, completion: 77 },
      { program: 'Sales Enablement', completed: 178, inProgress: 42, overdue: 12, completion: 77 },
      { program: 'Compliance Training', completed: 512, inProgress: 45, overdue: 23, completion: 88 },
      { program: 'Soft Skills', completed: 234, inProgress: 56, overdue: 18, completion: 76 }
    ],
    competencies: [
      { skill: 'Leadership', current: 65, target: 80, gap: -15 },
      { skill: 'Data Analysis', current: 45, target: 70, gap: -25 },
      { skill: 'Project Management', current: 60, target: 75, gap: -15 },
      { skill: 'Technical Expertise', current: 80, target: 85, gap: -5 }
    ]
  };

  const totalRewardsData = {
    compensation: [
      { grade: 'Junior', market: 45000, internal: 43500, gap: -3.3 },
      { grade: 'Mid-Level', market: 65000, internal: 62000, gap: -4.6 },
      { grade: 'Senior', market: 85000, internal: 82000, gap: -3.5 },
      { grade: 'Manager', market: 125000, internal: 122000, gap: -2.4 }
    ],
    benefits: [
      { benefit: 'Health Insurance', enrolled: 95, utilization: 92 },
      { benefit: 'Retirement Plan', enrolled: 78, utilization: 85 },
      { benefit: 'Learning Stipend', enrolled: 67, utilization: 78 },
      { benefit: 'Wellness Program', enrolled: 35, utilization: 58 }
    ]
  };

  // Enhanced Filter Panel matching your exact specifications
  const FilterPanel = () => {
    const [activeFilterCategory, setActiveFilterCategory] = useState('general');

    const filterCategories = {
      general: {
        title: 'General Filters',
        filters: [
          { key: 'timePeriod', label: 'Time Period', type: 'select', options: ['Day', 'Week', 'Month', 'Quarter', 'Year', 'Like-for-like', 'Date Range'] },
          { key: 'department', label: 'Department', type: 'select', options: ['All Departments', 'Engineering', 'Sales', 'Marketing', 'Finance', 'HR', 'Operations'] },
          { key: 'team', label: 'Team', type: 'select', options: ['All Teams', 'Frontend', 'Backend', 'Sales Ops', 'Digital Marketing'] },
          { key: 'location', label: 'Location/Region', type: 'select', options: ['All Locations', 'North America', 'EMEA', 'APAC', 'LATAM'] },
          { key: 'timeset', label: 'Timeset', type: 'select', options: ['All', 'Full-time', 'Part-time'] },
          { key: 'shift', label: 'Shift', type: 'select', options: ['All', 'AM', 'PM'] },
          { key: 'jobScope', label: 'Job Scope', type: 'select', options: ['All', 'Managerial', 'Non-managerial'] },
          { key: 'gender', label: 'Gender', type: 'select', options: ['All', 'Male', 'Female', 'Other'] },
          { key: 'nationality', label: 'Nationality', type: 'select', options: ['All', 'Local', 'Expat'] },
          { key: 'grade', label: 'Grade', type: 'select', options: ['All', 'Junior', 'Mid-Level', 'Senior', 'Lead', 'Manager', 'Director'] }
        ]
      },
      talentManagement: {
        title: 'Talent Management Filters',
        filters: [
          { key: 'performanceRating', label: 'Performance Rating', type: 'select', options: ['All', 'Exceeds Expectations', 'Meets Expectations', 'Below Expectations'] },
          { key: 'potentialRating', label: 'Potential Rating', type: 'select', options: ['All', 'High', 'Medium', 'Low'] },
          { key: 'mobilityStatus', label: 'Mobility Status', type: 'select', options: ['All', 'Willing to Relocate', 'Open to Remote', 'Local Only'] },
          { key: 'successorAvailability', label: 'Successor Availability', type: 'select', options: ['All', 'Ready Now', 'Ready in 1-2 Years', 'No Successor'] },
          { key: 'disciplinaryActions', label: 'Disciplinary Actions', type: 'select', options: ['All', 'With Actions', 'No Actions'] },
          { key: 'exitType', label: 'Type of Leaving', type: 'select', options: ['All', 'Voluntary', 'Involuntary'] },
          { key: 'exitReason', label: 'Exit Reason', type: 'select', options: ['All', 'Better Compensation', 'Career Growth', 'Work-Life Balance'] }
        ]
      },
      talentAcquisition: {
        title: 'Talent Acquisition Filters',
        filters: [
          { key: 'sourceOfHire', label: 'Source of Hire', type: 'select', options: ['All', 'Employee Referrals', 'LinkedIn', 'Job Boards', 'Recruitment Agencies'] },
          { key: 'onboardingStatus', label: 'Onboarding Status', type: 'select', options: ['All', 'New Hires', 'Completed Onboarding'] },
          { key: 'recruiter', label: 'Recruiter', type: 'select', options: ['All', 'Sarah Mitchell', 'James Chen', 'Maria Garcia'] },
          { key: 'candidateStage', label: 'Candidate Stage', type: 'select', options: ['All', 'Screened', 'Interviewed', 'Offered', 'On Hold'] }
        ]
      },
      talentDevelopment: {
        title: 'Talent Development Filters',
        filters: [
          { key: 'program', label: 'Program', type: 'select', options: ['All', 'Leadership Development', 'Technical Skills', 'Sales Enablement'] },
          { key: 'trainingCompletionStatus', label: 'Training Status', type: 'select', options: ['All', 'Completed', 'In Progress', 'Overdue'] },
          { key: 'learningType', label: 'Learning Type', type: 'select', options: ['All', 'Classroom', 'Online', 'On-the-job', 'Coaching'] }
        ]
      },
      totalRewards: {
        title: 'Total Rewards Filters',
        filters: [
          { key: 'headcountType', label: 'Headcount Type', type: 'select', options: ['All', 'Permanent', 'Contract'] },
          { key: 'benefitType', label: 'Type of Benefit', type: 'select', options: ['All', 'Health Insurance', 'Retirement Plan', 'Learning Stipend'] },
          { key: 'variablePayEligibility', label: 'Variable Pay Eligibility', type: 'select', options: ['All', 'Eligible', 'Not Eligible'] }
        ]
      }
    };

    const handleFilterChange = (filterKey, value) => {
      setFilters(prev => ({ ...prev, [filterKey]: value }));
    };

    return (
      <div className={`bg-white border border-gray-200 rounded-lg p-6 mb-6 transition-all duration-300 ${showFilters ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Advanced Data Filters</h3>
          <button 
            onClick={() => setShowFilters(false)}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100"
          >
            ×
          </button>
        </div>

        {/* Filter Categories */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {Object.keys(filterCategories).map(category => (
            <button
              key={category}
              onClick={() => setActiveFilterCategory(category)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                activeFilterCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filterCategories[category].title}
            </button>
          ))}
        </div>

        {/* Active Filter Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterCategories[activeFilterCategory].filters.map(filter => (
            <div key={filter.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {filter.label}
              </label>
              <select
                value={filters[filter.key]}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {filter.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Reset Filters
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
    );
  };

  // Enhanced KPI Cards matching your specifications
  const renderKPICards = (module) => {
    const kpiData = {
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
        { label: '9-Box High Potential', value: '32', change: '+4', trend: 'up', icon: Star }
      ],
      talentAcquisition: [
        { label: 'Time to Fill', value: '42 days', change: '-5 days', trend: 'down', icon: Clock },
        { label: 'Cost per Hire', value: '$4,250', change: '-$320', trend: 'down', icon: DollarSign },
        { label: 'Quality of Hire', value: '8.2/10', change: '+0.3', trend: 'up', icon: Award },
        { label: 'Vacancy Rate', value: '3.2%', change: '-0.8%', trend: 'down', icon: AlertCircle }
      ],
      talentDevelopment: [
        { label: 'Training Completion', value: '82%', change: '+5%', trend: 'up', icon: BookOpen },
        { label: 'Avg Learning Hours', value: '38hrs', change: '+4hrs', trend: 'up', icon: Clock },
        { label: 'Career Progression', value: '32%', change: '+3%', trend: 'up', icon: TrendingUp },
        { label: 'Skills Gap Closure', value: '58%', change: '+7%', trend: 'up', icon: Target }
      ],
      totalRewards: [
        { label: 'Pay Equity Index', value: '0.98', change: '+0.02', trend: 'up', icon: Target },
        { label: 'Benefits Utilization', value: '68%', change: '+4%', trend: 'up', icon: Award },
        { label: 'Turnover Cost', value: '$750K', change: '-$85K', trend: 'down', icon: DollarSign },
        { label: 'Compensation Ratio', value: '97.2%', change: '+1.8%', trend: 'up', icon: TrendingUp }
      ]
    };

    const cards = kpiData[module] || kpiData.executive;

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cards.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
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

  // Executive Dashboard - Following your specifications exactly
  const ExecutiveDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('executive')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Turnover Trends */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnover Rate Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={executiveData.turnover}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="overall" stroke="#3b82f6" strokeWidth={2} name="Overall Turnover" />
              <Line type="monotone" dataKey="highPerformer" stroke="#ef4444" strokeWidth={2} name="High Performer" />
              <Line type="monotone" dataKey="criticalRole" stroke="#f59e0b" strokeWidth={2} name="Critical Role" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Workforce Diversity */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Workforce Diversity Index</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={executiveData.diversity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="category" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" name="Current Score" />
              <Bar dataKey="target" fill="#94a3b8" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engagement Heatmap */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Heatmap by Department</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Engineering', 'Sales', 'Marketing', 'Finance', 'HR', 'Operations'].map(dept => (
            <div key={dept} className="text-center">
              <div className="bg-green-100 border border-green-200 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-700">{dept}</p>
                <p className="text-2xl font-bold text-green-700">7.8</p>
                <p className="text-xs text-green-600">+0.3</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Talent Management Dashboard - Fixed and enhanced
  const TalentManagementDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-management')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 9-Box Grid */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">9-Box Talent Grid</h3>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {talentManagementData.nineBox.map((box, idx) => (
              <div key={idx} className={`p-3 rounded-lg text-center ${
                box.performance === 'High' && box.potential === 'High' ? 'bg-green-100 border border-green-300' :
                box.performance === 'Low' && box.potential === 'Low' ? 'bg-red-100 border border-red-300' :
                'bg-yellow-100 border border-yellow-300'
              }`}>
                <div className="text-sm font-medium">{box.performance} Perf</div>
                <div className="text-sm font-medium">{box.potential} Pot</div>
                <div className="text-lg font-bold">{box.count}</div>
                <div className="text-xs text-gray-600">{box.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Succession Readiness */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Succession Readiness</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={talentManagementData.succession} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#9ca3af" />
              <YAxis type="category" dataKey="role" width={100} stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Bar dataKey="ready" stackId="a" fill="#10b981" name="Ready Now" />
              <Bar dataKey="readyIn1" stackId="a" fill="#f59e0b" name="Ready in 1 Year" />
              <Bar dataKey="noSuccessor" stackId="a" fill="#ef4444" name="No Successor" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Distribution */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={talentManagementData.performance}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ rating, percentage }) => `${rating}: ${percentage}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="count"
            >
              {talentManagementData.performance.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={['#10b981', '#3b82f6', '#f59e0b', '#ef4444'][index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Talent Acquisition Dashboard
  const TalentAcquisitionDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-acquisition')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recruitment Funnel */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recruitment Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={talentAcquisitionData.funnel}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="stage" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" name="Candidates" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Source Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Candidate Source Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={talentAcquisitionData.sources}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="source" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="hires" fill="#10b981" name="Hires" />
              <Bar dataKey="cost" fill="#ef4444" name="Cost" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Talent Development Dashboard
  const TalentDevelopmentDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-development')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Training Completion */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Completion Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={talentDevelopmentData.training}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="program" angle={-45} textAnchor="end" height={80} stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="completion" fill="#3b82f6" name="Completion %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Competency Gaps */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Competency Gap Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={talentDevelopmentData.competencies} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#9ca3af" />
              <YAxis type="category" dataKey="skill" stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="current" fill="#3b82f6" name="Current" />
              <Bar dataKey="target" fill="#94a3b8" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Total Rewards Dashboard
  const TotalRewardsDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('total-rewards')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Compensation Analysis */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Compensation Ratio vs Market</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={totalRewardsData.compensation}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="grade" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="market" fill="#94a3b8" name="Market" />
              <Bar dataKey="internal" fill="#3b82f6" name="Internal" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Benefits Utilization */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Benefits Utilization Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={totalRewardsData.benefits}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ benefit, utilization }) => `${benefit}: ${utilization}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="utilization"
              >
                {totalRewardsData.benefits.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Main Platform Components
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
