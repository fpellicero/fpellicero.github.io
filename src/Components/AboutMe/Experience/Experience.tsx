import React from "react"
import { Heading, Section, Container, Image } from "react-bulma-components"
import "bulma-timeline/dist/css/bulma-timeline.min.css"
import tiendeoLogo from "./tiendeo_icon.png"
import clsx from "clsx"
import Timeline from "../../Timeline/Timeline"

const TiendeoTimelineMarker = ({color = "danger"}) => (
  <Timeline.Marker isImage color={color} className="is-32x32">
    <Image src={tiendeoLogo} />
  </Timeline.Marker>
);

const Experience = () => {
  return (
    <Section>
      <Container>
        <Heading size={3}>Experience</Heading>
        <Timeline>
          <Timeline.Header color="primary">Present</Timeline.Header>

          <Timeline.Item color="primary" marker={<TiendeoTimelineMarker color="primary"/>}>
            
            <p className="heading">October 2019</p>
            <p>Tech Lead</p>
            <p>Tiendeo Web Marketing S.L.</p>
          </Timeline.Item>

          <Timeline.Item color="danger" marker={<TiendeoTimelineMarker />}>
            <p className="heading">July 2018</p>
            <p>Senior Fullstack Engineer</p>
            <p>Tiendeo Web Marketing S.L.</p>
          </Timeline.Item>

          <Timeline.Item color="warning" marker={<Timeline.Marker color="warning"/>}>
            <p className="heading">January 2018</p>
            <p>Senior Frontend Engineer</p>
            <p>Atrápalo S.L.</p>
          </Timeline.Item>

          <Timeline.Item color="danger" marker={<TiendeoTimelineMarker />}>
            <p className="heading">September 2014</p>
            <p>Junior Fullstack Developer</p>
            <p>Tiendeo Web Marketing S.L.</p>
          </Timeline.Item>

          <Timeline.Item color="primary" marker={<Timeline.Marker color="primary"/>}>
            <p className="heading">February 2013</p>
            <p>Software Developer Intern</p>
            <p>Fundació Equilibi</p>
          </Timeline.Item>

          <Timeline.Header color="primary">Start</Timeline.Header>
        </Timeline>
      </Container>
    </Section>
  )
}

export default Experience
