import * as React from "react";
import SpanishLayout from "./Layout.es";
import EnglishLayout from "./Layout.en";

function DefaultLayout({pageContext, ...props}) {
    if (pageContext.langKey === "es") {
        return (
            <SpanishLayout {...props} />
        );
    }

    return (
        <EnglishLayout {...props} />
    );
}

export default DefaultLayout;
