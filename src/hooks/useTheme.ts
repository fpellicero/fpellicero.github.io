import * as React from "react"
import useMatchMedia from "./useMatchMedia";

export type Theme = "light" | "dark"
function useTheme(): [Theme, (t: Theme) => void] {
    const prefersDarkTheme = useMatchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = React.useState<Theme>("light");
    const setThemeCallback = React.useCallback((t: Theme) => {
        setTheme(t);
        try {
            localStorage.setItem("theme", theme)
        } catch (e) {
            console.error(e)
        }
    }, [setTheme]);

    React.useEffect(() => {
        setTheme(prefersDarkTheme ? "dark" : "light");
    }, [prefersDarkTheme]);

    // Try get stored preferences
    React.useEffect(() => {
        try {
            const theme = localStorage.getItem("theme") as Theme

            if (!["light", "dark"].includes(theme)) {
                throw new Error("Incorrect theme fount")
            }

            setTheme(theme);
        } catch (e) {
            
        }
    }, []);

    return [theme, setThemeCallback]
}

export default useTheme
