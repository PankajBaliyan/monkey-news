import React, { Component } from 'react';
import loading from './loading.gif';

export default class Loading extends Component {
  render() {
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
  }
}
