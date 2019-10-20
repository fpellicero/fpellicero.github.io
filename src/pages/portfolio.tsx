import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Layout from "../Components/Layout/Layout";
import { Content, Section, Heading, Card, Columns, Tag } from "react-bulma-components";
import arkapongImage from "../Components/Portfolio/arkapong.png";
import PortfolioCard from "../Components/Portfolio/PortfolioCard";
import usePortfolioItems from "../hooks/usePortfolioItems";
import { EPages } from "../utils/EPages";

export default () => {
    const items = usePortfolioItems();
        
    return (
        <Layout currentPage={EPages.Portfolio}>
            <Content>
                <Section>
                    <Heading>
                        My work
                    </Heading>
                    <div>
                        <p>
                            Here you can find some of my open-sourced projects, mainly
                            small time-waster videogames that I like to make for fun.
                        </p>

                        <p>
                            All of them are open sourced, so feel free to dig deep into
                            the source of any of them if you like. Or fork it and improve
                            it yourself! 
                        </p>
                    </div>
                </Section>

                <Section>
                    <Columns centered>
                        {items.map(({id, name, description}) => (
                            <PortfolioCard
                                key={id}
                                name={name}
                                description={description}
                                imageSrc=""
                            />
                        ))}
                        
                    </Columns>
                </Section>
            </Content>
        </Layout>
    )
}
