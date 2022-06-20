import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";

const regions: string[] = [
  "africa",
  "america",
  "asia",
  "europe",
  "oceania"
];

function SearchBar({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState(regions[0]);
  const [query, setQuery] = useState("");

  function handleCombobox() {

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
      <Combobox.Options className="absolute -bottom-4 left-0 translate-y-full w-full h-400 overflow-auto px-24 py-10 shadow rounded-6 bg-light-surface dark:bg-dark-surface">
        {countries.map((country) => (
          <Combobox.Option
            className="py-6 text-12 font-400 text-light-text dark:text-dark-text"
            key={country.cca3}
          >
            { country.name.common }
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}

export default SearchBar;