import TopAppBar from "@components/top-app-bar";

function Layout({ children }) {
  return (
    <>
      <TopAppBar />
      <main>{ children }</main>
    </>
  );
}

export default Layout;