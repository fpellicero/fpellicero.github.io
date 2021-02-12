import * as React from "react";
import Head from "next/head";
import { Container, Heading, Hero, Section } from "react-bulma-components";
import Summary from "components/AboutMe/Summary/Summary";
import Education from "components/AboutMe/Education/Education";
import Experience from "components/AboutMe/Experience/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Me | Francesc Pellicero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container textAlignment="centered">
        <Hero color="light">
          <Hero.Body>
            <Heading>Hello!</Heading>
            <Heading subtitle>
              My name is Francesc Pellicero and I'm a software
              developer.
            </Heading>
            {/* <Socials /> */}
          </Hero.Body>
        </Hero>
      </Container>

      <Section>
        <Summary />
      </Section>

      <Section>
        <Experience />
      </Section>

      <Section>
        <Education />
      </Section>
    </>
  )
}
