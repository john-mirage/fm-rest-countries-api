import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon as MoonIconOutlined } from "@heroicons/react/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/solid";

function ThemeButton({theme, setTheme}) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (theme) {
      setEnabled(theme === "dark");
    }
  }, [theme]);

  function handleSwitchToggle(isEnabled: boolean) {
    setTheme(isEnabled ? "dark" : "light");
    setEnabled(isEnabled);
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleSwitchToggle}
      className="flex flex-row items-center text-light-text dark:text-dark-text"
    >
      {enabled ? (
        <MoonIconSolid className="w-16 h-16 mr-8 md:w-18 md:h-18"/>
      ) : (
        <MoonIconOutlined className="w-16 h-16 mr-8 md:w-18 md:h-18"/>
      )}
      <span className="text-12 font-600 md:text-16">Dark Mode</span>
    </Switch>
  );
}

export default ThemeButton;