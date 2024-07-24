// SkeletonLoader.js

import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader-container">
      <div className="skeleton-loader-card">
        <div className="skeleton-loader-image"></div>
        <div className="skeleton-loader-details">
          <div className="skeleton-loader-title"></div>
          <div className="skeleton-loader-description"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
