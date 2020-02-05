import * as React from "react"
import { Image, Tabs } from "react-bulma-components"
import profileImage from "./profile_image.jpg"
import { Link } from "gatsby"
import { Location } from "@reach/router"
import clsx from "clsx"
import { EPages } from "../../../utils/EPages"

interface INavigtionBarProps {
    currentPage: EPages
}

const NavigationBar = ({ currentPage }: INavigtionBarProps) => {
    const NavigationItem = ({
        page,
        children,
    }: {
        page: EPages
        children: React.ReactNode
    }) => (
        <li
            className={clsx(
                "navigation-bar__tab",
                currentPage === page && "is-active"
            )}
        >
            {children}
        </li>
    )

    return (
        <>
            <nav className="navigation-bar">
                <div className="navigation-bar__logo-wrapper">
                    <Image
                        className="navigation-bar__logo"
                        src={profileImage}
                    />
                </div>
                <Tabs className="is-centered is-fullwidth">
                    <NavigationItem page={EPages.AboutMe}>
                        <Link to="/">About me</Link>
                    </NavigationItem>
                    <NavigationItem page={EPages.Portfolio}>
                        <Link to="/portfolio">Portfolio</Link>
                    </NavigationItem>
                    <NavigationItem page={EPages.Blog}>
                        <Link to="/blog">Blog</Link>
                    </NavigationItem>
                </Tabs>
            </nav>
        </>
    )
}

export default NavigationBar
