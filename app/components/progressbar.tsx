import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

interface Co2ProgressBarProps {
  co2Value: number;
}

const Co2ProgressBar: React.FC<Co2ProgressBarProps> = ({ co2Value }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Assuming co2Value is between 0 and 100 (adjust the range as needed)
    const normalizedValue = Math.min(Math.max(co2Value, 0), 100);
    setProgress(normalizedValue);
  }, [co2Value]);

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl mb-2">Taux de CO2</h1>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: '20px', // Increase the height
          borderRadius: '10px', // Add border-radius
          border: '1px solid #000000', // Add a 1px solid border with black color
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: '#ff0000', // Red color for the bar
          },
        }}
      />
    </div>
  );
};

export default Co2ProgressBar;