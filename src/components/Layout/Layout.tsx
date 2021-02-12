import React from "react";
import Head from "next/head";
import { Box, Columns, Footer, Content } from "react-bulma-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import NavigationBar from "./NavigationBar/NavigationBar"
import { EPages } from "utils/EPages"
import useDarkMode from "dark-mode-react-hook";
import { useRouter } from "next/router";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
// import ThemeSelector from "./ThemeSelector/ThemeSelector"


interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
    const {pathname} = useRouter();
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
                />
            </Head>
            <Columns className="main-container" centered={true}>
                <Columns.Column
                    className="main-container__column"
                    // @ts-ignore
                    tablet={{ size: 10 }}
                    widescreen={{ size: 8 }}
                >
                    <Box className="main-container__box">
                        {/* <ThemeSelector darkMode={darkMode} setDarkMode={setDarkMode} /> */}
                        <NavigationBar />
                        <AnimatePresence initial={false} exitBeforeEnter={true} >
                            <motion.div 
                                key={pathname}
                                initial={{opacity: 0, translateY: 25}}
                                animate={{opacity: 1, translateY: 0}}
                                exit={{opacity: 0, translateY: 25}}
                                transition={{ease: "easeInOut", duration: .3}}
                                
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                        <Footer>
                            <Content textAlignment="centered">
                                <div>
                                    Built with <FontAwesomeIcon icon={faHeart} />{" "}
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
                                        <FontAwesomeIcon icon={faGithub} /> Github
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
