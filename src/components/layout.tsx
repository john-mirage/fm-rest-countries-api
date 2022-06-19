import TopAppBar from "@components/top-app-bar";

function Layout({ children }) {
  return (
    <>
      <TopAppBar />
      <main className="container px-16">{ children }</main>
    </>
  );
}

export default Layout;