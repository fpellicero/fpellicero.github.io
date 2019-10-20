import * as React from "react";
import { Columns, Card, Heading } from "react-bulma-components";
import { IPortfolioItem } from "../../hooks/usePortfolioItems";

const PortfolioCard = ({image, description, name, publicUrl, repositoryUrl}: IPortfolioItem) => {
    return (
        <Columns.Column
            tablet={{size: "half"}}
            desktop={{size: "one-third"}}
        >    
            <Card>
                <Card.Image src={image.publicURL}/>
                <Card.Content>
                    <Heading size={4}>
                        {name}
                    </Heading>
                    {
                        description.map(p => (
                            <p dangerouslySetInnerHTML={{__html: p}}></p>
                        ))
                    }
                </Card.Content>
                <Card.Footer>
                    <Card.Footer.Item>
                        <a 
                            href={repositoryUrl}
                            target={"_blank"}
                            className="is-flex"
                            style={{alignItems: "center"}}
                        >
                            <i className="fa fa-github is-size-3"/>
                            <span style={{marginLeft: "0.5rem"}}>
                                Source
                            </span>
                        </a>
                    </Card.Footer.Item>
                    <Card.Footer.Item>
                        <a 
                            href={publicUrl}
                            target={"_blank"}
                            className="is-flex"
                            style={{alignItems: "center"}}
                        >
                            <i className="fa fa-globe is-size-3"/>
                            <span style={{marginLeft: "0.5rem"}}>
                                Demo
                            </span>
                        </a>
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
        </Columns.Column>
    )
}

export default PortfolioCard;
