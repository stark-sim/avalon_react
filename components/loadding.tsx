import React from 'react';
import { Spin } from 'antd';

const LoadingComponent: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Spin size="large" />
    </div>
  );
};

export default LoadingComponent;
