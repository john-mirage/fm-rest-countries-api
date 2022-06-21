import BorderCountry from "@components/border-country";

function Country({ country }) {
  return (
    <div>
      {country.borders.map((borderCountryCode: string) => (
        <BorderCountry
          key={borderCountryCode}
          borderCountryCode={borderCountryCode}
        />
      ))}
    </div>
  );
}

export default Country;