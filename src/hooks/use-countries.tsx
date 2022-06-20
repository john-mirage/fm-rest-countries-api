import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

function useCountries () {
  const { data, error } = useSWR("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3", fetcher);

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useCountries;