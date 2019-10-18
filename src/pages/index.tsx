import React from "react";
import "../main.scss";
import {Heading, Section, Container, Hero} from "react-bulma-components";
import Skills from "../Components/AboutMe/Skills/ProgressSkills";
import Timeline from "../Components/AboutMe/Experience/Experience";
import Layout from "../Components/Layout/Layout";
import Education from "../Components/AboutMe/Education/Education";
import Socials from "../Components/AboutMe/Socials/Socials";
import TagsSkills from "../Components/AboutMe/Skills/TagsSkills";
import Summary from "../Components/AboutMe/Summary/Summary";

export default () => (
    <Layout>
        <TagsSkills />
        <Container textAlignment="centered">
            <Hero color="light">
                <Hero.Body>
                    <Heading>
                        Hello! 
                    </Heading>
                    <Heading subtitle>
                        My name is Francesc Pellicero and I'm a software developer.
                    </Heading>
                    <Socials />
                </Hero.Body>
            </Hero>
        </Container>

        <Section>
            <Summary />
        </Section>


        {/* <Skills /> */}
        <Section>
            <Timeline />
        </Section>

        <Section>
            <Education />
        </Section>
    </Layout>
);
