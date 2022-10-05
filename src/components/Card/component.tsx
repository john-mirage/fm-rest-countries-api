import Link from "next/link";

const formatter = new Intl.NumberFormat("en-US");

function Card({ country }) {
  return (
    <div className="w-full h-auto min-h-336 overflow-hidden rounded-6 shadow bg-light-surface dark:bg-dark-surface">
      <Link href={`country/${country.alpha3Code.toLowerCase()}`}>
        <a className="relative block w-full h-auto pt-60% xs:pt-0 xs:h-160" aria-label={`go to the ${country.name} country page`}>
          <img
            className="absolute z-10 top-0 left-0 w-full h-full object-cover object-center"
            aria-hidden="true"
            draggable="false"
            src={country.flags.png}
            alt={`${country.name} flag`}
          />
        </a>
      </Link>
      <div className="p-24 text-light-text dark:text-dark-text">
        <h2 className="mb-16 text-18 font-700">{country.name}</h2>
        <p className="mb-4 text-14 font-600">Population: <span className="font-300">{formatter.format(country.population)}</span></p>
        <p className="mb-4 text-14 font-600">Region: <span className="font-300">{country.region}</span></p>
        <p className="text-14 font-600">Capital: <span className="font-300">{country.capital}</span></p>
      </div>
    </div>
  );
}

export default Card;