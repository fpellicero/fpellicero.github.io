import * as React from "react";
import Head from "next/head";
import { Container, Heading, Hero, Section } from "react-bulma-components";
import Summary from "components/AboutMe/Summary/Summary";
import Education from "components/AboutMe/Education/Education";
import Experience from "components/AboutMe/Experience/Experience";
import { motion } from "framer-motion";
import { EPages } from "utils/EPages";
import { Trans } from "@lingui/macro";
import { GetStaticPaths, GetStaticProps } from "next";
import Locales from "i18n/Locales";

function AboutMePage() {
  return (
    <>
      <Head>
        <title>About Me | Francesc Pellicero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div>
        <Container textAlignment="centered" >
          <Hero color="light">
            <Hero.Body>
              <Trans>
                <Heading>Hello!</Heading>
                <Heading subtitle>
                  My name is Francesc Pellicero and I'm a software
                  developer.
                </Heading>
              </Trans>
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
      </motion.div>
    </>
  )
}

AboutMePage.PAGE_TYPE = EPages.AboutMe;

export const getStaticProps: GetStaticProps = async ({params}) => {
  return {
    props: {
      locale: params.locale,
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Locales.map((locale) => ({params: { locale }})),
    fallback: false,
  }
}

export default AboutMePage;