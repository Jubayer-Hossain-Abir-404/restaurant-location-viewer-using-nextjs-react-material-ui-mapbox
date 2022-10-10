import { AppBar, Toolbar, Box, Typography, styled, Stack } from "@mui/material";

import { server } from "../config";

import Link from "next/link";
import BasicSelect from "./BasicSelect";
import InputField from "./InputField";
import SearchButton from "./SearchButton";

const Header = styled(AppBar)`
  background: white;
  height: 100px;
  padding: 20px 0;
  width: 100%;
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
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <LogoItems>
          <img src={logo} alt="logo" />
          <Typography>The Honest Elite</Typography>
        </LogoItems>

        <Stack direction="row" spacing={1} alignItems="center">
          <BasicSelect />
          <InputField />
          <SearchButton />
        </Stack>

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
      </Stack>
    </Header>
  );
};

export default Nav;
