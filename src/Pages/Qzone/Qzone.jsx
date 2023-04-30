import React from 'react';
import img from '../../assets/qZone1.png';
import img2 from '../../assets/qZone2.png';
import img3 from '../../assets/qZone3.png';

const Qzone = () => {
    return (
        <div className='text-bg-light text-center pt-2'>

            <h3>Q zone</h3>

            <img className='w-75' src={img} alt="" />
            <img className='w-75' src={img2} alt="" />
            <img className='w-75' src={img3} alt="" />
            
        </div>
    );
};

export default Qzone;