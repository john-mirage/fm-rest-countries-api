import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());

function useCountries () {
  const { data, error } = useSWR("https://restcountries.com/v3.1/all", fetcher);

  return {
    countries: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useCountries;