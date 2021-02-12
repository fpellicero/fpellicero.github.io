import * as React from "react"
import {
    Columns,
    Progress,
    Heading,
    Section,
    Container,
} from "react-bulma-components"
import anime from "animejs"

interface IProps {
    name: string
    value: number
}

const Skill = ({ name, value }: IProps) => {
    const [currentValue, setCurrentValue] = React.useState(0)

    React.useEffect(() => {
        let animationTarget = {
            current: 0,
        }

        anime({
            targets: animationTarget,
            current: value,
            duration: 1000,
            cycles: 1000,
            round: 1,
            easing: "easeOutCirc",
            update: function() {
                setCurrentValue(animationTarget.current)
            },
        })
    }, [value])

    return (
        <Columns.Column size="half">
            <div>{name}</div>
            <Progress max={1000} value={currentValue} color="info" />
        </Columns.Column>
    )
}

const Skills = () => {
    const skills = {
        React: 1000,
        Redux: 900,
        Typescript: 900,
        Webpack: 800,
        "Rollup.js": 700,
        Docker: 700,
    }

    const renderSkills = () =>
        Object.keys(skills)
            .map(key => ({ name: key, value: skills[key] }))
            .map(({ name, value }) => (
                <Skill key={name} name={name} value={value} />
            ))

    return (
        <Section>
            <Container>
                <Columns>
                    <Columns.Column size={12}>
                        <Heading size={3}>My skills</Heading>
                    </Columns.Column>
                    {renderSkills()}
                </Columns>
            </Container>
        </Section>
    )
}

export default Skills
