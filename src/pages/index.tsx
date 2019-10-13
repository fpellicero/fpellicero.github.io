import React from "react";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import "../main.scss";
import {Heading, Section, Container} from "react-bulma-components";
import Skills from "../Components/AboutMe/Skills/Skills";
import Timeline from "../Components/AboutMe/Experience/Experience";
import Layout from "../Components/Layout/Layout";
import Education from "../Components/AboutMe/Education/Education";

export default () => (
    <Layout>
        <Section>
            <Container>
                <Heading>
                    Hello! 
                </Heading>
                <Heading subtitle>
                    My name is Francesc Pellicero and I'm a software developer.
                </Heading>
            </Container>
        </Section>

        <Skills />

        <Timeline />

        <Education />
    </Layout>
);
