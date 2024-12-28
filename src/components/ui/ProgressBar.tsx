import React from "react";

interface ProgressBarProps {
  progress: number;
  height?: string;
  animated?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = "h-2",
  animated = true,
}) => {
  return (
    <div className={`bg-gray-200 rounded-full overflow-hidden ${height}`}>
      <div
        className={`h-full bg-green-600 rounded-full transition-all duration-1000 ease-out ${
          animated ? "animate-pulse" : ""
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
