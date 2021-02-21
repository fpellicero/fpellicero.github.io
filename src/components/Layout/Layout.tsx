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
import { AnimatePresence, motion } from "framer-motion";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import { Trans } from "@lingui/macro";
import LocaleSelector from "./LocaleSelector/LocaleSelector";


interface ILayoutProps {
    children: React.ReactNode;
    currentPage: EPages;
}

const Layout: React.FC<ILayoutProps> = ({ children, currentPage }: ILayoutProps) => {
    const { asPath } = useRouter();
    const [darkMode, setDarkMode] = useDarkMode({ exceptions: ["pre"] });
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
                        <LocaleSelector />
                        <ThemeSelector darkMode={darkMode} setDarkMode={setDarkMode} />
                        <NavigationBar currentPage={currentPage} />
                        <AnimatePresence initial={false} exitBeforeEnter={true} >
                            <motion.div
                                key={`layout-${asPath}`}
                                className={"main-container__content"}
                                initial={{ opacity: 0, translateY: 25 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                exit={{ opacity: 0, translateY: 25 }}
                                transition={{ ease: "easeInOut", duration: .3 }}

                            >
                                {children}
                                <Footer>
                                    <Content textAlignment="centered">
                                        <Trans>

                                            <div>
                                                Built with <FontAwesomeIcon icon={faHeart} width="1rem" />{" "}
                                    with{" "}
                                                <a
                                                    href="https://nextjs.org/"
                                                    target="_blank"
                                                >
                                                    NextJS
                                    </a>{" "}
                                    and{" "}
                                                <a href="https://bulma.io" target="_blank">
                                                    Bulma.io
                                    </a>
                                            </div>
                                            <div>
                                                You can check the source for this page on{" "}
                                                <a href="https://github.com/fpellicero/fpellicero.github.io">
                                                    <FontAwesomeIcon icon={faGithub} width="1rem" /> Github
                                    </a>
                                            </div>
                                        </Trans>
                                    </Content>
                                </Footer>
                            </motion.div>
                        </AnimatePresence>

                    </Box>
                </Columns.Column>
            </Columns>
        </>
    );
}


export default Layout
