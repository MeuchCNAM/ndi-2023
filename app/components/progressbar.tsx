import React, { FC } from "react";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value = 0 }) => {
  // Limit the number of decimal places to 2
  const formattedValue = (value / 3 + 19).toFixed(2);

  const getProgressColor = (value: number) => {
    if (value < 33) {
      return "success";
    }

    if (value < 66) {
      return "warning";
    }

    return "error";
  };

  return (
    <>
      <progress
        className={`progress progress-${getProgressColor(value)} w-56`}
        value={value}
        max="100"
      ></progress>
      <span className="mt-1 mb-5 text-gray-500 text-sm">
        {formattedValue}°C
      </span>
    </>
  );
};

export default ProgressBar;
