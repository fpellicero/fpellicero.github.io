import React from "react";
import { Box, Columns } from "react-bulma-components";
import Helmet from "react-helmet";
import "../../main.scss";
import "./layout.scss";
import "font-awesome/css/font-awesome.min.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import { EPages } from "../../utils/EPages";

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
                    {children}
                </Box>
            </Columns.Column>
        </Columns>
    </>
);

export default Layout;
