import React from 'react';
import Hero from '../components/hero-section';
import About from '../components/about';
import Separator from '../components/separator';
import Mission from '../components/mission';
import Engagement from '../components/engagement';


const Landing = () => {
    return ( 
        <div className="landing-page">
            <Hero />
            <About/>
            <Separator />
            <Mission />
            <Engagement/>
        </div>
     );
}
 
export default Landing;