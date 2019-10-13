import * as React from "react";
import { Columns, Image } from "react-bulma-components";
import profileImage from "./profile_image.jpg";
import "./navigation_bar.scss";


const NavigationBar = () => {
    return (
        <>
            <Image 
                className="navigation-bar__logo"
                src={profileImage}
            />
        </>
    )
}

export default NavigationBar;