import React from 'react';
import { Users, Play, Headphones, Gamepad2 } from 'lucide-react';

const StatsBar: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '2.5M+', color: 'text-purple-500' },
    { icon: Play, label: 'Movies & Shows', value: '50K+', color: 'text-teal-500' },
    { icon: Headphones, label: 'Songs', value: '100M+', color: 'text-coral-500' },
    { icon: Gamepad2, label: 'Games', value: '25K+', color: 'text-orange-500' },
  ];

  return (
    <div className="bg-gradient-to-r from-violet-50 to-teal-50 rounded-2xl p-6 mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-white rounded-full shadow-md">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
