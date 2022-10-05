import { TopAppBar } from "@components/TopAppBar";
import useTheme from "@hooks/use-theme";

function Layout({ children }) {
  const [theme, setTheme] = useTheme();

  return (
    <>
      <TopAppBar theme={theme} setTheme={setTheme} />
      <main className="mx-auto container px-16 pb-60 md:px-32">{ children }</main>
    </>
  );
}

export default Layout;