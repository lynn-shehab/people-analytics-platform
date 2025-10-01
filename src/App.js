import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, TrendingUp, Target, Award, DollarSign, UserCheck, AlertCircle, Calendar } from 'lucide-react';

function App() {
  const [activeModule, setActiveModule] = useState('overview');

  // Sample data
  const performanceData = [
    { name: 'Exceeds', value: 25, color: '#10b981' },
    { name: 'Meets', value: 60, color: '#3b82f6' },
    { name: 'Below', value: 15, color: '#ef4444' }
  ];

  const turnoverData = [
    { month: 'Jan', rate: 12.5 },
    { month: 'Feb', rate: 11.8 },
    { month: 'Mar', rate: 13.2 },
    { month: 'Apr', rate: 12.1 },
    { month: 'May', rate: 14.5 },
    { month: 'Jun', rate: 13.8 }
  ];

  const kpiCards = [
    { label: 'Total Headcount', value: '2,847', change: '+3.2%', trend: 'up', icon: Users },
    { label: 'Turnover Rate', value: '13.8%', change: '-1.2%', trend: 'down', icon: AlertCircle },
    { label: 'Engagement Score', value: '7.8/10', change: '+0.4', trend: 'up', icon: TrendingUp },
    { label: 'Time to Fill', value: '42 days', change: '-5 days', trend: 'down', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">People Analytics Platform</h1>
          <p className="text-gray-600">HR Analytics Dashboard</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpiCards.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div key={idx} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">{kpi.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                    <p className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.change}
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Distribution */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={performanceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Turnover Trend */}
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnover Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={turnoverData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insight Box */}
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h4 className="font-semibold text-blue-900 text-sm mb-1">Key Insight</h4>
          <p className="text-sm text-blue-800">
            Turnover has increased 14% compared to last quarter. Focus on retention strategies for high-performing employees.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
