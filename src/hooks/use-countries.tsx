import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

function useCountries() {
  const { data, error } = useSWR("https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha3Code", fetcher);

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error !== undefined
  }
}

export default useCountries;