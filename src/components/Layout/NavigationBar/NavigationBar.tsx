import * as React from "react"
import { Image, Tabs } from "react-bulma-components"
import profileImage from "./profile_image.jpg"
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx"
import { EPages } from "utils/EPages";


const NavigationBar = () => {
    const { pathname } = useRouter();
    const NavigationItem = ({
        href,
        children,
    }: {
        href: string
        children: React.ReactNode
    }) => {
        const isActive = pathname === href || href === "/blog" && pathname.startsWith("/blog");
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
                    <NavigationItem href={"/"}>
                        <Link href="/">About me</Link>
                    </NavigationItem>
                    <NavigationItem href={"/portfolio"}>
                        <Link href="/portfolio">Portfolio</Link>
                    </NavigationItem>
                    <NavigationItem href={"/blog"}>
                        <Link href="/blog">Blog</Link>
                    </NavigationItem>
                </Tabs>
            </nav>
        </>
    )
}

export default NavigationBar
