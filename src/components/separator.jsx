import React from 'react';




const Separator = () => {
    const technologies = [
        { name: "Web dev", icon: "react-icon" },
        { name: "Mobile dev", icon: "node-icon" },
        { name: "AI", icon: "js-icon" },
    ]
    return ( <div className="separator">
        <div className="separator-content">
            <div className="technologies">
                {technologies.map((tech, index) => (
                    <div key={index} className="technology">
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div> );
}
 
export default Separator;