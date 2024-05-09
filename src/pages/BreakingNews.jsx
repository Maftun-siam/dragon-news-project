import React from 'react';
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className='btn btn-secondary'>Breaking News</button>
            <Marquee pauseOnHover={true} speed={200}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus.</Marquee>
        </div>

    );
};

export default BreakingNews;