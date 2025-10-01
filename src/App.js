import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ComposedChart,
  Treemap, Sankey, FunnelChart, Funnel, LabelList, RadialBarChart, RadialBar, SunburstChart
} from 'recharts';
import { 
  Users, TrendingUp, Target, Award, DollarSign, UserCheck, AlertCircle, Calendar, Filter, Download, Bell, Search, 
  Settings, ChevronDown, ArrowUp, ArrowDown, BookOpen, Briefcase, Shield, Clock, TrendingDown, Zap, Database, 
  BarChart3, Cpu, Workflow, PieChart as PieChartIcon, Map, Crown, Star, Heart, Brain, GraduationCap, 
  Lightbulb, Rocket, ShieldAlert, ThumbsUp, ThumbsDown, Eye, EyeOff, Mail, Phone, MapPin, Globe,
  Building, Home, Coffee, HeartPulse, Car, Plane, Gift, CreditCard, Laptop, Smartphone
} from 'lucide-react';

const PeopleAnalyticsPlatform = () => {
  const [activeModule, setActiveModule] = useState('executive');
  const [showFilters, setShowFilters] = useState(false);
  const [timeRange, setTimeRange] = useState('last6months');

  // Comprehensive Filter State
  const [filters, setFilters] = useState({
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
    lifecycleStatus: 'All',
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
    source: 'All',
    onboardingStatus: 'All',
    hiringManager: 'All',
    recruiter: 'All',
    candidateStage: 'All',
    program: 'All',
    coach: 'All',
    category: 'All',
    trainingStatus: 'All',
    learningType: 'All',
    headcountType: 'All',
    benefitType: 'All',
    insuranceType: 'All',
    leaveType: 'All',
    variablePay: 'All'
  });

  // Enhanced Data Sets with Realistic Enterprise Data
  const executiveData = {
    turnover: [
      { month: 'Jan', overall: 12.5, voluntary: 9.2, involuntary: 3.3, highPerformer: 2.1, criticalRole: 1.8 },
      { month: 'Feb', overall: 11.8, voluntary: 8.5, involuntary: 3.3, highPerformer: 1.8, criticalRole: 1.5 },
      { month: 'Mar', overall: 13.2, voluntary: 10.1, involuntary: 3.1, highPerformer: 2.4, criticalRole: 2.1 },
      { month: 'Apr', overall: 12.1, voluntary: 9.0, involuntary: 3.1, highPerformer: 1.9, criticalRole: 1.7 },
      { month: 'May', overall: 14.5, voluntary: 11.2, involuntary: 3.3, highPerformer: 2.8, criticalRole: 2.4 },
      { month: 'Jun', overall: 13.8, voluntary: 10.5, involuntary: 3.3, highPerformer: 2.5, criticalRole: 2.2 }
    ],
    diversity: [
      { category: 'Gender', male: 58, female: 39, other: 3 },
      { category: 'Generation', genz: 12, millennials: 45, genx: 32, boomers: 11 },
      { category: 'Nationality', local: 65, expat: 35 }
    ],
    engagement: [
      { department: 'Engineering', score: 8.2, trend: 'up' },
      { department: 'Sales', score: 7.8, trend: 'stable' },
      { department: 'Marketing', score: 8.5, trend: 'up' },
      { department: 'Finance', score: 7.2, trend: 'down' },
      { department: 'HR', score: 8.8, trend: 'up' },
      { department: 'Operations', score: 7.6, trend: 'stable' }
    ]
  };

  const talentManagementData = {
    nineBox: [
      { performance: 'High', potential: 'High', count: 32, color: '#10b981' },
      { performance: 'High', potential: 'Medium', count: 45, color: '#22c55e' },
      { performance: 'High', potential: 'Low', count: 18, color: '#84cc16' },
      { performance: 'Medium', potential: 'High', count: 28, color: '#eab308' },
      { performance: 'Medium', potential: 'Medium', count: 156, color: '#f59e0b' },
      { performance: 'Medium', potential: 'Low', count: 42, color: '#f97316' },
      { performance: 'Low', potential: 'High', count: 8, color: '#ef4444' },
      { performance: 'Low', potential: 'Medium', count: 15, color: '#dc2626' },
      { performance: 'Low', potential: 'Low', count: 12, color: '#991b1b' }
    ],
    succession: [
      { role: 'CEO', ready: 2, readyIn1: 1, noSuccessor: 0, criticality: 'Critical' },
      { role: 'VP Engineering', ready: 3, readyIn1: 2, noSuccessor: 0, criticality: 'High' },
      { role: 'VP Sales', ready: 2, readyIn1: 1, noSuccessor: 1, criticality: 'High' },
      { role: 'Regional Manager', ready: 5, readyIn1: 3, noSuccessor: 1, criticality: 'Medium' },
      { role: 'Department Head', ready: 8, readyIn1: 4, noSuccessor: 2, criticality: 'Medium' }
    ],
    mobility: [
      { type: 'Promotions', count: 45, trend: 'up' },
      { type: 'Lateral Moves', count: 28, trend: 'up' },
      { type: 'Department Transfers', count: 32, trend: 'stable' },
      { type: 'Location Transfers', count: 15, trend: 'down' }
    ]
  };

  const talentAcquisitionData = {
    funnel: [
      { stage: 'Sourced', count: 1250, conversion: 100 },
      { stage: 'Screened', count: 485, conversion: 38.8 },
      { stage: 'Interviewed', count: 142, conversion: 11.4 },
      { stage: 'Offered', count: 38, conversion: 3.0 },
      { stage: 'Hired', count: 32, conversion: 2.6 }
    ],
    sources: [
      { source: 'Employee Referrals', hires: 42, cost: 2100, quality: 8.9, timeToHire: 28, satisfaction: 9.2 },
      { source: 'LinkedIn', hires: 38, cost: 5200, quality: 7.8, timeToHire: 45, satisfaction: 8.1 },
      { source: 'Job Boards', hires: 24, cost: 3800, quality: 7.2, timeToHire: 52, satisfaction: 7.5 },
      { source: 'Recruitment Agencies', hires: 18, cost: 8500, quality: 8.1, timeToHire: 35, satisfaction: 8.4 },
      { source: 'Career Fairs', hires: 12, cost: 2800, quality: 7.5, timeToHire: 48, satisfaction: 7.8 }
    ],
    timeMetrics: [
      { role: 'Engineering', timeToFill: 52, timeToHire: 38, target: 45 },
      { role: 'Sales', timeToFill: 38, timeToHire: 28, target: 40 },
      { role: 'Marketing', timeToFill: 35, timeToHire: 25, target: 35 },
      { role: 'Finance', timeToFill: 45, timeToHire: 32, target: 42 },
      { role: 'Operations', timeToFill: 42, timeToHire: 30, target: 38 }
    ]
  };

  const talentDevelopmentData = {
    training: [
      { program: 'Leadership Development', completed: 145, inProgress: 32, overdue: 8, satisfaction: 8.2, impact: 7.8 },
      { program: 'Technical Skills', completed: 289, inProgress: 67, overdue: 15, satisfaction: 7.8, impact: 8.1 },
      { program: 'Sales Enablement', completed: 178, inProgress: 42, overdue: 12, satisfaction: 8.5, impact: 8.3 },
      { program: 'Compliance Training', completed: 512, inProgress: 45, overdue: 23, satisfaction: 7.5, impact: 7.2 },
      { program: 'Soft Skills', completed: 234, inProgress: 56, overdue: 18, satisfaction: 8.0, impact: 7.9 }
    ],
    competencies: [
      { skill: 'Leadership', current: 65, target: 80, gap: -15 },
      { skill: 'Data Analysis', current: 45, target: 70, gap: -25 },
      { skill: 'Project Management', current: 60, target: 75, gap: -15 },
      { skill: 'Communication', current: 75, target: 85, gap: -10 },
      { skill: 'Technical Expertise', current: 80, target: 85, gap: -5 },
      { skill: 'Strategic Thinking', current: 55, target: 75, gap: -20 }
    ],
    careerProgression: [
      { category: 'Promoted After Training', value: 32, color: '#10b981' },
      { category: 'Lateral Moves', value: 18, color: '#3b82f6' },
      { category: 'Skill Enhancement', value: 25, color: '#8b5cf6' },
      { category: 'No Movement', value: 25, color: '#6b7280' }
    ]
  };

  const totalRewardsData = {
    compensation: [
      { grade: 'Junior', market: 45000, internal: 43500, gap: -3.3 },
      { grade: 'Mid-Level', market: 65000, internal: 62000, gap: -4.6 },
      { grade: 'Senior', market: 85000, internal: 82000, gap: -3.5 },
      { grade: 'Lead', market: 105000, internal: 108000, gap: 2.9 },
      { grade: 'Manager', market: 125000, internal: 122000, gap: -2.4 },
      { grade: 'Director', market: 155000, internal: 158000, gap: 1.9 }
    ],
    benefits: [
      { benefit: 'Health Insurance', enrolled: 95, cost: 8500, satisfaction: 8.8 },
      { benefit: 'Retirement Plan', enrolled: 78, cost: 12000, satisfaction: 8.2 },
      { benefit: 'Gym Membership', enrolled: 42, cost: 600, satisfaction: 7.5 },
      { benefit: 'Learning Stipend', enrolled: 67, cost: 2500, satisfaction: 8.9 },
      { benefit: 'Transportation', enrolled: 58, cost: 1200, satisfaction: 7.8 },
      { benefit: 'Wellness Program', enrolled: 35, cost: 800, satisfaction: 8.1 }
    ],
    turnoverCost: [
      { category: 'Recruitment Fees', cost: 185000, percentage: 25 },
      { category: 'Training & Onboarding', cost: 237000, percentage: 32 },
      { category: 'Lost Productivity', cost: 328000, percentage: 44 },
      { category: 'Separation Costs', cost: 45000, percentage: 6 }
    ]
  };

  // Enhanced Modules with Icons
  const modules = [
    { id: 'executive', name: 'Executive Overview', icon: Crown, color: 'purple' },
    { id: 'talent-management', name: 'Talent Management', icon: Users, color: 'blue' },
    { id: 'talent-acquisition', name: 'Talent Acquisition', icon: UserCheck, color: 'green' },
    { id: 'talent-development', name: 'Talent Development', icon: GraduationCap, color: 'orange' },
    { id: 'total-rewards', name: 'Total Rewards', icon: DollarSign, color: 'emerald' },
    { id: 'engagement', name: 'Engagement', icon: Heart, color: 'pink' },
    { id: 'predictive', name: 'Predictive Analytics', icon: Brain, color: 'indigo' }
  ];

  // Enhanced KPI Cards for Each Module
  const kpiCards = {
    executive: [
      { label: 'Total Headcount', value: '2,847', change: '+3.2%', trend: 'up', icon: Users, color: 'blue' },
      { label: 'Turnover Rate', value: '13.8%', change: '-1.2%', trend: 'down', icon: TrendingDown, color: 'red' },
      { label: 'Engagement Score', value: '7.8/10', change: '+0.4', trend: 'up', icon: TrendingUp, color: 'green' },
      { label: 'Revenue per Employee', value: '$285K', change: '+5.2%', trend: 'up', icon: DollarSign, color: 'emerald' },
      { label: 'Female-to-Male Ratio', value: '42:58', change: '+2%', trend: 'up', icon: Users, color: 'pink' },
      { label: 'Avg Tenure', value: '4.2 years', change: '+0.3', trend: 'up', icon: Clock, color: 'purple' },
      { label: 'High Performer Ratio', value: '18%', change: '+2.1%', trend: 'up', icon: Star, color: 'yellow' },
      { label: 'Succession Coverage', value: '67%', change: '+5%', trend: 'up', icon: Target, color: 'indigo' }
    ],
    'talent-management': [
      { label: '9-Box High Potential', value: '32', change: '+4', trend: 'up', icon: Star, color: 'green' },
      { label: 'Succession Readiness', value: '67%', change: '+5%', trend: 'up', icon: Target, color: 'blue' },
      { label: 'Critical Role Turnover', value: '8.2%', change: '-1.8%', trend: 'down', icon: AlertCircle, color: 'red' },
      { label: 'Promotion Rate', value: '12.5%', change: '+1.3%', trend: 'up', icon: TrendingUp, color: 'purple' },
      { label: 'Mobility Rate', value: '8.7%', change: '+2.1%', trend: 'up', icon: Map, color: 'orange' },
      { label: 'IDP Completion', value: '78%', change: '+8%', trend: 'up', icon: BookOpen, color: 'emerald' },
      { label: 'PIP Success Rate', value: '68%', change: '+12%', trend: 'up', icon: Shield, color: 'yellow' },
      { label: 'Disciplinary Cases', value: '12', change: '-3', trend: 'down', icon: ShieldAlert, color: 'red' }
    ]
  };

  // Custom Color Palettes
  const colorPalettes = {
    primary: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16', '#F97316'],
    sequential: ['#EFF6FF', '#DBEAFE', '#BFDBFE', '#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8'],
    qualitative: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6B7280']
  };

  // Enhanced Insight Box Component
  const InsightBox = ({ title, children, type = 'info', icon: Icon }) => {
    const styles = {
      info: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-900', icon: 'text-blue-600' },
      success: { bg: 'bg-emerald-50', border: 'border-emerald-500', text: 'text-emerald-900', icon: 'text-emerald-600' },
      warning: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-900', icon: 'text-yellow-600' },
      danger: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-900', icon: 'text-red-600' },
      insight: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-900', icon: 'text-purple-600' }
    };

    const style = styles[type] || styles.info;

    return (
      <div className={`${style.bg} border-l-4 ${style.border} p-4 rounded-r-lg mb-4`}>
        <div className="flex items-start">
          {Icon && <Icon className={`w-5 h-5 mr-3 mt-0.5 ${style.icon}`} />}
          <div>
            <h4 className={`font-semibold text-sm mb-1 ${style.text}`}>{title}</h4>
            <p className={`text-sm ${style.text}`}>{children}</p>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced KPI Card Component
  const renderKPICards = (module) => {
    const cards = kpiCards[module] || kpiCards.executive;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((kpi, idx) => {
          const Icon = kpi.icon;
          const colorMap = {
            blue: 'bg-blue-50 text-blue-600',
            green: 'bg-emerald-50 text-emerald-600',
            red: 'bg-red-50 text-red-600',
            purple: 'bg-purple-50 text-purple-600',
            orange: 'bg-orange-50 text-orange-600',
            yellow: 'bg-yellow-50 text-yellow-600',
            pink: 'bg-pink-50 text-pink-600',
            indigo: 'bg-indigo-50 text-indigo-600',
            emerald: 'bg-emerald-50 text-emerald-600'
          };
          
          return (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 mb-1">{kpi.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {kpi.value}
                  </p>
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
                <div className={`p-3 rounded-xl ${colorMap[kpi.color]}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Executive Dashboard Component
  const ExecutiveDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('executive')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Turnover Trends */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Turnover Trends & Analysis</h3>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
                <option>Last 6 Months</option>
                <option>Last Year</option>
                <option>YTD</option>
              </select>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={executiveData.turnover}>
              <defs>
                <linearGradient id="colorVoluntary" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorHighPerformer" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Legend />
              <Area type="monotone" dataKey="voluntary" stroke="#10b981" fillOpacity={1} fill="url(#colorVoluntary)" name="Voluntary Turnover" />
              <Bar dataKey="involuntary" fill="#94a3b8" name="Involuntary Turnover" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="highPerformer" stroke="#ef4444" strokeWidth={3} name="High Performer Turnover" dot={{ fill: '#ef4444', strokeWidth: 2, r: 6 }} />
              <Line type="monotone" dataKey="criticalRole" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" name="Critical Role Turnover" dot={{ fill: '#f59e0b', r: 4 }} />
            </ComposedChart>
          </ResponsiveContainer>
          <InsightBox title="Turnover Analysis" type="warning" icon={AlertCircle}>
            High performer turnover increased to 2.5% in June, particularly in Engineering (3.8%) and Sales (3.2%). 
            Exit interviews reveal compensation (28%) and career growth (25%) as primary drivers. Recommend immediate 
            retention strategy review for key talent.
          </InsightBox>
        </div>

        {/* Diversity & Inclusion */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Diversity & Inclusion Dashboard</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {executiveData.diversity.map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-semibold text-gray-700 mb-3">{item.category}</h4>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={Object.entries(item).filter(([key]) => key !== 'category').map(([key, value]) => ({ name: key, value }))}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {Object.entries(item).filter(([key]) => key !== 'category').map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colorPalettes.qualitative[index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Inclusion Index: 7.8/10</h4>
            <p className="text-sm text-gray-600">
              +0.3 from last quarter. Strong performance in psychological safety and belonging metrics.
              Focus needed on equitable promotion rates across demographic groups.
            </p>
          </div>
        </div>
      </div>

      {/* Engagement Heatmap */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Engagement Score Heatmap</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {executiveData.engagement.map((dept, idx) => (
            <div key={idx} className="text-center">
              <div className={`p-4 rounded-xl ${
                dept.score >= 8.5 ? 'bg-green-100 border border-green-200' :
                dept.score >= 7.5 ? 'bg-yellow-100 border border-yellow-200' :
                'bg-red-100 border border-red-200'
              }`}>
                <p className="text-sm font-medium text-gray-700">{dept.department}</p>
                <p className={`text-2xl font-bold ${
                  dept.score >= 8.5 ? 'text-green-700' :
                  dept.score >= 7.5 ? 'text-yellow-700' :
                  'text-red-700'
                }`}>
                  {dept.score}
                </p>
                <div className={`inline-flex items-center text-xs ${
                  dept.trend === 'up' ? 'text-green-600' :
                  dept.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {dept.trend === 'up' ? <ArrowUp className="w-3 h-3 mr-1" /> :
                   dept.trend === 'down' ? <ArrowDown className="w-3 h-3 mr-1" /> : null}
                  {dept.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Talent Management Dashboard
  const TalentManagementDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-management')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 9-Box Grid Visualization */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">9-Box Talent Grid</h3>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                type="category" 
                dataKey="performance" 
                name="Performance"
                stroke="#6b7280"
              />
              <YAxis 
                type="category" 
                dataKey="potential" 
                name="Potential"
                stroke="#6b7280"
              />
              <ZAxis 
                type="number" 
                dataKey="count" 
                range={[50, 500]}
                name="Count"
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                        <p className="font-semibold">{`${payload[0].payload.performance} Performance`}</p>
                        <p className="font-semibold">{`${payload[0].payload.potential} Potential`}</p>
                        <p className="text-sm text-gray-600">{`Count: ${payload[0].value} employees`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Scatter data={talentManagementData.nineBox} fill="#8884d8">
                {talentManagementData.nineBox.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="count" position="top" />
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Succession Readiness */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Succession Readiness by Role</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={talentManagementData.succession} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis 
                type="category" 
                dataKey="role" 
                width={120}
                stroke="#6b7280"
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="ready" stackId="a" fill="#10b981" name="Ready Now" radius={[0, 4, 4, 0]} />
              <Bar dataKey="readyIn1" stackId="a" fill="#f59e0b" name="Ready in 1 Year" />
              <Bar dataKey="noSuccessor" stackId="a" fill="#ef4444" name="No Successor" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Enhanced Filter Panel
  const FilterPanel = () => (
    <div className={`bg-white border border-gray-200 rounded-xl p-6 mb-6 transition-all duration-300 ${showFilters ? 'block' : 'hidden'}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Advanced Data Filters</h3>
        <button 
          onClick={() => setShowFilters(false)}
          className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100"
        >
          ×
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Time & Date Filters */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 text-sm">Time & Date</h4>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Last 6 Months</option>
            <option>Last Year</option>
            <option>YTD</option>
            <option>Custom Range</option>
          </select>
        </div>

        {/* Department & Team */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 text-sm">Organization</h4>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Departments</option>
            <option>Engineering</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>HR</option>
          </select>
        </div>

        {/* Employee Demographics */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 text-sm">Demographics</h4>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Genders</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Performance & Potential */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700 text-sm">Talent Metrics</h4>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Performance Ratings</option>
            <option>Exceeds Expectations</option>
            <option>Meets Expectations</option>
            <option>Below Expectations</option>
          </select>
        </div>
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

  // Enhanced Header
  const PlatformHeader = () => (
    <header className="bg-white shadow-sm border-b border-gray-200 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Crown className="w-8 h-8 text-purple-600 mr-3" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">People Intelligence Platform</h1>
              <p className="text-sm text-gray-500">Enterprise HR Analytics & Strategic Insights</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            
            <button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  // Enhanced Navigation
  const PlatformNavigation = () => (
    <nav className="bg-white shadow-sm rounded-xl mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1">
          {modules.map((module) => {
            const Icon = module.icon;
            const colorMap = {
              purple: 'border-purple-500 text-purple-600 bg-purple-50',
              blue: 'border-blue-500 text-blue-600 bg-blue-50',
              green: 'border-green-500 text-green-600 bg-green-50',
              orange: 'border-orange-500 text-orange-600 bg-orange-50',
              emerald: 'border-emerald-500 text-emerald-600 bg-emerald-50',
              pink: 'border-pink-500 text-pink-600 bg-pink-50',
              indigo: 'border-indigo-500 text-indigo-600 bg-indigo-50'
            };
            
            return (
              <button
                key={module.id}
                onClick={() => setActiveModule(module.id)}
                className={`flex items-center px-6 py-4 border-b-2 transition-all duration-300 ${
                  activeModule === module.id
                    ? `${colorMap[module.color]} font-semibold`
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {module.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );

  // Data Quality Indicator
  const DataQualityIndicator = () => (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
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
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
          <Zap className="w-4 h-4 mr-1" />
          Refresh Data
        </button>
      </div>
    </div>
  );

  // Main Render
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <PlatformHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlatformNavigation />
        <FilterPanel />
        <DataQualityIndicator />

        <main className="pb-12">
          {activeModule === 'executive' && <ExecutiveDashboard />}
          {activeModule === 'talent-management' && <TalentManagementDashboard />}
          {activeModule === 'talent-acquisition' && <div>Acquisition Dashboard - Coming Soon</div>}
          {activeModule === 'talent-development' && <div>Development Dashboard - Coming Soon</div>}
          {activeModule === 'total-rewards' && <div>Rewards Dashboard - Coming Soon</div>}
          {activeModule === 'engagement' && <div>Engagement Dashboard - Coming Soon</div>}
          {activeModule === 'predictive' && <div>Predictive Analytics - Coming Soon</div>}
        </main>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col space-y-3">
          <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110">
            <Download className="w-5 h-5" />
          </button>
          <button className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110">
            <Filter className="w-5 h-5" />
          </button>
          <button className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 hover:scale-110">
            <Brain className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleAnalyticsPlatform;
