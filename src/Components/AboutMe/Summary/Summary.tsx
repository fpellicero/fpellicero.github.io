import * as React from "react";
import { Content, Heading } from "react-bulma-components";

const Summary = () => {
    return (
        <Content textAlignment="justified">
            <Heading renderAs="h2">About me</Heading>
            <div>
                <p>
                    I consider myself a passionate software developer and a team player.
                    I value the team the most, always trying to add the most value to the
                    team and getting the most out of it.
                </p>

                <p>
                    Always trying to improve and expand my skills, learn new technologies 
                    and apply best practices to deliver the best quality software possible.
                </p>

                <p>
                    Front End developer by heart, a big fan of React.js and a strong Javascript
                    advocate (I do actually think that is one of the most powerful tools ever 
                    built, if used properly).
                </p>
            </div>
        </Content>
    );
}

export default Summary;