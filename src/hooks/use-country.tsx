import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

function useCountry(countryCode: string) {
  const { data, error } = useSWR(countryCode ? `https://restcountries.com/v2/alpha/${countryCode}?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flags` : null, fetcher);

  return {
    country: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useCountry;