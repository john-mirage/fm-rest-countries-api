import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState(false as string | false);

  useEffect(() => {
    const themeIsDefined = "theme" in localStorage;
    const userThemeIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (localStorage.theme === "dark" || (!themeIsDefined && userThemeIsDark)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
      localStorage.theme = theme;
    }
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;