import React from 'react';
import { ColorRing, ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#fff' }}>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        color="#ff950a"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  );
};

export default Loader;
