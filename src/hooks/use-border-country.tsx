import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

function useBorderCountry(borderCountryCode: string) {
  const { data, error } = useSWR(`https://restcountries.com/v2/alpha/${borderCountryCode}?fields=name,alpha3Code`, fetcher);

  return {
    borderCountry: data,
    isLoading: !error && !data,
    isError: error !== undefined
  }
}

export default useBorderCountry;