import * as React from "react";
import {Tag, Section, Content} from "react-bulma-components";

const TagsSkills = () => {
    return (
        <Content renderAs="section" className="section tag-skills">
            <Tag.Group className="tag-skills__wrapper">
                <Tag.Group gapless>
                    <Tag color="dark">React</Tag>
                    <Tag color="primary">Redux</Tag>
                </Tag.Group>

                <Tag color="warning">HTML</Tag>
                <Tag color="danger">CSS</Tag>                

                <Tag.Group gapless>
                    <Tag color="light">C#</Tag>
                    <Tag color="info">.NET</Tag>
                </Tag.Group>
                
                <Tag.Group gapless>
                    <Tag color="primary">NodeJS</Tag>
                    <Tag>Express</Tag>
                </Tag.Group>
                
                <Tag.Group gapless>
                    <Tag>Docker</Tag>
                    <Tag color="warning">Kubernetes</Tag>
                </Tag.Group>

                <Tag color="dark">Agile</Tag>

                <Tag color="primary">Typescript</Tag>

                

            </Tag.Group>
        </Content>
    )
}

export default TagsSkills;
