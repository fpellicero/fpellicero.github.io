import * as React from "react"
import { Columns, Card, Heading } from "react-bulma-components"
import { IPortfolioItem } from "../../hooks/usePortfolioItems"

const PortfolioCard = ({
    image,
    description,
    name,
    publicUrl,
    repositoryUrl,
}: IPortfolioItem) => {
    return (
        <Card className="portfolio-card">
            <Card.Image size="4by3" src={image.publicURL} />
            <Card.Content className="portfolio-card__content">
                <Heading size={4} textAlignment="centered">
                    {name}
                </Heading>
                {description.map(p => (
                    <p
                        className="portfolio-card__description"
                        dangerouslySetInnerHTML={{ __html: p }}
                    />
                ))}
            </Card.Content>
            <Card.Footer>
                <Card.Footer.Item>
                    <a
                        href={repositoryUrl}
                        target={"_blank"}
                        className="is-flex"
                        style={{ alignItems: "center" }}
                    >
                        <i className="fa fa-github is-size-3" />
                        <span style={{ marginLeft: "0.5rem" }}>Source</span>
                    </a>
                </Card.Footer.Item>
                <Card.Footer.Item>
                    <a
                        href={publicUrl}
                        target={"_blank"}
                        className="is-flex"
                        style={{ alignItems: "center" }}
                    >
                        <i className="fa fa-globe is-size-3" />
                        <span style={{ marginLeft: "0.5rem" }}>Demo</span>
                    </a>
                </Card.Footer.Item>
            </Card.Footer>
        </Card>
    )
}

export default PortfolioCard
