import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface IWorkExperienceQueryResult {
    allExperienceJson: {
        edges: Array<{
            node: {
                startDate: string
                title: string
                subtitle: string
                marker: {
                    color: string
                    image: null | {
                        publicURL: string
                    }
                }
                details: {
                    childHtml: {
                        rawHtml: string
                    }
                }
            }
        }>
    }
}

export interface IWorkExperience {
    startDate: string
    title: string
    subtitle: string
    marker: {
        color: string
        image: null | {
            publicURL: string
        }
    }
    details: string
}

const useWorkExperienceItems = (): IWorkExperience[] => {
    const data = useStaticQuery<IWorkExperienceQueryResult>(graphql`
        {
            allExperienceJson {
                edges {
                    node {
                        startDate
                        title
                        subtitle
                        marker {
                            color
                            image {
                                publicURL
                            }
                        }
                        details {
                            childHtml {
                                rawHtml
                            }
                        }
                    }
                }
            }
        }
    `)

    return data.allExperienceJson.edges.map(({ node }) => ({
        ...node,
        details: node.details.childHtml.rawHtml,
    }))
}

export default useWorkExperienceItems
