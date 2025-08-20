import Vilaverde from '../assets/villa-768x384.png';
import SAS_Nematic from '../assets/nematic-768x381.png';
import Transport from '../assets/tpe-768x369.png';
import Sarl_neo from '../assets/neo-768x375.png';


const Realisation = () => {

    const cards_content =[
        {title : "Vilaverde Renovation" , mini_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,image:Vilaverde},
        {title : "SAS Nematic" , mini_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,image:SAS_Nematic},
        {title : "TRANSPORT PROFESSIONNEL EXPRESS (France)" , mini_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,image:Transport},
        {title : "SARL NEOQUIM" , mini_text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,image:Sarl_neo},
    ]


    return ( <div className="realisation">
                <div className="title">
                    <h3>Découvrez certaines de nos réalisations</h3>
                    <div className="underline"></div>
                </div>
                <div className="realisation-cards slider-layout">
                    {cards_content.map((cards_content,index)=>(
                        <div className="div">
                            <img src={cards_content.image} alt="Image" className="realisation-img" />
                            <h4>{cards_content.title}</h4>
                            <p className="card_text">{cards_content.mini_text}</p>
                        </div>
                    ))}
                </div>
    </div> );
}
 
export default Realisation;