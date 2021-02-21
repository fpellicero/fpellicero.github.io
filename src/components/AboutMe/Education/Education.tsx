import * as React from "react"
import {
    Section,
    Heading,
    Columns,
    Card,
    Media,
    Content,
    Image,
    Box,
} from "react-bulma-components"
import logoUpc from "./logo-upc.png"
import logoLeeds from "./logo-leeds-metropolitan.png"
import { Trans } from "@lingui/macro"

interface IEducationItem {
    logo: string
    heading: string
    subheading: React.ReactNode
    children?: React.ReactNode
}
const EducationItem = ({
    logo,
    heading,
    subheading,
    children,
}: IEducationItem) => {
    return (
        <Columns.Column size="half">
            <Box>
                <Media>
                    {/* @ts-ignore */}
                    <Media.Item renderAs="figure" position="left">
                        <Image size={48} alt="64x64" src={logo} />
                    </Media.Item>
                    <Media.Item>
                        <Heading renderAs="h6" size={6}>
                            {heading}
                        </Heading>
                        <Heading renderAs="h6" subtitle size={6}>
                            {subheading}
                        </Heading>
                    </Media.Item>
                </Media>
                <Content className="is-small">{children}</Content>
            </Box>
        </Columns.Column>
    )
}

const Education = () => {
    return (
        <>
            <Heading size={3}>
                <Trans>
                    Education
                </Trans>
            </Heading>
            <Columns>
                <EducationItem
                    logo={logoUpc}
                    heading={"Universitat Politècnica de Catalunya"}
                    subheading={
                        <Trans>
                            Softwaree Engineering Degree
                        </Trans>
                    }
                    children={
                        <p className="has-text-right">
                            <Trans>
                                September 2009 - June 2014
                            </Trans>
                        </p>
                    }
                />
                <EducationItem
                    logo={logoLeeds}
                    heading={"Leeds Beckett University"}
                    subheading={
                        <Trans>
                            Softwaree Engineering Degree
                        </Trans>
                    }
                    children={
                        <p className="has-text-right">
                            <Trans>
                                September 2013 - January 2014
                            </Trans>
                        </p>
                    }
                />
            </Columns>
        </>
    )
}

export default Education
