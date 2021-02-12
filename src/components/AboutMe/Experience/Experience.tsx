import React from "react"
import { Heading, Section, Container, Image } from "react-bulma-components"
import Timeline from "components/Timeline/Timeline"
import ExperienceItem from "./ExperienceItem"
import workExperience from "data/WorkExperience"

const Experience = () => {
    return (
        <Container>
            <Heading size={3}>Experience</Heading>
            <Timeline className="is-centered">
                <Timeline.Header color="primary">Present</Timeline.Header>
                {workExperience.map(item => (
                    <ExperienceItem key={item.title} {...item} />
                ))}
                <Timeline.Header color="primary">Start</Timeline.Header>
            </Timeline>
        </Container>
    )
}

export default Experience
