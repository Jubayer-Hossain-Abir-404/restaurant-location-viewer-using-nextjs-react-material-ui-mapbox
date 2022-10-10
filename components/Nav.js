import { AppBar, Box, Typography, styled, Stack } from "@mui/material";

import { server } from "../config";

import Link from "next/link";
import BasicSelect from "./BasicSelect";
import InputField from "./InputField";
import SearchButton from "./SearchButton";
import Notifications from "./Notifications";
import UploadButton from "./UploadButton";

const Header = styled(AppBar)`
  background: white;
  height: 100px;
  padding: 20px 0;
  width: 100%;
`;


const NavItems = styled(Box)`
  display: flex;
  align-items:center;
  color:black;
  & > div{
    margin-right:50px;
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
          <Typography noWrap>The Honest Elite</Typography>
        </LogoItems>

        <Stack direction="row" spacing={1} alignItems="center">
          <BasicSelect />
          <InputField />
          <SearchButton />
        </Stack>

        <NavItems>
          <Box>
            <Notifications />
          </Box>
          <Box>
            <UploadButton />
          </Box>
        </NavItems>
      </Stack>
    </Header>
  );
};

export default Nav;
