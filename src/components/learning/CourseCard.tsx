import React from "react";
import { BookOpen, Award, Clock } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  duration,
  level,
}) => (
  <div className="bg-black rounded-xl shadow-sm overflow-hidden">
    <div className="h-48 bg-green-700 flex items-center justify-center">
      <BookOpen className="w-12 h-12 text-green-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-green-300" />
          {duration}
        </div>
        <div className="flex items-center gap-1">
          <Award className="w-4 h-4 text-green-300" />
          {level}
        </div>
      </div>
      <button className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
        Start Learning
      </button>
    </div>
  </div>
);

export default CourseCard;
