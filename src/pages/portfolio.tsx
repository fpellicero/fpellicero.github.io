import * as React from "react"
import Layout from "../Components/Layout/Layout"
import { Content, Section, Heading, Columns } from "react-bulma-components"
import PortfolioCard from "../Components/Portfolio/PortfolioCard"
import usePortfolioItems from "../hooks/usePortfolioItems"
import { EPages } from "../utils/EPages"
import Helmet from "react-helmet"

export default () => {
    const items = usePortfolioItems()

    return (
        <>
            <Helmet>
                <title>My Portfolio | Francesc Pellicero</title>
            </Helmet>
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
                    {items.map(item => (
                        <PortfolioCard key={item.id} {...item} />
                    ))}
                </Section>
            </Content>
        </>
    )
}
