import React from 'react';
import Hero from '../components/hero-section';
import About from '../components/about';
import Separator from '../components/separator';
import Mission from '../components/mission';
import Engagement from '../components/engagement';
import Whyus from '../components/why-us';
import Realisation from '../components/realisation';


const Landing = () => {
    return ( 
        <div className="landing-page">
            <Hero />
            <About/>
            <Separator />
            <Mission />
            <Engagement/>
            <Whyus />
            <Realisation/>

        </div>
     );
}
 
export default Landing;