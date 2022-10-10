import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
} from "@mui/material";

import { server } from "../config";

import Link from "next/link";
import BasicSelect from "./BasicSelect";

const Header = styled(AppBar)`
  background: white;
  height: 100px;
  padding: 20px 0;
`;


const NavItems = styled(Box)`
  display: flex;
  align-items:center;
  margin-left: auto;
  justify-content: space-between;
  & > p {
    margin-right: 100px;
    cursor: pointer;
    color: black;
  }
`;
const LogoItems = styled(Box)`
  margin-left: 5%;
  color: black;
  & > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
  & > img {
    width: 89px;
    height: 35px;
  }
`;


const Nav = () => {
  const logo = `${server}/Images/logo.png`;
  return (
    <Header position="static">
      <Toolbar>
        <LogoItems>
          <img src={logo} alt="logo"/>
          <Typography>The Honest Elite</Typography>
        </LogoItems>

        <NavItems>
          <BasicSelect />
          <Link href="/about">
            <Typography>About</Typography>
          </Link>
          <Link href="/contact">
            <Typography>Contact</Typography>
          </Link>
        </NavItems>

        <NavItems>
          <Link href="/">
            <Typography>Home</Typography>
          </Link>
          <Link href="/about">
            <Typography>About</Typography>
          </Link>
          <Link href="/contact">
            <Typography>Contact</Typography>
          </Link>
        </NavItems>
      </Toolbar>
    </Header>
  );
};

export default Nav;
