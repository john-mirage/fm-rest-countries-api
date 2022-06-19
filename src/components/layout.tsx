import TopAppBar from "@components/top-app-bar";

function Layout({ children }) {
  return (
    <>
      <TopAppBar />
      <main className="mx-auto container px-16 pb-60">{ children }</main>
    </>
  );
}

export default Layout;