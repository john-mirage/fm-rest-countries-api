import { Fragment, useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import Fuse from "fuse.js";
import { useRouter } from "next/router";

const fuse = new Fuse([], {
  keys: ["name.common"]
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
    router.push(`country/${country.cca3.toLowerCase()}`);
  }

  return (
    <Combobox
      className="relative mb-40 w-full h-48 rounded-6 bg-light-surface shadow dark:bg-dark-surface lg:mb-0 lg:w-480"
      onChange={handleCombobox}
      as="div"
    >
      <SearchIcon className="absolute top-1/2 left-24 -translate-y-1/2 w-16 h-16 mr-24 text-light-text dark:text-dark-text" />
      <Combobox.Input
        className="w-full h-full rounded-6 pl-64 pr-24 text-12 font-400 text-light-text dark:text-dark-text bg-transparent placeholder-light-text/50 dark:placeholder-dark-text/50 focus:outline-none"
        placeholder="Search a country"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Combobox.Options className="absolute -bottom-4 left-0 translate-y-full w-full max-h-400 overflow-auto py-10 shadow rounded-6 bg-light-surface dark:bg-dark-surface">
        {filteredCountries.map((country) => (
          <Combobox.Option
            key={country.cca3}
            value={country}
            as={Fragment}
          >
            {({ active }) => (
              <li className={`px-24 py-8 text-12 font-400 text-light-text dark:text-dark-text ${active ? "bg-light-element dark:bg-dark-element" : ""}`}>
                { country.name.common }
              </li>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}

export default SearchBar;