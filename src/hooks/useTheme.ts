import * as React from "react";

export type Theme = "light" | "dark";
function useTheme(): [Theme, (t: Theme) => void] {
  const [theme, setTheme] = React.useState<Theme>(getInitialTheme());

  React.useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  return [theme, setTheme];
}

function getInitialTheme(): Theme {
  try {
    const theme = localStorage.getItem("theme") as Theme;

    if (!["light", "dark"].includes(theme)) {
      throw new Error("Incorrect theme fount")
    }

    return theme;
  } catch (e) {
    return "light";
  }
}

export default useTheme;
