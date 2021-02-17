import * as React from "react"
import { Image, Tabs } from "react-bulma-components"
import profileImage from "./profile_image.jpg"
import Link from "next/link";
import clsx from "clsx"
import { EPages } from "utils/EPages";
import { Trans } from "@lingui/macro";

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
                        <Trans>
                            <Link href="/">About me</Link>
                        </Trans>
                    </NavigationItem>
                    <NavigationItem page={EPages.Portfolio}>
                        <Trans>
                            <Link href="/portfolio">Portfolio</Link>
                        </Trans>
                    </NavigationItem>
                    <NavigationItem page={EPages.Blog}>
                        <Trans>
                            <Link href="/blog">Blog</Link>
                        </Trans>
                    </NavigationItem>
                </Tabs>
            </nav>
        </>
    )
}

export default NavigationBar
