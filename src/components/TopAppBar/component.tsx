import { ThemeButton } from "@components/ThemeButton";
import { Dispatch, FunctionComponent, SetStateAction } from "react";

interface Props {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const TopAppBar: FunctionComponent<Props> = ({theme, setTheme}) => {
  return (
    <header className="flex justify-center items-center w-full h-76 bg-light-surface shadow dark:bg-dark-surface">
      <div className="container px-16 flex flex-row justify-between items-center md:px-32">
        <a href="/">
          <h1 className="mr-16 text-14 font-700 text-light-text dark:text-dark-text md:text-24">Where in the world?</h1>
        </a>
        <ThemeButton theme={theme} setTheme={setTheme} />
      </div>
    </header>
  );
}

export default TopAppBar;