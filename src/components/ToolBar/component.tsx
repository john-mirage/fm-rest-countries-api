import { Filter } from "@components/Filter";
import { SearchBar } from "@components/SearchBar";
import { FunctionComponent } from "react";

interface Props {
  countries: AppData.Country[];
  setRegion: (newRegion: string) => void;
}

const ToolBar: FunctionComponent<Props> = ({ countries, setRegion }) => {
  return (
    <div className="mt-24 mb-32 md:mt-48 md:mb-48 md:flex md:flex-row md:justify-between md:items-center">
      <SearchBar countries={countries} />
      <Filter setRegion={setRegion} />
    </div>
  );
}

export default ToolBar;