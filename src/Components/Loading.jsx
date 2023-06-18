import React from 'react';
import loading from './loading.gif';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Loading;
