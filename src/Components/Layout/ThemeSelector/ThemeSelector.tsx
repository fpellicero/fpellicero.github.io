import * as React from "react";
import { CSSTransition } from "react-transition-group";
import {Button} from "react-bulma-components"
import "./ThemeSelector.scss"

interface IProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

function ThemeSelector({darkMode, setDarkMode}: IProps) {
  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <Button
      className="theme-selector"
      onClick={toggleTheme}
      data-tootip="HAHA"
    >
        <CSSTransition
          in={!darkMode}
          timeout={250}
          classNames="theme-selector__icon"
          mountOnEnter
          unmountOnExit
        >
            <i className="theme-selector__icon far fa-sun"/>
        </CSSTransition>
        <CSSTransition
          in={darkMode}
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
