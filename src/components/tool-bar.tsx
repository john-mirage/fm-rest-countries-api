import Filter from "@components/filter";
import SearchBar from "@components/search-bar";

function ToolBar({ countries }) {
  return (
    <div className="mb-32 lg:flex lg:flex-row lg:justify-between lg:items-center">
      <SearchBar countries={countries} />
      <Filter />
    </div>
  );
}

export default ToolBar;