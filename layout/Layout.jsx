import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Main } from "./Styles";

function Layout() {
  const [isDark, setIsDark] = useState(false);

  function handleTheme() {
    console.log("dark mode btn clicked");
    setIsDark((prevState) => !prevState);
  }

  return (
    <Container className={isDark ? "dark" : ""}>
      <Header dark={isDark}>
        <div className="logo">Where in the world?</div>
        <div className="dark-mode" onClick={handleTheme}>
          Dark Mode
        </div>
      </Header>

      <Main dark={isDark}>
        <Outlet />
      </Main>
    </Container>
  );
}

export default Layout;
