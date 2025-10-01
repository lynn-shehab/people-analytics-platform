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
  Building, Home, Coffee, HeartPulse, Car, Plane, Gift, CreditCard, Laptop, Smartphone,
  Linkedin, Mail as MailIcon, Users as UsersIcon, Target as TargetIcon, Globe as GlobeIcon,
  BarChart4, LineChart as LineChartIcon, PieChart as PieChartIcon2, Activity
} from 'lucide-react';

const PeopleAnalyticsPlatform = () => {
  const [activeModule, setActiveModule] = useState('executive');
  const [showFilters, setShowFilters] = useState(false);

  // Enhanced Data Sets
  const talentAcquisitionData = {
    funnel: [
      { stage: 'Sourced', count: 1250, conversion: 100, dropoff: 0 },
      { stage: 'Screened', count: 485, conversion: 38.8, dropoff: 61.2 },
      { stage: 'Interviewed', count: 142, conversion: 11.4, dropoff: 27.4 },
      { stage: 'Offered', count: 38, conversion: 3.0, dropoff: 8.4 },
      { stage: 'Hired', count: 32, conversion: 2.6, dropoff: 1.4 }
    ],
    sources: [
      { source: 'Employee Referrals', hires: 42, cost: 2100, quality: 8.9, timeToHire: 28, satisfaction: 9.2, roi: 4.2 },
      { source: 'LinkedIn', hires: 38, cost: 5200, quality: 7.8, timeToHire: 45, satisfaction: 8.1, roi: 2.1 },
      { source: 'Job Boards', hires: 24, cost: 3800, quality: 7.2, timeToHire: 52, satisfaction: 7.5, roi: 1.8 },
      { source: 'Recruitment Agencies', hires: 18, cost: 8500, quality: 8.1, timeToHire: 35, satisfaction: 8.4, roi: 0.9 },
      { source: 'Career Fairs', hires: 12, cost: 2800, quality: 7.5, timeToHire: 48, satisfaction: 7.8, roi: 1.5 },
      { source: 'Campus Recruitment', hires: 8, cost: 3200, quality: 7.9, timeToHire: 55, satisfaction: 8.0, roi: 1.2 }
    ],
    timeMetrics: [
      { role: 'Engineering', timeToFill: 52, timeToHire: 38, target: 45, interviews: 4.2 },
      { role: 'Sales', timeToFill: 38, timeToHire: 28, target: 40, interviews: 3.1 },
      { role: 'Marketing', timeToFill: 35, timeToHire: 25, target: 35, interviews: 2.8 },
      { role: 'Finance', timeToFill: 45, timeToHire: 32, target: 42, interviews: 3.5 },
      { role: 'Operations', timeToFill: 42, timeToHire: 30, target: 38, interviews: 3.2 },
      { role: 'HR', timeToFill: 32, timeToHire: 24, target: 30, interviews: 2.5 }
    ],
    recruiterPerformance: [
      { recruiter: 'Sarah Mitchell', positions: 12, hires: 9, fillRate: 75, avgDays: 38, quality: 8.2, costPerHire: 3850 },
      { recruiter: 'James Chen', positions: 15, hires: 11, fillRate: 73, avgDays: 42, quality: 7.8, costPerHire: 4200 },
      { recruiter: 'Maria Garcia', positions: 10, hires: 8, fillRate: 80, avgDays: 35, quality: 8.5, costPerHire: 3250 },
      { recruiter: 'Ahmed Hassan', positions: 13, hires: 10, fillRate: 77, avgDays: 40, quality: 8.1, costPerHire: 3950 },
      { recruiter: 'Emma Johnson', positions: 11, hires: 7, fillRate: 64, avgDays: 48, quality: 7.5, costPerHire: 4500 }
    ]
  };

  const talentDevelopmentData = {
    training: [
      { program: 'Leadership Development', completed: 145, inProgress: 32, overdue: 8, satisfaction: 8.2, impact: 7.8, cost: 125000 },
      { program: 'Technical Skills', completed: 289, inProgress: 67, overdue: 15, satisfaction: 7.8, impact: 8.1, cost: 89000 },
      { program: 'Sales Enablement', completed: 178, inProgress: 42, overdue: 12, satisfaction: 8.5, impact: 8.3, cost: 67000 },
      { program: 'Compliance Training', completed: 512, inProgress: 45, overdue: 23, satisfaction: 7.5, impact: 7.2, cost: 45000 },
      { program: 'Soft Skills', completed: 234, inProgress: 56, overdue: 18, satisfaction: 8.0, impact: 7.9, cost: 78000 },
      { program: 'Digital Transformation', completed: 156, inProgress: 38, overdue: 9, satisfaction: 8.3, impact: 8.0, cost: 95000 }
    ],
    competencies: [
      { skill: 'Leadership', current: 65, target: 80, gap: -15, critical: true },
      { skill: 'Data Analysis', current: 45, target: 70, gap: -25, critical: true },
      { skill: 'Project Management', current: 60, target: 75, gap: -15, critical: true },
      { skill: 'Communication', current: 75, target: 85, gap: -10, critical: false },
      { skill: 'Technical Expertise', current: 80, target: 85, gap: -5, critical: false },
      { skill: 'Strategic Thinking', current: 55, target: 75, gap: -20, critical: true },
      { skill: 'Innovation', current: 48, target: 70, gap: -22, critical: true },
      { skill: 'Change Management', current: 52, target: 75, gap: -23, critical: true }
    ],
    careerProgression: [
      { category: 'Promoted After Training', value: 32, color: '#10b981', avgTime: '8.2 months' },
      { category: 'Lateral Moves', value: 18, color: '#3b82f6', avgTime: '6.5 months' },
      { category: 'Skill Enhancement', value: 25, color: '#8b5cf6', avgTime: '4.8 months' },
      { category: 'No Movement', value: 25, color: '#6b7280', avgTime: '12.1 months' }
    ],
    learningHours: [
      { department: 'Engineering', hours: 42, target: 40, completion: 88, satisfaction: 8.4 },
      { department: 'Sales', hours: 38, target: 35, completion: 92, satisfaction: 8.1 },
      { department: 'Marketing', hours: 45, target: 38, completion: 85, satisfaction: 8.7 },
      { department: 'Finance', hours: 35, target: 32, completion: 78, satisfaction: 7.8 },
      { department: 'HR', hours: 40, target: 36, completion: 82, satisfaction: 8.5 },
      { department: 'Operations', hours: 28, target: 30, completion: 72, satisfaction: 7.5 }
    ]
  };

  const totalRewardsData = {
    compensation: [
      { grade: 'Junior', market: 45000, internal: 43500, gap: -3.3, employees: 245 },
      { grade: 'Mid-Level', market: 65000, internal: 62000, gap: -4.6, employees: 568 },
      { grade: 'Senior', market: 85000, internal: 82000, gap: -3.5, employees: 423 },
      { grade: 'Lead', market: 105000, internal: 108000, gap: 2.9, employees: 189 },
      { grade: 'Manager', market: 125000, internal: 122000, gap: -2.4, employees: 156 },
      { grade: 'Director', market: 155000, internal: 158000, gap: 1.9, employees: 67 },
      { grade: 'VP', market: 195000, internal: 202000, gap: 3.6, employees: 23 }
    ],
    benefits: [
      { benefit: 'Health Insurance', enrolled: 95, cost: 8500, satisfaction: 8.8, utilization: 92 },
      { benefit: 'Retirement Plan', enrolled: 78, cost: 12000, satisfaction: 8.2, utilization: 85 },
      { benefit: 'Gym Membership', enrolled: 42, cost: 600, satisfaction: 7.5, utilization: 65 },
      { benefit: 'Learning Stipend', enrolled: 67, cost: 2500, satisfaction: 8.9, utilization: 78 },
      { benefit: 'Transportation', enrolled: 58, cost: 1200, satisfaction: 7.8, utilization: 72 },
      { benefit: 'Wellness Program', enrolled: 35, cost: 800, satisfaction: 8.1, utilization: 58 },
      { benefit: 'Childcare', enrolled: 28, cost: 4500, satisfaction: 9.2, utilization: 95 }
    ],
    turnoverCost: [
      { category: 'Recruitment Fees', cost: 185000, percentage: 25, trend: 'down' },
      { category: 'Training & Onboarding', cost: 237000, percentage: 32, trend: 'up' },
      { category: 'Lost Productivity', cost: 328000, percentage: 44, trend: 'stable' },
      { category: 'Separation Costs', cost: 45000, percentage: 6, trend: 'down' }
    ],
    payEquity: [
      { department: 'Engineering', ratio: 0.98, gap: -2.3, trend: 'improving' },
      { department: 'Sales', ratio: 0.95, gap: -5.2, trend: 'declining' },
      { department: 'Marketing', ratio: 1.02, gap: 1.8, trend: 'stable' },
      { department: 'Finance', ratio: 0.97, gap: -3.1, trend: 'improving' },
      { department: 'HR', ratio: 1.05, gap: 4.8, trend: 'improving' },
      { department: 'Operations', ratio: 0.94, gap: -6.2, trend: 'declining' }
    ]
  };

  const engagementData = {
    scores: [
      { department: 'Engineering', engagement: 8.2, satisfaction: 7.9, wellbeing: 8.1, inclusion: 8.4 },
      { department: 'Sales', engagement: 7.8, satisfaction: 7.5, wellbeing: 7.6, inclusion: 7.9 },
      { department: 'Marketing', engagement: 8.5, satisfaction: 8.2, wellbeing: 8.3, inclusion: 8.6 },
      { department: 'Finance', engagement: 7.2, satisfaction: 6.9, wellbeing: 7.1, inclusion: 7.4 },
      { department: 'HR', engagement: 8.8, satisfaction: 8.5, wellbeing: 8.6, inclusion: 8.9 },
      { department: 'Operations', engagement: 7.6, satisfaction: 7.3, wellbeing: 7.4, inclusion: 7.7 }
    ],
    drivers: [
      { factor: 'Career Growth', score: 6.9, impact: 0.42, trend: 'improving' },
      { factor: 'Compensation', score: 7.8, impact: 0.38, trend: 'stable' },
      { factor: 'Work Environment', score: 8.2, impact: 0.35, trend: 'improving' },
      { factor: 'Management', score: 7.5, impact: 0.41, trend: 'declining' },
      { factor: 'Work-Life Balance', score: 7.1, impact: 0.33, trend: 'stable' },
      { factor: 'Recognition', score: 6.8, impact: 0.29, trend: 'improving' }
    ],
    sentiment: [
      { category: 'Positive', count: 1245, percentage: 68, trend: 'up' },
      { category: 'Neutral', count: 385, percentage: 21, trend: 'stable' },
      { category: 'Negative', count: 217, percentage: 12, trend: 'down' }
    ]
  };

  // Enhanced KPI Cards for All Modules
  const kpiCards = {
    executive: [
      { label: 'Total Headcount', value: '2,847', change: '+3.2%', trend: 'up', icon: Users, color: 'blue' },
      { label: 'Turnover Rate', value: '13.8%', change: '-1.2%', trend: 'down', icon: TrendingDown, color: 'red' },
      { label: 'Engagement Score', value: '7.8/10', change: '+0.4', trend: 'up', icon: TrendingUp, color: 'green' },
      { label: 'Revenue per Employee', value: '$285K', change: '+5.2%', trend: 'up', icon: DollarSign, color: 'emerald' }
    ],
    'talent-management': [
      { label: '9-Box High Potential', value: '32', change: '+4', trend: 'up', icon: Star, color: 'green' },
      { label: 'Succession Readiness', value: '67%', change: '+5%', trend: 'up', icon: Target, color: 'blue' },
      { label: 'Critical Role Turnover', value: '8.2%', change: '-1.8%', trend: 'down', icon: AlertCircle, color: 'red' },
      { label: 'Promotion Rate', value: '12.5%', change: '+1.3%', trend: 'up', icon: TrendingUp, color: 'purple' }
    ],
    'talent-acquisition': [
      { label: 'Time to Fill', value: '42 days', change: '-5 days', trend: 'down', icon: Clock, color: 'green' },
      { label: 'Cost per Hire', value: '$4,250', change: '-$320', trend: 'down', icon: DollarSign, color: 'blue' },
      { label: 'Offer Accept Rate', value: '84%', change: '+3%', trend: 'up', icon: UserCheck, color: 'emerald' },
      { label: 'Quality of Hire', value: '8.2/10', change: '+0.3', trend: 'up', icon: Award, color: 'purple' }
    ],
    'talent-development': [
      { label: 'Training Completion', value: '82%', change: '+5%', trend: 'up', icon: BookOpen, color: 'green' },
      { label: 'Avg Learning Hours', value: '38hrs', change: '+4hrs', trend: 'up', icon: Clock, color: 'blue' },
      { label: 'Career Progression', value: '32%', change: '+3%', trend: 'up', icon: TrendingUp, color: 'emerald' },
      { label: 'Skills Gap Closure', value: '58%', change: '+7%', trend: 'up', icon: Target, color: 'purple' }
    ],
    'total-rewards': [
      { label: 'Pay Equity Index', value: '0.98', change: '+0.02', trend: 'up', icon: Target, color: 'green' },
      { label: 'Benefits Utilization', value: '68%', change: '+4%', trend: 'up', icon: Award, color: 'blue' },
      { label: 'Turnover Cost', value: '$750K', change: '-$85K', trend: 'down', icon: DollarSign, color: 'red' },
      { label: 'Compensation Ratio', value: '97.2%', change: '+1.8%', trend: 'up', icon: TrendingUp, color: 'emerald' }
    ]
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

  // Talent Acquisition Dashboard
  const TalentAcquisitionDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-acquisition')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recruitment Funnel */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900">Recruitment Funnel Analysis</h3>
            <div className="text-sm text-gray-500">Overall Conversion: 2.6%</div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <FunnelChart>
              <Tooltip />
              <Funnel
                dataKey="count"
                data={talentAcquisitionData.funnel}
                nameKey="stage"
              >
                <LabelList dataKey="conversion" position="right" formatter={(value) => `${value}%`} />
                <LabelList dataKey="stage" position="inside" fill="#fff" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
          <InsightBox title="Funnel Efficiency" type="info" icon={Target}>
            Screening to interview conversion at 29.3% indicates potential process bottlenecks. 
            Interview to offer rate of 26.8% is healthy. Recommend streamlining screening process.
          </InsightBox>
        </div>

        {/* Source Performance */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Source Performance Dashboard</h3>
          <div className="space-y-4">
            {talentAcquisitionData.sources.map((source, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    source.source === 'Employee Referrals' ? 'bg-green-100 text-green-600' :
                    source.source === 'LinkedIn' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {source.source === 'Employee Referrals' && <UsersIcon className="w-5 h-5" />}
                    {source.source === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                    {source.source === 'Job Boards' && <GlobeIcon className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{source.source}</p>
                    <p className="text-sm text-gray-500">{source.hires} hires · ${source.cost} cost</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-emerald-600">ROI: {source.roi}x</p>
                  <p className="text-sm text-gray-500">Quality: {source.quality}/10</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Time to Hire Metrics */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Time to Hire by Role</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={talentAcquisitionData.timeMetrics}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="role" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
            <Bar dataKey="timeToFill" fill="#3b82f6" name="Time to Fill (days)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="timeToHire" fill="#10b981" name="Time to Hire (days)" radius={[4, 4, 0, 0]} />
            <Line type="monotone" dataKey="target" stroke="#ef4444" strokeWidth={2} name="Target" strokeDasharray="5 5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Talent Development Dashboard
  const TalentDevelopmentDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-development')}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Training Completion */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Training Program Performance</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={talentDevelopmentData.training}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="program" angle={-45} textAnchor="end" height={80} stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#10b981" name="Completed" stackId="a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="inProgress" fill="#3b82f6" name="In Progress" stackId="a" />
              <Bar dataKey="overdue" fill="#ef4444" name="Overdue" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Competency Gap Analysis */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Competency Gap Analysis</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={talentDevelopmentData.competencies} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis type="number" domain={[0, 100]} stroke="#6b7280" />
              <YAxis type="category" dataKey="skill" width={120} stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" fill="#3b82f6" name="Current Level" radius={[0, 4, 4, 0]} />
              <Bar dataKey="target" fill="#10b981" name="Target Level" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Learning Hours & Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Hours vs Target</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={talentDevelopmentData.learningHours}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="department" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="hours" fill="#3b82f6" name="Actual Hours" radius={[4, 4, 0, 0]} />
              <Bar dataKey="target" fill="#94a3b8" name="Target Hours" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Career Progression Impact</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={talentDevelopmentData.careerProgression}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ category, value }) => `${category}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {talentDevelopmentData.careerProgression.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
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
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Compensation vs Market Analysis</h3>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={totalRewardsData.compensation}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="grade" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Bar dataKey="market" fill="#94a3b8" name="Market Rate" radius={[4, 4, 0, 0]} />
              <Bar dataKey="internal" fill="#3b82f6" name="Internal Rate" radius={[4, 4, 0, 0]} />
              <Line type="monotone" dataKey="gap" stroke="#ef4444" strokeWidth={2} name="Gap %" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Benefits Utilization */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits Utilization & Satisfaction</h3>
          <div className="space-y-4">
            {totalRewardsData.benefits.map((benefit, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{benefit.benefit}</span>
                  <span className="text-sm font-medium text-emerald-600">{benefit.enrolled}% enrolled</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Utilization: {benefit.utilization}%</span>
                  <span>Satisfaction: {benefit.satisfaction}/10</span>
                  <span>Cost: ${benefit.cost}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-emerald-500 h-2 rounded-full" 
                    style={{ width: `${benefit.utilization}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pay Equity & Turnover Cost */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Pay Equity Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={totalRewardsData.payEquity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis dataKey="department" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="ratio" fill="#3b82f6" name="Pay Equity Ratio" radius={[4, 4, 0, 0]}>
                {totalRewardsData.payEquity.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.ratio >= 1 ? '#10b981' : entry.ratio >= 0.95 ? '#f59e0b' : '#ef4444'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Turnover Cost Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={totalRewardsData.turnoverCost}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ category, percentage }) => `${category}: ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="cost"
              >
                {totalRewardsData.turnoverCost.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444'][index]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Cost']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Engagement Dashboard
  const EngagementDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
          <div className="text-3xl font-bold text-emerald-600 mb-2">7.8</div>
          <div className="text-sm text-gray-500">Overall Engagement Score</div>
          <div className="text-xs text-emerald-600 mt-1">+0.4 from last quarter</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">8.1</div>
          <div className="text-sm text-gray-500">Employee Satisfaction</div>
          <div className="text-xs text-blue-600 mt-1">+0.2 from last quarter</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">68%</div>
          <div className="text-sm text-gray-500">Positive Sentiment</div>
          <div className="text-xs text-purple-600 mt-1">+5% from last quarter</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Engagement Drivers */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Engagement Drivers & Impact</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={engagementData.drivers} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis type="number" domain={[0, 10]} stroke="#6b7280" />
              <YAxis type="category" dataKey="factor" width={120} stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="score" fill="#3b82f6" name="Score" radius={[0, 4, 4, 0]}>
                {engagementData.drivers.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.trend === 'improving' ? '#10b981' : entry.trend === 'declining' ? '#ef4444' : '#f59e0b'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Department Comparison */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Department Engagement Comparison</h3>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={engagementData.scores}>
              <PolarGrid stroke="#f3f4f6" />
              <PolarAngleAxis dataKey="department" stroke="#6b7280" />
              <PolarRadiusAxis angle={30} domain={[0, 10]} stroke="#6b7280" />
              <Radar name="Engagement" dataKey="engagement" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Radar name="Satisfaction" dataKey="satisfaction" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Radar name="Wellbeing" dataKey="wellbeing" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Update the main component to include all dashboards
  // ... (keep all the existing components like PlatformHeader, FilterPanel, etc.)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header and Navigation components remain the same */}
      <main className="pb-12">
        {activeModule === 'executive' && <ExecutiveDashboard />}
        {activeModule === 'talent-management' && <TalentManagementDashboard />}
        {activeModule === 'talent-acquisition' && <TalentAcquisitionDashboard />}
        {activeModule === 'talent-development' && <TalentDevelopmentDashboard />}
        {activeModule === 'total-rewards' && <TotalRewardsDashboard />}
        {activeModule === 'engagement' && <EngagementDashboard />}
        {activeModule === 'predictive' && (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Predictive Analytics</h2>
            <p className="text-gray-600">AI-powered insights and predictive modeling coming soon!</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PeopleAnalyticsPlatform;
