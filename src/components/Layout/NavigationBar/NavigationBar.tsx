import * as React from "react"
import { Image, Tabs } from "react-bulma-components"
import profileImage from "./profile_image.jpg"
import Link from "next/link";
import clsx from "clsx"
import { EPages } from "utils/EPages";
import { Trans } from "@lingui/macro";
import LocalizedLink from "i18n/LocalizedLink";

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
                        src={profileImage.src}
                    />
                </div>
                <Tabs className="is-centered is-fullwidth">
                    <NavigationItem page={EPages.AboutMe}>
                        <Trans>
                            <LocalizedLink href="/">About me</LocalizedLink>
                        </Trans>
                    </NavigationItem>
                    <NavigationItem page={EPages.Portfolio}>
                        <Trans>
                            <LocalizedLink href="/portfolio">Portfolio</LocalizedLink>
                        </Trans>
                    </NavigationItem>
                    <NavigationItem page={EPages.Blog}>
                        <Trans>
                            <LocalizedLink href="/blog">Blog</LocalizedLink>
                        </Trans>
                    </NavigationItem>
                </Tabs>
            </nav>
        </>
    )
}

export default NavigationBar
