import { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    if (theme) {
      document.documentElement.dataset.theme = theme;
      localStorage.theme = theme;
    } else {
      const themeIsDefined = "theme" in localStorage;
      const userThemeIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (localStorage.theme === "dark" || (!themeIsDefined && userThemeIsDark)) {
        if (theme !== "dark") setTheme("dark");
      } else if (theme !== "light") {
        setTheme("light");
      }
    }
  }, [theme]);

  return { theme, setTheme };
}

export default useTheme;