import Filter from "@components/filter";
import SearchBar from "@components/search-bar";

function ToolBar({ countries, setRegion }) {
  return (
    <div className="mb-32 md:flex md:flex-row md:justify-between md:items-center">
      <SearchBar countries={countries} />
      <Filter setRegion={setRegion} />
    </div>
  );
}

export default ToolBar;