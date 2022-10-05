import { Fragment, FunctionComponent, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

interface Props {
  setRegion: (newRegion: string) => void;
}

const regions: string[] = [
  "all",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania"
];

const Filter: FunctionComponent<Props> = ({ setRegion }) => {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  function handleRegionChange(region: string) {
    setSelectedRegion(region);
    setRegion(region);
  }

  return (
    <Listbox
      className="relative z-40 w-200 h-48 rounded-6 bg-light-surface shadow dark:bg-dark-surface"
      value={selectedRegion}
      onChange={handleRegionChange}
      as="div"
    >
      <Listbox.Button className="flex flex-row justify-between items-center px-24 w-full h-full text-light-text dark:text-dark-text">
        <span className="text-12 font-400 md:text-14">{selectedRegion === "all" ? "Filter by region" : selectedRegion}</span>
        <ChevronDownIcon className="w-12 h-12" />
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="absolute -bottom-4 left-0 translate-y-full w-full max-h-400 overflow-auto py-10 shadow-lg rounded-6 bg-light-surface dark:bg-dark-surface">
          {regions.map((region) => (
            <Listbox.Option
              key={region}
              value={region}
              as={Fragment}
              disabled={selectedRegion === region}
            >
              {({ active, selected }) => (
                <li className={`px-24 py-8 text-12 font-400 capitalize text-light-text dark:text-dark-text cursor-pointer ${selected ? "bg-light-surface-hover dark:bg-dark-surface-hover text-light-text/30 dark:text-dark-text/30 cursor-default" : ""} ${active ? "bg-light-surface-hover dark:bg-dark-surface-hover" : ""} md:text-14`}>
                  {region}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

export default Filter;