import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import Fuse from "fuse.js";
import { useRouter } from "next/router";

const fuse = new Fuse([], {
  keys: ["name"]
});

function SearchBar({ countries }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fuse.setCollection(countries);
  }, []);

  const filteredCountries = query === ""
    ? countries
    : fuse.search(query.toLowerCase()).map((result) => result.item);

  function handleCombobox(country) {
    router.push(`country/${country.alpha3Code.toLowerCase()}`);
  }

  return (
    <Combobox
      className="relative z-50 mb-40 w-full h-48 rounded-6 bg-light-surface shadow dark:bg-dark-surface md:mb-0 md:w-480"
      value=""
      onChange={handleCombobox}
      as="div"
    >
      <SearchIcon className="absolute top-1/2 left-24 -translate-y-1/2 w-16 h-16 mr-24 text-light-text dark:text-dark-text" />
      <Combobox.Input
        className="w-full h-full rounded-6 pl-64 pr-24 text-12 font-400 text-light-text dark:text-dark-text bg-transparent placeholder-light-text/50 dark:placeholder-dark-text/50 focus:outline-none md:text-14"
        placeholder="Search a country..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Combobox.Options className="absolute -bottom-4 left-0 translate-y-full w-full max-h-400 overflow-auto styled-scrollbar py-10 shadow-lg rounded-6 bg-light-surface dark:bg-dark-surface">
          {filteredCountries.map((country) => (
            <Combobox.Option
              key={country.alpha3Code}
              value={country}
              as={Fragment}
            >
              {({ active }) => (
                <li className={`px-24 py-8 text-12 font-400 text-light-text dark:text-dark-text cursor-pointer ${active ? "bg-light-surface-hover dark:bg-dark-surface-hover" : ""} md:text-14`}>
                  {country.name}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
}

export default SearchBar;