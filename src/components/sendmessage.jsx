const Message = () => {
    return ( <div className="message">
        <div className="title">
          <h3>Envoyez-nous un message !</h3>
          <div className="underline"></div>
        </div>
        <div className="fields">
            <div className="names">
                <input type="text" placeholder="Votre nom" />
                <input type="text" placeholder="Nom de l'entreprise"/>
            </div>
            <div className="contacts">
                <input type="email" placeholder="Email" />
                <input type="phone" placeholder="Téléphone" />
            </div>
            <div className="message-text">
                  <textarea placeholder="C'est quoi votre message ?" />
            </div>
            <div className="contact-button">
                <button>Envoyer le message</button>
            </div>
        </div>
    </div> );
}
 
export default Message;