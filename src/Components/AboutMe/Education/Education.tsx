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

interface IEducationItem {
  logo: string
  heading: string
  subheading: string
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
      <Card>
        <Card.Header></Card.Header>
        <Card.Content>
          <Media>
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
        </Card.Content>
      </Card>
    </Columns.Column>
  )
}

const Education = () => {
  return (
    <Section>
      <Heading size={3}>Education</Heading>
      <Columns>
        <EducationItem
          logo={logoUpc}
          heading={"Universitat Politècnica de Catalunya"}
          subheading={"Softwaree Engineering Degree"}
          children={
            <p className="has-text-right">September 2009 - June 2014</p>
          }
        />
        <EducationItem
          logo={logoLeeds}
          heading={"Leeds Beckett University"}
          subheading={"Softwaree Engineering Degree"}
          children={
            <p className="has-text-right">September 2013 - January 2014</p>
          }
        />
      </Columns>
    </Section>
  )
}

export default Education
