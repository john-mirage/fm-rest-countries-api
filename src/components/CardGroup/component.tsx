import { FunctionComponent, useEffect, useMemo, useState } from "react";
import { InView } from "react-intersection-observer";
import { Card } from "@components/Card";

interface Props {
  countries: AppData.CardCountry[];
}

const COUNTRIES_PER_PAGE = 20;

const CardGroup: FunctionComponent<Props> = ({ countries }) => {
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
    <ul className="grid grid-cols-1 justify-items-center gap-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-72">
      {filteredCountries && filteredCountries.map((country, index) => {
        if (index < (filteredCountries.length - 1) || page === pageTotal) {
          return (
            <li className="w-full max-w-264" key={country.alpha3Code}>
              <Card country={country} />
            </li>
          );
        } else {
          return (
            <InView className="w-full max-w-264" key={country.alpha3Code} as="li" triggerOnce onChange={handleNextPage}>
              <Card country={country} />
            </InView>
          );
        }
      })}
    </ul>
  );
}

export default CardGroup;