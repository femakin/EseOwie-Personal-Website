import React from 'react';
import Ellipse2 from '../assets/Images/Ellipse2.png';
import Ellipse1 from '../assets/Images/Ellipse1.png';

export default function HomePage() {
    return (
        <div className=" container homepage">
            <h1>This is the Landing page</h1>
            <img src={Ellipse2} alt="Ellipse2" className="ellipse2"/>
            <img src={Ellipse1} alt="Ellipse1" className="ellipse1"/>
        </div>
    )
}
