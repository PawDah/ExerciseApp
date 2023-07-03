import React from 'react';

import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
	return <div className='loader'>
        <InfinitySpin className='spin'/>
    </div>;
};

export default Loader;
