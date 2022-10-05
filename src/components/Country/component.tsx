import { BorderCountry } from "@components/BorderCountry";
import { FunctionComponent } from "react";

interface Props {
  country: AppData.Country;
}

const formatter = new Intl.NumberFormat("en-US");

const Country: FunctionComponent<Props> = ({ country }) => {
  return (
    <div className="md:w-568 md:mx-auto lg:w-full lg:mx-0 lg:flex lg:flex-row lg:justify-start lg:items-center">
      <div className="mb-48 md:w-560 lg:mb-0 lg:flex-none lg:mr-80">
        <div className="relative pt-60%">
          <img className="absolute top-0 left-0 w-full h-full object-cover object-center" draggable="false" src={country.flags.svg} alt={country.name} />
        </div>
      </div>
      <div className="text-light-text dark:text-dark-text lg:flex-1 lg:ml-40">
        <h2 className="mb-24 text-22 font-700 md:text-32">{country.name}</h2>
        <div className="sm:flex sm:flex-row sm:items-start">
          <div className="mb-48 sm:flex-1 sm:mr-16">
            <p className="mb-12 text-14 font-600">Native Name: <span className="font-300">{country.nativeName}</span></p>
            <p className="mb-12 text-14 font-600">Population: <span className="font-300">{formatter.format(country.population)}</span></p>
            <p className="mb-12 text-14 font-600">Region: <span className="font-300">{country.region}</span></p>
            <p className="mb-12 text-14 font-600">Sub Region: <span className="font-300">{country.subregion}</span></p>
            <p className="text-14 font-600">Capital: <span className="font-300">{country.capital}</span></p>
          </div>
          <div className="sm:flex-1 sm:ml-16">
            <p className="mb-12 text-14 font-600">Top Level Domain: <span className="font-300">{country.topLevelDomain.join(", ")}</span></p>
            <p className="mb-12 text-14 font-600">Currencies: <span className="font-300">{country.currencies.map((currency) => currency.name).join(", ")}</span></p>
            <p className="mb-44 text-14 font-600">languages: <span className="font-300">{country.languages.map((language) => language.name).join(", ")}</span></p>
          </div>
        </div>
        <div className="sm:flex sm:flex-row sm:justify-start sm:items-start">
          {country.borders.length > 0 && (
            <div className="sm:flex sm:flex-row sm:justify-start sm:items-start">
              <p className="mb-20 text-16 font-600 sm:mb-0 sm:flex-none sm:mr-16 sm:w-128">Border Countries:</p>
              <div className="-mx-5 -mb-10 flex flex-row flex-wrap justify-start items-center w-full sm:flex-1">
                {country.borders.map((borderCountryCode: string) => (
                  <BorderCountry
                    key={borderCountryCode}
                    borderCountryCode={borderCountryCode}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;