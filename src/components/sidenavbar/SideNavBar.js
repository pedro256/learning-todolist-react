import React from "react";
import { GlobalContext } from "../../hooks/GlobalContext";
import { useHistory } from "react-router-dom";

import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { FaTasks, FaCalendar, FaUser, FaRuler } from "react-icons/fa";
import "./index.css";

function SideNavBar() {
  const history = useHistory();
  const global = React.useContext(GlobalContext);

  function onToggle() {
    global.setExpandedNav(!global.expandedNav);
  }
  function handleClick(selected) {
    console.log(selected);
    history.push("/"+selected);
  }

  return (
    <SideNav
      onSelect={(selected) => {
        handleClick(selected);
      }}
      onToggle={onToggle}
      id="sdb"
    >
      <Toggle />
      <Nav defaultSelected="Tasks">
        <NavItem eventKey="Tasks">
          <NavIcon>
            <FaTasks />
          </NavIcon>
          <NavText>Tasks</NavText>
        </NavItem>

        <NavItem eventKey="Calendar">
          <NavIcon>
            <FaCalendar />
          </NavIcon>
          <NavText>Calendário</NavText>
        </NavItem>

        <NavItem eventKey="Profile">
          <NavIcon>
            <FaUser />
          </NavIcon>
          <NavText>Meu Perfil</NavText>
        </NavItem>

        <NavItem eventKey="Config">
          <NavIcon>
            <FaRuler />
          </NavIcon>
          <NavText>Configuração</NavText>
          <NavItem eventKey="Config/Language">
            <NavText>Idioma</NavText>
          </NavItem>
          <NavItem eventKey="Config/Dev">
            <NavText>Desenvolvedor</NavText>
          </NavItem>
        </NavItem>
      </Nav>
    </SideNav>
  );
}

export default SideNavBar;
