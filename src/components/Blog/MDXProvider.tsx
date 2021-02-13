import * as React from "react";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";

const components: MDXProviderComponents = {}

const MDXProviderComponent: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <MDXProvider components={components}>
            {children}
        </MDXProvider>
    )
}

export default MDXProviderComponent;