import React from "react"
import { Heading, Section, Container, Image } from "react-bulma-components"
import tiendeoLogo from "./tiendeo_icon.png"
import Timeline from "../../Timeline/Timeline"

interface ITimelineMarker {
  color?: "primary" | "danger" | "warning"
}
const TiendeoTimelineMarker = ({ color = "danger" }: ITimelineMarker) => (
  <Timeline.Marker isImage color={color} className="is-32x32">
    <Image src={tiendeoLogo} />
  </Timeline.Marker>
)

const Experience = () => {
  return (
    <Section>
      <Container>
        <Heading size={3}>Experience</Heading>
        <Timeline className="is-centered">
          <Timeline.Header color="primary">Present</Timeline.Header>

          <Timeline.Item
            color="primary"
            marker={<TiendeoTimelineMarker color="primary" />}
          >
            <p className="heading">October 2019</p>
            <div className="is-size-6">Tech Lead</div>
            <div className="is-size-7">Tiendeo Web Marketing S.L.</div>
            <Timeline.Item.Details>
              <p>
                Leading a small agile team responsible for the spinoff project{" "} 
                <a href="https://www.tiendeo.com/cashback">Tiendeo Cashback</a>.
              </p>
              <p>
                As a tech lead, I'm responsible for the definition of the main
                technological decisions behind the full system, both frontend and backend,
                and making sure the strategy is being applied correctly and on time.
              </p>
            </Timeline.Item.Details>
          </Timeline.Item>

          <Timeline.Item color="danger" marker={<TiendeoTimelineMarker />}>
            <p className="heading">July 2018</p>
            <div className="is-size-6">Senior Fullstack Engineer</div>
            <div className="is-size-7">Tiendeo Web Marketing S.L.</div>
            <Timeline.Item.Details>
              <p>
                Leading the architecture definition and implementation of a new frontend
                platform using the latest technologies.
              </p>
              <ul>
                <li>
                  Built a CI / CD pipeline for continuous delivery to a k8s cluster.
                </li>
                <li>
                  Design and implementation of an in-house framework for rapid prototyping based in React, NextJS and Typescript.
                </li>
                <li>
                  Promoted the implementation of a design system using React and Storybook.js
                </li>
              </ul>
            </Timeline.Item.Details>
          </Timeline.Item>

          <Timeline.Item
            color="warning"
            marker={<Timeline.Marker color="warning" />}
          >
            <p className="heading">January 2018</p>
            <div className="is-size-6">Senior Frontend Engineer</div>
            <div className="is-size-7">Atrápalo S.L.</div>
            <Timeline.Item.Details>
              <p></p>
            </Timeline.Item.Details>
          </Timeline.Item>

          <Timeline.Item color="danger" marker={<TiendeoTimelineMarker />}>
            <p className="heading">September 2014</p>
            <div className="is-size-6">Junior Fullstack Developer</div>
            <div className="is-size-7">Tiendeo Web Marketing S.L.</div>
            <Timeline.Item.Details>
              <p>
                Full Stack Engineer working with the Microsoft Stack (C#, MVC5,
                SQL Server) and React.js
              </p>

              <ul>
                <li>
                  Lead developer in the migration of legacy web applications to
                  React.js
                </li>

                <li>
                  Migrated the legacy ASP.NET Webforms website to the MVC
                  Framework
                </li>

                <li>Maintainer of the core API and search algorithms</li>
              </ul>
            </Timeline.Item.Details>
          </Timeline.Item>

          <Timeline.Item
            color="primary"
            marker={<Timeline.Marker color="primary" />}
          >
            <p className="heading">February 2013</p>
            <div className="is-size-6">Software Developer Intern</div>
            <div className="is-size-7">Fundació Equilibi</div>

            <Timeline.Item.Details>
              <p>
                Started my professional carreer here, working as an intern
                building static websites based on Drupal.
              </p>

              <ul>
                <li>Built HTML and CSS layouts based on a given design.</li>
                <li>Built some custom Drupal modules using PHP</li>
                <li>
                  Lead developer of{" "}
                  <a href="https://www.wapsi.org">https://www.wapsi.org</a>
                </li>
              </ul>
            </Timeline.Item.Details>
          </Timeline.Item>

          <Timeline.Header color="primary">Start</Timeline.Header>
        </Timeline>
      </Container>
    </Section>
  )
}

export default Experience
