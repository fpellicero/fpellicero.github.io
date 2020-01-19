import * as React from "react";
import { Image, Tabs } from "react-bulma-components";
import profileImage from "./profile_image.jpg";
import { Link } from "gatsby";
import {Location} from "@reach/router"
import clsx from "clsx";
import { EPages } from "../../../utils/EPages";

interface INavigtionBarProps {
    currentPage: EPages;
}

const NavigationBar = ({currentPage}: INavigtionBarProps) => {
    return (
        <>
            <nav className="navigation-bar">
                <Image
                    className="navigation-bar__logo"
                    src={profileImage}
                />
            </nav>
            <Tabs className="is-centered is-fullwidth">
                <li className={clsx(currentPage === EPages.AboutMe && "is-active")}>
                    <Link to="/">About me</Link>
                </li>
                <li className={clsx(currentPage === EPages.Portfolio && "is-active")}>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className={clsx(currentPage === EPages.Blog && "is-active")}>
                    <Link to="/blog">Blog</Link>
                </li>
            </Tabs>
        </>
    )
}

export default NavigationBar;