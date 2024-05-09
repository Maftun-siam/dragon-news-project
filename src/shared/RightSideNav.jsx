import React from 'react';
import qzone1 from '../assets/qZone1.png';
import qzone2 from '../assets/qZone2.png';
import qzone3 from '../assets/qZone3.png';

const RightSideNav = () => {
    return (

        <div>

            <div className='p-4 space-y-3 mb-6'>
                <h2>Right Side Nav </h2>
                <button className="btn btn-outline w-full">Login With Google</button>
                <button className="btn btn-outline w-full">Login With Github</button>
            </div>

            <div className='p-4 space-y-3 mb-6'>
                <h2>Find Us On</h2>
                <button className="btn btn-outline w-full">Facebook</button>
                <button className="btn btn-outline w-full">Twitter</button>
                <button className="btn btn-outline w-full">Instagram</button>
            </div>

            {/* Qzone  */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-2xl'>Q Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>

        </div>

    );
};

export default RightSideNav;