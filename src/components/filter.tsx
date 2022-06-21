import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const regions: string[] = [
  "all",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania"
];

function Filter({ setRegion }) {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  function handleRegionChange(region: string) {
    setSelectedRegion(region);
    setRegion(region);
  }

  return (
    <Listbox
      className="relative w-200 h-48 rounded-6 bg-light-surface shadow dark:bg-dark-surface"
      value={selectedRegion}
      onChange={handleRegionChange}
      as="div"
    >
      <Listbox.Button className="flex flex-row justify-between items-center px-24 w-full h-full text-light-text dark:text-dark-text">
        <span className="text-12 font-400">{selectedRegion === "all" ? "Filter by region" : selectedRegion}</span>
        <ChevronDownIcon className="w-12 h-12" />
      </Listbox.Button>
      <Listbox.Options className="absolute z-50 -bottom-4 left-0 translate-y-full w-full max-h-400 overflow-auto py-10 shadow rounded-6 bg-light-surface dark:bg-dark-surface">
        {regions.map((region) => (
          <Listbox.Option
            className="px-24 py-8 text-12 font-400 text-light-text dark:text-dark-text capitalize"
            key={region}
            value={region}
          >
            { region }
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export default Filter;