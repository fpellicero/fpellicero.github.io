import { useStaticQuery, graphql } from "gatsby"

interface IPortfolioItemsQueryResult {
    allPortfolioJson: {
        edges: Array<{
            node: IPortfolioItem
        }>
    }
}

export interface IPortfolioItem {
    id: string
    name: string
    publicUrl: string
    repositoryUrl: string
    description: string[]
    image: {
        publicURL: string
    }
}

const usePortfolioItems = (): IPortfolioItem[] => {
    const items = useStaticQuery<IPortfolioItemsQueryResult>(graphql`
        query PortfolioItemsQuery {
            allPortfolioJson {
                edges {
                    node {
                        id
                        name
                        publicUrl
                        repositoryUrl
                        description
                        image {
                            publicURL
                        }
                    }
                }
            }
        }
    `)

    return items.allPortfolioJson.edges.map(edge => edge.node)
}

export default usePortfolioItems
