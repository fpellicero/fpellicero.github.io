import * as React from "react"
import {
  Section,
  Heading,
  Columns,
  Card,
  Media,
  Content,
  Image,
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
    <Card>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src={logo} />
          </Media.Item>
          <Media.Item>
            <Heading renderAs="h4" size={4}>{heading}</Heading>
            <Heading renderAs="h4" subtitle size={6}>
              {subheading}
            </Heading>
          </Media.Item>
        </Media>
        <Content style={{ "text-align": "right" }}>{children}</Content>
      </Card.Content>
    </Card>
  )
}

const Education = () => {
  return (
    <Section>
      <Heading size={3}>Education</Heading>
      <Columns>
        <Columns.Column size="half">
          <EducationItem
            logo={logoUpc}
            heading={"Universitat Politècnica de Catalunya"}
            subheading={"Softwaree Engineering Degree"}
            children={<time>September 2009 - June 2014</time>}
          />
        </Columns.Column>
        <Columns.Column size="half">
          <EducationItem
            logo={logoLeeds}
            heading={"Leeds Beckett University"}
            subheading={"Softwaree Engineering Degree"}
            children={<time>September 2013 - January 2014</time>}
          />
        </Columns.Column>
      </Columns>
    </Section>
  )
}

export default Education
