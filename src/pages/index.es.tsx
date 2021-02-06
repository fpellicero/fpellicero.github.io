import React from "react"
import { Heading, Section, Container, Hero } from "react-bulma-components"
import Timeline from "../Components/AboutMe/Experience/Experience"
import Layout from "../Components/Layout/Layout"
import Education from "../Components/AboutMe/Education/Education"
import Socials from "../Components/AboutMe/Socials/Socials"
import TagsSkills from "../Components/AboutMe/Skills/TagsSkills"
import Summary from "../Components/AboutMe/Summary/Summary.es"
import { EPages } from "../utils/EPages"
import Helmet from "react-helmet"

export default () => (
    <>
        <Helmet>
            <title>Hola | Francesc Pellicero</title>
        </Helmet>
        {/* <TagsSkills /> */}
        <Container textAlignment="centered">
            <Hero color="light">
                <Hero.Body>
                    <Heading>¡Hola!</Heading>
                    <Heading subtitle>
                        Soy Francesc Pellicero y soy desarrollador de software
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
    </>
)
