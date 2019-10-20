import * as React from "react";
import { Columns, Card, Heading } from "react-bulma-components";

interface IPortfolioCardProps {
    imageSrc: string;
    name: string;
    description: string[];
}

const PortfolioCard = ({imageSrc, description, name}: IPortfolioCardProps) => {
    return (
        <Columns.Column
            tablet={{size: "half"}}
            desktop={{size: "one-third"}}
        >    
            <Card>
                <Card.Image src={imageSrc}/>
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
            </Card>
        </Columns.Column>
    )
}

export default PortfolioCard;
