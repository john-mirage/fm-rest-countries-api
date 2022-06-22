import BorderCountry from "@components/border-country";

function Country({ country }) {
  return (
    <div className="pt-64 lg:flex lg:flex-row lg:justify-start lg:items-center">
      <img className="mb-48 w-full h-230 object-cover object-center lg:mb-0 lg:flex-none lg:mr-80 lg:w-560 lg:h-400" draggable="false" src={country.flags.svg}/>
      <div className="text-light-text dark:text-dark-text lg:flex-1 lg:ml-40">
        <h2 className="mb-24 text-22 font-700">{country.name}</h2>
        <div className="lg:flex lg:flex-row lg:items-start">
          <div className="mb-48 lg:flex-1 lg:mr-16">
            <p className="mb-12 text-14 font-600">Native Name: <span className="font-300">{country.nativeName}</span></p>
            <p className="mb-12 text-14 font-600">Population: <span className="font-300">{country.population}</span></p>
            <p className="mb-12 text-14 font-600">Region: <span className="font-300">{country.region}</span></p>
            <p className="mb-12 text-14 font-600">Sub Region: <span className="font-300">{country.subregion}</span></p>
            <p className="text-14 font-600">Capital: <span className="font-300">{country.capital}</span></p>
          </div>
          <div className="lg:flex-1 lg:ml-16">
            <p className="mb-12 text-14 font-600">Top Level Domain: <span className="font-300">{country.topLevelDomain.join(", ")}</span></p>
            <p className="mb-12 text-14 font-600">Currencies: <span className="font-300">{country.currencies.map((currency) => currency.name).join(", ")}</span></p>
            <p className="mb-44 text-14 font-600">languages: <span className="font-300">{country.languages.map((language) => language.name).join(", ")}</span></p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row lg:justify-start lg:items-start">
          <p className="mb-20 text-16 font-600 lg:mb-0 lg:flex-none lg:mr-16 lg:w-128">Border Countries:</p>
          <div className="-mx-5 -mb-10 flex flex-row flex-wrap justify-start items-center w-full lg:flex-1">
          {country.borders.map((borderCountryCode: string) => (
            <BorderCountry
              key={borderCountryCode}
              borderCountryCode={borderCountryCode}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;