import React from "react"
import Helmet from "react-helmet"
import { Container, Content, Section } from "react-bulma-components"
import BlogPostList from "../Components/Blog/BlogPostsList/BlogPostList"

export default () => {
    return (
        <>
            <Helmet>
                <title>Blog | Francesc Pellicero</title>
            </Helmet>

            <Container>
                <Section>
                    <Content>
                        <p>¡Bienvenidos a mi blog!</p>
                        <p>
                            Aquí escribo sobre cosas que me importan, sobretodo
                            acerca de desarrollo frontend. A veces también escribo
                            tutoriales, así que quizás encuentres alguno interesante
                            si sigues haciendo scroll.
                        </p>

                        <hr />

                        <BlogPostList />
                    </Content>
                </Section>
            </Container>
        </>
    )
}
