namespace AppData {

  interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }

  interface Flag {
    svg: string;
    png: string;
  }

  interface Currency {
    code: string;
    name: string;
    symbol: string;
  }

  interface Country {
    borders: string[];
    capital: string;
    currencies: Currency[];
    flags: Flag;
    languages: Language[];
    name: string;
    nativeName: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
  }

  interface CardCountry {
    alpha3Code: string;
    capital: string;
    flags: Flag;
    independent: boolean;
    name: string;
    population: number;
    region: string;
  }

  interface BorderCountry {
    alpha3Code: string;
    name: string;
  }
  
}