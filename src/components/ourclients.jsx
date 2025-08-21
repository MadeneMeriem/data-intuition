import neo from '../assets/neo.png';
import vila from '../assets/IMG-20240821-WA0007-removebg-preview 1.png';
import bee from '../assets/bee.png';
import am from '../assets/am.png';
import mounakassat from '../assets/mounakassat.png';
import rakuten from '../assets/rakuten.png';
import ematic from '../assets/ematic.png';
import infinite from '../assets/infitnite.jpg';
import tpe from '../assets/tpe.jpg'



const OurClients = () => {
    const clients = [
        neo,vila,bee,am,mounakassat,rakuten,ematic,infinite,tpe,neo,vila,bee,am,mounakassat,rakuten,ematic,infinite,tpe
    ]

    return ( 
        <div className="our-clients">
            <div className="text-section">
                <div className="title">
                    <h3>Nos Clients</h3>
                    <div className="underline"></div>
                </div>
                <p className="description-text">
                Nous sommes fiers d’accompagner ces marques dans la réalisation de leurs ambitions sur le digital.</p>
            </div>
            <div className="clients-logos">
                {clients.map((client,index)=>(
                    <div className="client-card">
                        <img src={client} alt="Client image" className="client-img"/>
                    </div>
                ))
                }
            </div>
        </div>
     );
}
 
export default OurClients;