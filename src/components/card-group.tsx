import { useEffect, useMemo, useState } from "react";
import { InView } from "react-intersection-observer";
import Card from "./card";

const COUNTRIES_PER_PAGE = 20;

function CardGroup({ countries }) {
  const [pageTotal, setPageTotal] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const numberOfCountries = countries.length;
    setPageTotal(Math.ceil(numberOfCountries / COUNTRIES_PER_PAGE));
    if (page !== 1) setPage(1);
  }, [countries]);

  const filteredCountries = useMemo(() => {
    if (page > 0) {
      const lastIndex = COUNTRIES_PER_PAGE * page;
      return countries.slice(0, lastIndex);
    }
    return false;
  }, [countries, page]);

  function handleNextPage(inView) {
    if (inView) {
      setPage(page + 1);
    }
  }

  return (
    <ul className="flex flex-row flex-wrap justify-around lg:justify-between lg:items-stretch lg:-mb-[75px]">
      {filteredCountries && filteredCountries.map((country, index) => {
        if (index < (filteredCountries.length - 1) || page === pageTotal) {
          return (
            <li key={country.alpha3Code}>
              <Card country={country} />
            </li>
          );
        } else {
          return (
            <InView key={country.alpha3Code} as="li" triggerOnce onChange={handleNextPage}>
              <Card country={country} />
            </InView>
          );
        }
      })}
    </ul>
  );
}

export default CardGroup;