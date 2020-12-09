import React, { useState } from "react";
import Route, { useHistory } from "react-router-dom";
import routes from "../routes/routes";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown
} from "reactstrap";

function Blog() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const history = useHistory();

  function handleClick() {
    history.push(routes.login);
  }

  return (
    <div>
      <label>
        <h1>Blog </h1>
      </label>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Menu</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Home</DropdownItem>
          <DropdownItem onClick={handleClick}>Login</DropdownItem>
          <DropdownItem />
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

export default Blog;
