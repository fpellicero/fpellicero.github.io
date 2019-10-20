import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface IPortfolioItemsQueryResult {
    allPortfolioJson: {
        edges: Array<{
            node: IPortfolioItem
        }>
    }
}

export interface IPortfolioItem {
    id: string;
    name: string;
    description: string[];
}

const usePortfolioItems = (): IPortfolioItem[] => {
    const items = useStaticQuery<IPortfolioItemsQueryResult>(graphql`
        query PortfolioItemsQuery {
            allPortfolioJson {
                edges {
                    node {
                        id
                        name,
                        description
                    }
                }
            }
        }
    `);

    return items.allPortfolioJson.edges.map(edge => edge.node);
}

export default usePortfolioItems;
