import React from "react"
import { Heading, Section, Container, Image } from "react-bulma-components"
import Timeline from "components/Timeline/Timeline"
import ExperienceItem from "./ExperienceItem"
import workExperience from "data/WorkExperience"
import { Trans } from "@lingui/macro"
import { useLocale } from "i18n/LocaleProvider"

const Experience = () => {
    const locale = useLocale();
    return (
        <Container>
            <Heading size={3}>
                <Trans>
                    Experience
                </Trans>
            </Heading>
            <Timeline className="is-centered">
                <Timeline.Header color="primary">
                    <Trans>
                        Present
                    </Trans>
                </Timeline.Header>
                {workExperience.map(item => (
                    <ExperienceItem key={item.title[locale]} {...item} />
                ))}
                <Timeline.Header color="primary">
                    <Trans>
                        Start
                    </Trans>
                </Timeline.Header>
            </Timeline>
        </Container>
    )
}

export default Experience
