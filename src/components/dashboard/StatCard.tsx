import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value }) => (
  <div className="group bg-black p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <div className="text-sm text-gray-600">{label}</div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
      </div>
    </div>
  </div>
);