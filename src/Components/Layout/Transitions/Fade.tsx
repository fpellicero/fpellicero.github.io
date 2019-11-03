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
    exited: { display: "none"},
};

interface IFadeProps extends React.HTMLProps<HTMLDivElement> {
    visible?: boolean;
    renderAs?: any;
}
const Fade = ({ 
    children, 
    style = {},
    renderAs = "div",
    visible = true,
    ...props
}: IFadeProps) => (
    <Transition
        in={visible}
        appear={typeof window !== "undefined"}
        timeout={250}
        exit={true}
    >
        {state => {
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
