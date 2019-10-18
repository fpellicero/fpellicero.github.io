import * as React from "react";
import "./socials.scss";


const Socials = () => {
    return (
        <div className="socials">
            <div className="socials__item">
                <a href="https://www.linkedin.com/in/fpellicero/">
                    <i className="fa fa-linkedin"/>
                </a>
            </div>

            <div className="socials__item">
                <a href="https://github.com/fpellicero">
                    <i className="fa fa-github"/>
                </a>
            </div>

            <div className="socials__item">
                <a href="mailto:fpellicero@gmail.com">
                    <i className="fa fa-envelope"/>
                </a>
            </div>
        </div>
    )
}

export default Socials;
