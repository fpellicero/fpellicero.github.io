import * as React from "react";
import { Image } from "react-bulma-components";
import profileImage from "./profile_image.jpg";
import "./navigation_bar.scss";


const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
            
            <Image 
                className="navigation-bar__logo"
                src={profileImage}
            />

        </nav>
    )
}

export default NavigationBar;