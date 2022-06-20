import SearchBar from "./search-bar";

function ToolBar({ countries }) {
  return (
    <div className="mb-32 lg:flex lg:flex-row lg:justify-between lg:items-center">
      <SearchBar countries={countries} />
    </div>
  );
}

export default ToolBar;