import React from 'react';
import ReactLoader from 'react-loader-spinner';

export default function Loader({ variant = 'Audio', size = 50 }) {
  return (
    <ReactLoader type={variant} color="#00BFFF" height={size} width={size} />
  );
}
