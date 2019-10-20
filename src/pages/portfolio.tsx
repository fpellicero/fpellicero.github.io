import * as React from "react";
import Layout from "../Components/Layout/Layout";
import { Content, Section, Heading, Columns } from "react-bulma-components";
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
                    <Columns className="is-mobile" centered>
                        {items.map((item) => (
                            <PortfolioCard
                                key={item.id}
                                {...item}
                            />
                        ))}

                    </Columns>
                </Section>
            </Content>
        </Layout>
    )
}
