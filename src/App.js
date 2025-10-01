import React, { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ScatterChart, Scatter, ComposedChart,
  FunnelChart, Funnel, LabelList
} from 'recharts';
import { 
  Users, TrendingUp, Target, Award, DollarSign, UserCheck, AlertCircle, Calendar, Filter, Download, Bell, 
  ChevronDown, ArrowUp, ArrowDown, BookOpen, Briefcase, Shield, Clock, TrendingDown, Zap, 
  Crown, Star, Heart, Brain, GraduationCap, BarChart3, Menu, X
} from 'lucide-react';

const PeopleAnalyticsPlatform = () => {
  const [activeModule, setActiveModule] = useState('executive');
  const [showFilters, setShowFilters] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Muted Green Color Theme
  const colorTheme = {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d'
    },
    gradients: {
      primary: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      light: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
      chart: 'linear-gradient(180deg, #22c55e 0%, #16a34a 100%)',
      area: 'linear-gradient(180deg, rgba(34, 197, 94, 0.3) 0%, rgba(34, 197, 94, 0.1) 100%)'
    }
  };

  // Enhanced Data Sets with Green Theme
  const executiveData = {
    turnover: [
      { month: 'Jan', overall: 12.5, voluntary: 9.2, involuntary: 3.3, highPerformer: 2.1 },
      { month: 'Feb', overall: 11.8, voluntary: 8.5, involuntary: 3.3, highPerformer: 1.8 },
      { month: 'Mar', overall: 13.2, voluntary: 10.1, involuntary: 3.1, highPerformer: 2.4 },
      { month: 'Apr', overall: 12.1, voluntary: 9.0, involuntary: 3.1, highPerformer: 1.9 },
      { month: 'May', overall: 14.5, voluntary: 11.2, involuntary: 3.3, highPerformer: 2.8 },
      { month: 'Jun', overall: 13.8, voluntary: 10.5, involuntary: 3.3, highPerformer: 2.5 }
    ]
  };

  const talentManagementData = {
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
    ]
  };

  const talentAcquisitionData = {
    funnel: [
      { stage: 'Sourced', count: 1250, conversion: 100 },
      { stage: 'Screened', count: 485, conversion: 38.8 },
      { stage: 'Interviewed', count: 142, conversion: 11.4 },
      { stage: 'Offered', count: 38, conversion: 3.0 },
      { stage: 'Hired', count: 32, conversion: 2.6 }
    ]
  };

  // Enhanced Modules with Green Theme
  const modules = [
    { id: 'executive', name: 'Executive Overview', icon: BarChart3 },
    { id: 'talent-management', name: 'Talent Management', icon: Users },
    { id: 'talent-acquisition', name: 'Talent Acquisition', icon: UserCheck },
    { id: 'talent-development', name: 'Talent Development', icon: GraduationCap },
    { id: 'total-rewards', name: 'Total Rewards', icon: DollarSign },
    { id: 'engagement', name: 'Engagement', icon: Heart },
    { id: 'predictive', name: 'Predictive Analytics', icon: Brain }
  ];

  // Enhanced KPI Cards with Green Theme
  const kpiCards = {
    executive: [
      { label: 'Total Headcount', value: '2,847', change: '+3.2%', trend: 'up', icon: Users },
      { label: 'Turnover Rate', value: '13.8%', change: '-1.2%', trend: 'down', icon: TrendingDown },
      { label: 'Engagement Score', value: '7.8/10', change: '+0.4', trend: 'up', icon: TrendingUp },
      { label: 'Revenue per Employee', value: '$285K', change: '+5.2%', trend: 'up', icon: DollarSign }
    ]
  };

  // Enhanced Insight Box Component with Green Theme
  const InsightBox = ({ title, children, type = 'info' }) => {
    const styles = {
      info: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-900' },
      success: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-900' },
      warning: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-900' },
      danger: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-900' }
    };

    const style = styles[type] || styles.info;

    return (
      <div className={`${style.bg} border-l-4 ${style.border} p-4 rounded-r-lg mb-4`}>
        <div>
          <h4 className={`font-semibold text-sm mb-1 ${style.text}`}>{title}</h4>
          <p className={`text-sm ${style.text}`}>{children}</p>
        </div>
      </div>
    );
  };

  // Enhanced KPI Card Component with Green Theme
  const renderKPICards = (module) => {
    const cards = kpiCards[module] || kpiCards.executive;
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
                      <ArrowUp className="w-4 h-4 text-green-600 mr-1" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
                    )}
                    <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-green-600" />
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
      
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnover Trends & Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={executiveData.turnover}>
            <defs>
              <linearGradient id="colorVoluntary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colorTheme.primary[500]} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={colorTheme.primary[500]} stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="voluntary" stroke={colorTheme.primary[500]} fillOpacity={1} fill="url(#colorVoluntary)" name="Voluntary" />
            <Bar dataKey="involuntary" fill="#94a3b8" name="Involuntary" radius={[4, 4, 0, 0]} />
            <Line type="monotone" dataKey="highPerformer" stroke="#ef4444" strokeWidth={2} name="High Performer" />
          </ComposedChart>
        </ResponsiveContainer>
        <InsightBox title="Turnover Analysis">
          Voluntary turnover shows concerning trends in Engineering and Sales departments. 
          Focus on retention strategies for high performers.
        </InsightBox>
      </div>
    </div>
  );

  // Talent Management Dashboard
  const TalentManagementDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-management')}
      
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">9-Box Talent Grid</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis type="category" dataKey="performance" name="Performance" stroke="#6b7280" />
            <YAxis type="category" dataKey="potential" name="Potential" stroke="#6b7280" />
            <ZAxis type="number" dataKey="count" range={[50, 500]} name="Count" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={talentManagementData.nineBox} fill={colorTheme.primary[500]}>
              <LabelList dataKey="count" position="top" />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Talent Acquisition Dashboard
  const TalentAcquisitionDashboard = () => (
    <div className="space-y-8">
      {renderKPICards('talent-acquisition')}
      
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recruitment Funnel</h3>
        <ResponsiveContainer width="100%" height={300}>
          <FunnelChart>
            <Tooltip />
            <Funnel dataKey="count" data={talentAcquisitionData.funnel} nameKey="stage" fill={colorTheme.primary[500]}>
              <LabelList dataKey="conversion" position="right" formatter={(value) => `${value}%`} />
              <LabelList dataKey="stage" position="inside" fill="#fff" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Sidebar Navigation Component
  const SidebarNavigation = () => (
    <div className={`bg-white shadow-lg border-r border-gray-200 h-screen transition-all duration-300 ${
      sidebarOpen ? 'w-64' : 'w-20'
    }`}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h1 className="text-xl font-bold text-gray-900">HR Analytics</h1>
              <p className="text-sm text-gray-500">People Intelligence Platform</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <button
              key={module.id}
              onClick={() => setActiveModule(module.id)}
              className={`w-full flex items-center rounded-lg p-3 transition-all duration-200 ${
                activeModule === module.id
                  ? 'bg-green-50 text-green-700 border-l-4 border-green-500 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              } ${sidebarOpen ? 'justify-start space-x-3' : 'justify-center'}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="text-sm">{module.name}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );

  // Enhanced Header
  const PlatformHeader = () => (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>
    </header>
  );

  // Filter Panel
  const FilterPanel = () => (
    <div className={`bg-white border-b border-gray-200 transition-all duration-300 ${
      showFilters ? 'py-4 px-6' : 'h-0 py-0 overflow-hidden'
    }`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Last 6 Months</option>
            <option>Last Year</option>
            <option>YTD</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>All Departments</option>
            <option>Engineering</option>
            <option>Sales</option>
            <option>Marketing</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>All Locations</option>
            <option>North America</option>
            <option>EMEA</option>
            <option>APAC</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Employee Status</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>Active</option>
            <option>Inactive</option>
            <option>All</option>
          </select>
        </div>
      </div>
    </div>
  );

  // Data Quality Indicator
  const DataQualityIndicator = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 mx-6 mt-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Data Freshness: Real-time</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600">Completeness: 98.7%</span>
          </div>
        </div>
        <button className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center">
          <Zap className="w-4 h-4 mr-1" />
          Refresh Data
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <SidebarNavigation />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <PlatformHeader />
        <FilterPanel />
        <DataQualityIndicator />
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {activeModule === 'executive' && <ExecutiveDashboard />}
          {activeModule === 'talent-management' && <TalentManagementDashboard />}
          {activeModule === 'talent-acquisition' && <TalentAcquisitionDashboard />}
          {activeModule === 'talent-development' && (
            <div className="text-center py-12">
              <GraduationCap className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Talent Development</h2>
              <p className="text-gray-600">Training and development analytics coming soon!</p>
            </div>
          )}
          {activeModule === 'total-rewards' && (
            <div className="text-center py-12">
              <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Total Rewards</h2>
              <p className="text-gray-600">Compensation and benefits analytics coming soon!</p>
            </div>
          )}
          {activeModule === 'engagement' && (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Employee Engagement</h2>
              <p className="text-gray-600">Engagement and satisfaction analytics coming soon!</p>
            </div>
          )}
          {activeModule === 'predictive' && (
            <div className="text-center py-12">
              <Brain className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Predictive Analytics</h2>
              <p className="text-gray-600">AI-powered insights and predictive modeling coming soon!</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PeopleAnalyticsPlatform;
