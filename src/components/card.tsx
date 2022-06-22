import Link from "next/link";

function Card({ country }) {
  return (
    <div className="w-264 h-auto min-h-336 overflow-hidden rounded-6 shadow bg-light-surface dark:bg-dark-surface">
      <Link href={`country/${country.alpha3Code.toLowerCase()}`} aria-label="show more">
        <a className="w-full h-auto">
          <img
            className="w-full h-160 object-cover object-center"
            aria-hidden="true"
            draggable="false"
            src={country.flags.png}
          />
        </a>
      </Link>
      <div className="p-24 text-light-text dark:text-dark-text">
        <h3 className="mb-16 text-18 font-700">{country.name}</h3>
        <p className="mb-4 text-14 font-600">Population: <span className="font-300">{country.population}</span></p>
        <p className="mb-4 text-14 font-600">Region: <span className="font-300">{country.region}</span></p>
        <p className="text-14 font-600">Capital: <span className="font-300">{country.capital}</span></p>
      </div>
    </div>
  );
}

export default Card;