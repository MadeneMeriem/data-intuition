import React from 'react';
import Hero from '../components/hero-section';
import About from '../components/about';
import Separator from '../components/separator';
import Mission from '../components/mission';
import Engagement from '../components/engagement';
import Whyus from '../components/why-us';
import Realisation from '../components/realisation';
import AboutImage from "../assets/apropos.png";
import Landing_bg from "../assets/landing-bg.png";
import OurClients from '../components/ourclients';
import Contact from '../components/contact';



const Landing = () => {
    return ( 
        <div className="landing-page">
             <Hero 
                title="Data Intuition"
                subtitle={<><span>Innovation</span> et <span>Expertise</span> pour un Monde Digital</>}
                description="Nous vous accompagnons dans  transformation digitale en concevant des produits et services intelligents, performants et centrés sur l'utilisateur."
                background={Landing_bg}
                button1Text="Contactez-nous"
                button2Text="Appelez-nous"
                />
            <About 
                title="A propos de Nous"
                description="Chez Data Intuition, nous sommes dédiés à transformer vos idées en solutions numériques innovantes. Fondée par une équipe d'experts en technologies de l'information, notre entreprise combine expertise, innovation et engagement pour offrir des services de qualité supérieure."
                image={AboutImage}
                alt="A propos de Nous"
                 />
            <Separator />
            <Mission />
            <Engagement/>
            <Whyus />
            <Realisation/>
            <OurClients/>
            <Contact/>

        </div>
     );
}
 
export default Landing;