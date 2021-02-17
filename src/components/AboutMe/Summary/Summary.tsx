import { Trans } from "@lingui/macro"
import * as React from "react"
import { Content, Heading } from "react-bulma-components"

const Summary = () => {
    return (
        <Content textAlignment="justified">
            <Heading renderAs="h2">About me</Heading>
            <Trans>
                <div>
                    <p>
                        Passionate software developer, Javascript lover and team
                        player. I'm always looking for technical challenges, and I
                        value a team with strong bonds over anything else.
                </p>

                    <p>
                        Big advocate of Keeping Things Simple, but I love to
                        over-engineer things in my free time to push my boundaries.
                        Trying to deliver the best quality software possible. Never
                        satisfied with the status-quo, I question things and try to
                        improve them constantly.
                </p>

                    <p>
                        Mountain biker. Salsa dancer. Book reader. Videogame player.
                        One day I'll learn to play guitar (🤞).
                </p>
                </div>
            </Trans>
        </Content>
    )
}

export default Summary
