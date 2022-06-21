import Filter from "@components/filter";
import SearchBar from "@components/search-bar";

function ToolBar({ countries, setRegion }) {
  return (
    <div className="mb-32 lg:flex lg:flex-row lg:justify-between lg:items-center">
      <SearchBar countries={countries} />
      <Filter setRegion={setRegion} />
    </div>
  );
}

export default ToolBar;