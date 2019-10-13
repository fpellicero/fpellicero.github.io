import React from "react";
import { Box, Columns } from "react-bulma-components";
import Helmet from "react-helmet";
import "./layout.scss";
import NavigationBar from "./NavigationBar/NavigationBar";


const Layout = ({children}) => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no" />
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"></link>
        </Helmet>
        <Columns className="main-container" centered={true}>
            <Columns.Column size={10}>
                <Box className="main-container__box">
                    <NavigationBar />
                    {children}
                </Box>
            </Columns.Column>
        </Columns>
    </>
);

export default Layout;
