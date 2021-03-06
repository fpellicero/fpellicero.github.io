import { Trans } from "@lingui/macro";
import PortfolioCard from "components/Portfolio/PortfolioCard";
import portfolioItems from "data/Portfolio/portfolio";
import { motion } from "framer-motion";
import Locales from "i18n/Locales";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import * as React from "react";
import { Content, Section, Heading } from "react-bulma-components";
import { EPages } from "utils/EPages";

const PortfolioPage = () => {

    return (
        <>
            <Head>
                <title>My Portfolio | Francesc Pellicero</title>
            </Head>
            <Content>
                <Section>
                    <Heading>
                        <Trans>
                            My work
                        </Trans>
                    </Heading>
                    <div>
                        <Trans>
                            <p>
                                Here you can find some of my open-sourced projects,
                                mainly small time-waster videogames that I like to
                                make for fun.
                            </p>

                            <p>
                                All of them are open sourced, so feel free to dig
                                deep into the source of any of them if you like. Or
                                fork it and improve it yourself!
                            </p>
                        </Trans>
                    </div>
                </Section>

                <Section className="portfolio-items">
                    {portfolioItems.map(item => (
                        <PortfolioCard key={item.name} {...item} />
                    ))}
                </Section>
            </Content>
        </>
    );
}

PortfolioPage.PAGE_TYPE = EPages.Portfolio;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: {
            locale: params.locale,
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: Locales.map((locale) => ({ params: { locale } })),
        fallback: false,
    }
}


export default PortfolioPage;
