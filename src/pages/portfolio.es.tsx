import * as React from "react"
import { Content, Section, Heading } from "react-bulma-components"
import PortfolioCard from "../Components/Portfolio/PortfolioCard"
import usePortfolioItems from "../hooks/usePortfolioItems"
import Helmet from "react-helmet"

export default () => {
    const items = usePortfolioItems()

    return (
        <>
            <Helmet>
                <title>Portfolio | Francesc Pellicero</title>
            </Helmet>
            <Content>
                <Section>
                    <Heading>Mi trabajo</Heading>
                    <div>
                        <p>
                            Estos son algunos de mis proyectos open-source. 
                            Principalmente son videojuegos simples, que me gusta
                            programar de vez en cuando.
                        </p>

                        <p>
                            Todos son open source, con lo que os animo a ver el
                            código si os interesa. O mejor, ¡haced un fork y mejoradlos!
                        </p>
                    </div>
                </Section>

                <Section className="portfolio-items">
                    {items.map(item => (
                        <PortfolioCard key={item.id} lang={"es"} {...item} />
                    ))}
                </Section>
            </Content>
        </>
    )
}
