import React from "react";
import { Box, Columns, Footer, Content } from "react-bulma-components";
import Helmet from "react-helmet";
import "../../main.scss";
import "./layout.scss";
import "font-awesome/css/font-awesome.min.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import { EPages } from "../../utils/EPages";
import Fade from "./Transitions/Fade";

interface ILayoutProps {
    children: React.ReactNode;
    currentPage: EPages;
}

const Layout = ({children, currentPage}: ILayoutProps) => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no" />
        </Helmet>
        <Columns className="main-container" centered={true}>
            <Columns.Column
                tablet={{size: 10}} 
                widescreen={{size: 8}}
            >
                <Box className="main-container__box">
                    <NavigationBar currentPage={currentPage}/>
                    <Fade
                        key={currentPage}
                        className="main-container__content"
                    >
                        {children}
                    </Fade>
                    <Footer>
                        <Content textAlignment="centered">
                            <div>
                                Built with <i className="fa fa-heart"></i> with GatsbyJS and Bulma.io
                            </div>
                            <div>
                                You can check the source for this page on {" "}
                                <a href="https://github.com/fpellicero/fpellicero.github.io">
                                    <i className="fa fa-github"/>{" "}
                                    Github
                                </a>
                            </div>
                        </Content>
                    </Footer>
                </Box>
            </Columns.Column>
        </Columns>
    </>
);

export default Layout;
