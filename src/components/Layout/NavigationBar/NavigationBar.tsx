import * as React from "react"
import { Image, Tabs } from "react-bulma-components"
import profileImage from "./profile_image.jpg"
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx"
import { EPages } from "utils/EPages";

interface IProps {
    currentPage: EPages;
}

const NavigationBar = ({ currentPage }: IProps) => {
    const NavigationItem = ({
        page,
        children,
    }: {
        page: EPages
        children: React.ReactNode
    }) => {
        const isActive = page === currentPage;
        return (
            <li
                className={clsx(
                    "navigation-bar__tab",
                    isActive && "is-active"
                )}
            >
                {children}
            </li>
        )
    }

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
                        <Link href="/">About me</Link>
                    </NavigationItem>
                    <NavigationItem page={EPages.Portfolio}>
                        <Link href="/portfolio">Portfolio</Link>
                    </NavigationItem>
                    <NavigationItem page={EPages.Blog}>
                        <Link href="/blog">Blog</Link>
                    </NavigationItem>
                </Tabs>
            </nav>
        </>
    )
}

export default NavigationBar
