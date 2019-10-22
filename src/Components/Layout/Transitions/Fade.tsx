import * as React from "react";
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    transform: "translate3d(0, 25px, 0)",
    opacity: 0,
    
}

const transitionStyles = {
    entering: { },
    entered: { opacity: 1, transform: "" },
    exiting: { },
    exited: { },
};

interface IFadeProps extends React.HTMLProps<HTMLDivElement> {
    renderAs?: any;
}
const Fade = ({ 
    children, 
    style = {},
    renderAs = "div",
    ...props
}: IFadeProps) => (
    <Transition
        in={typeof window !== "undefined"}
        appear={true}
        timeout={10}
        exit={true}
    >
        {state => {
            console.log(state);
            return (
                React.createElement(
                    renderAs,
                    {
                        style: {
                            ...style,
                            ...defaultStyle,
                            ...transitionStyles[state]
                        },
                        ...props,
                    },
                    children
                )
        )}}
    </Transition>
);

export default Fade;
