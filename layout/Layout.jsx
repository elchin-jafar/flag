import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Main } from "./Styles";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";

function Layout() {
  const [isDark, setIsDark] = useState(false);

  function handleTheme() {
    setIsDark((prevState) => !prevState);
  }

  return (
    <Container className={isDark ? "dark" : ""}>
      <Header dark={isDark}>
        <div className="logo">Where in the world?</div>
        <div className="dark-mode" onClick={handleTheme}>
          <div className="icon">
            {" "}
            {isDark ? <LightModeIcon /> : <NightlightRoundIcon />}{" "}
          </div>{" "}
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
