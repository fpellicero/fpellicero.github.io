import * as React from "react";
import { Image, Tabs } from "react-bulma-components";
import profileImage from "./profile_image.jpg";
import { Link } from "gatsby";
import {Location} from "@reach/router"
import clsx from "clsx";


const NavigationBar = () => {
    return (
        <Location>
            {({location}) => (
                <>
                    <nav className="navigation-bar">
                        <Image
                            className="navigation-bar__logo"
                            src={profileImage}
                        />
                    </nav>
                    <Tabs className="is-centered is-fullwidth">
                        <li className={clsx(location.pathname === "/" && "is-active")}>
                            <Link to="/">About me</Link>
                        </li>
                        <li className={clsx(location.pathname === "/portfolio" && "is-active")}>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                    </Tabs>
                </>
            )}
        </Location>
    )
}

export default NavigationBar;