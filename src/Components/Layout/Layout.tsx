import React from "react"
import { Box, Columns, Footer, Content } from "react-bulma-components"
import Helmet from "react-helmet"
import "../../main.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavigationBar from "./NavigationBar/NavigationBar"
import { EPages } from "../../utils/EPages"
import Fade from "./Transitions/Fade"
import useTheme from "../../hooks/useTheme"
import ThemeSelector from "./ThemeSelector/ThemeSelector"
import clsx from "clsx"

interface ILayoutProps {
    children: React.ReactNode
    path: string;
}

const Layout = ({ children, path }: ILayoutProps) => {
    const currentPage: EPages = getCurrentPage(path);
    const [theme, setTheme] = useTheme();
    return (
        <>
            <Helmet >
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
                />
                <html className={clsx(theme === "dark" && "--dark")}/>
            </Helmet>
            <Columns className="main-container" centered={true}>
                <Columns.Column
                    className="main-container__column"
                    tablet={{ size: 10 }}
                    widescreen={{ size: 8 }}
                >
                    <Box className="main-container__box">
                        <ThemeSelector theme={theme} setTheme={setTheme} />
                        <NavigationBar currentPage={currentPage} />
                        <Fade
                            key={currentPage}
                            className="main-container__content"
                        >
                            {children}
                        </Fade>
                        <Footer>
                            <Content textAlignment="centered">
                                <div>
                                    Built with <i className="fa fa-heart"></i>{" "}
                                    with{" "}
                                    <a
                                        href="https://www.gatsbyjs.org/"
                                        target="_blank"
                                    >
                                        GatsbyJS
                                    </a>{" "}
                                    and{" "}
                                    <a href="https://bulma.io" target="_blank">
                                        Bulma.io
                                    </a>
                                </div>
                                <div>
                                    You can check the source for this page on{" "}
                                    <a href="https://github.com/fpellicero/fpellicero.github.io">
                                        <i className="fa fa-github" /> Github
                                    </a>
                                </div>
                            </Content>
                        </Footer>
                    </Box>
                </Columns.Column>
            </Columns>
        </>
    );
}

function getCurrentPage(path: string): EPages {
    if (!path) {
        return EPages.AboutMe;
    }
    if (path.startsWith("/index")) {
        return EPages.AboutMe;
    }

    if (path.startsWith("/blog")) {
        return EPages.Blog;
    }

    if (path.startsWith("/portfolio")) {
        return EPages.Portfolio;
    }
    
    return EPages.AboutMe;
}

export default Layout
