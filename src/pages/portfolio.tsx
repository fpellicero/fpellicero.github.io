import PortfolioCard from "components/Portfolio/PortfolioCard";
import portfolioItems from "data/Portfolio/portfolio";
import { motion } from "framer-motion";
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
                    <Heading>My work</Heading>
                    <div>
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

export default PortfolioPage;
