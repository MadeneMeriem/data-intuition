import React from 'react';
import Logo from '../assets/data-logo.svg';

import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";





const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
   const menuOptions =[
    { text: "Acceuil", icon: <HomeIcon />, link: "#" },
    { text: "Service", icon: <InfoIcon />, link: "#" },
    { text: "Formations QA", icon: <CommentRoundedIcon />, link: "#" },
    { text: "Formation QA Pharma", icon: <PhoneRoundedIcon />, link: "#" },
    { text: "NearShore/OffShore", icon: <ShoppingCartRoundedIcon />, link: "#" },
  ]


    return ( 
        <nav>
            <div className="data-logo">
                <img src={Logo} alt="Data Intuition Logo"/>
            </div>
            <div className="nav-links">
                <a href="">Acceuil</a>
                <a href="">Service</a>
                <a href="" className="drop-down">Formations QA</a>
                <a href="" className="drop-down">Formations QA Pharma</a>
                <a href="">NearShore/OffShore</a>
            </div>
            <div className="contact-button">
                <button>Contactez-nous</button>
            </div>
            <div className="nav-bar-container">
                <HiOutlineBars3 className="nav-icon" onClick={() => setIsOpen(true)} />
                <Drawer
                    anchor="left"
                    open={isOpen}
                    onClose={()=>setIsOpen(false)}
                    >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={() => setIsOpen(false)}
                        onKeyDown={() => setIsOpen(false)}
                    >
                        <List>
                            {menuOptions.map((item)=>(
                                        <ListItem key={item.text} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.text} />        
                                            </ListItemButton>
                                            </ListItem>
                            ))}
                        </List>

                      </Box> 

                    </Drawer>
            </div>
        </nav>

     );
}
 
export default Navbar;