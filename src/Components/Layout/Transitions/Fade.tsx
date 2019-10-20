import * as React from "react";
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    transform: "translate3d(0, 25px, 0)",
    opacity: 0,
    
}

const transitionStyles = {
    entering: { opacity: 1, transform: "" },
    entered: { opacity: 1, transform: "" },
    exiting: { opacity: 0, transform: "translate3d(0, 25px, 0)"},
    exited: { opacity: 0, transform: "translate3d(0, 25px, 0)"},
};

const Fade = ({ children }) => (
    <Transition
        in={true}
        appear={typeof window !== "undefined"}
        timeout={duration}
    >
        {state => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                {children}
            </div>
        )}
    </Transition>
);

export default Fade;
