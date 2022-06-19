import ThemeButton from "./theme-button";

function TopAppBar() {
  return (
    <header className="mb-24 flex justify-center items-center w-full h-76 bg-light-surface shadow dark:bg-dark-surface">
      <div className="container px-16 flex flex-row justify-between items-center">
        <h1 className="text-14 font-700 text-light-text dark:text-dark-text">Where in the world?</h1>
        <ThemeButton />
      </div>
    </header>
  );
}

export default TopAppBar;