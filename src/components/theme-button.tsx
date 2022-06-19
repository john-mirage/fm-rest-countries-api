import { useState } from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon as MoonIconOutlined } from "@heroicons/react/outline";
import { MoonIcon as MoonIconSolid } from "@heroicons/react/solid";

function ThemeButton() {
  const [enabled, setEnabled] = useState(false);

  function handleSwitchToggle(isEnabled: boolean) {
    document.documentElement.dataset.theme = isEnabled ? "dark" : "light";
    setEnabled(isEnabled);
  }

  return (
    <Switch
      checked={enabled}
      onChange={handleSwitchToggle}
      className="flex flex-row items-center text-light-text dark:text-dark-text"
    >
      {enabled ? (
        <MoonIconSolid className="w-16 h-16 mr-8"/>
      ) : (
        <MoonIconOutlined className="w-16 h-16 mr-8"/>
      )}
      <span className="text-12 font-600">Dark Mode</span>
    </Switch>
  );
}

export default ThemeButton;