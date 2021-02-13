import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { Button } from "react-bulma-components"

interface IProps {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const MotionIcon = motion.custom(FontAwesomeIcon);

function ThemeSelector({ darkMode, setDarkMode }: IProps) {
    const toggleTheme = () => setDarkMode(!darkMode);
    return (
        <Button
            className="theme-selector"
            onClick={toggleTheme}
        >
            <AnimatePresence>
                <motion.span
                    key={darkMode ? "dark" : "light"}
                    style={{position: "absolute", width: "100%"}}
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    exit={{scale: 0}}
                    transition={{ ease: "easeInOut", duration: .3 }}
                >
                    <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
                </motion.span>
            </AnimatePresence>
        </Button>
    )
}

export default ThemeSelector;
