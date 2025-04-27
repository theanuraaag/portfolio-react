import React from 'react';

const ProgressBar = ({ title, percentage,color }) => {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium  ">{title}</span>
                <span className="text-sm font-medium text-blue-700 ">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`${color} h-2.5 rounded-full`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
