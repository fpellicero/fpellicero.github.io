import React from "react"
import { Heading, Section, Container, Image } from "react-bulma-components"
import Timeline from "../../Timeline/Timeline"
import useWorkExperienceItems from "../../../hooks/useWorkExperienceItems"
import ExperienceItem from "./ExperienceItem"

const Experience = () => {
    const items = useWorkExperienceItems()
    return (
        <Container>
            <Heading size={3}>Experience</Heading>
            <Timeline className="is-centered">
                <Timeline.Header color="primary">Present</Timeline.Header>
                {items.map(item => (
                    <ExperienceItem {...item} />
                ))}
                <Timeline.Header color="primary">Start</Timeline.Header>
            </Timeline>
        </Container>
    )
}

export default Experience
