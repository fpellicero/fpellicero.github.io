import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { Theme } from "../../../hooks/useTheme";
import {Button} from "react-bulma-components"
import "./ThemeSelector.scss"

interface IProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

function ThemeSelector({setTheme, theme}: IProps) {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <Button
      className="theme-selector"
      onClick={toggleTheme}
      data-tootip="HAHA"
    >
        <CSSTransition
          in={theme === "light"}
          timeout={250}
          classNames="theme-selector__icon"
          mountOnEnter
          unmountOnExit
        >
            <i className="theme-selector__icon far fa-sun"/>
        </CSSTransition>
        <CSSTransition
          in={theme === "dark"}
          timeout={250}
          classNames="theme-selector__icon"
          mountOnEnter
          unmountOnExit
        >
          <i className="theme-selector__icon far fa-moon"/>
        </CSSTransition>
    </Button>
  )
}

export default ThemeSelector;
