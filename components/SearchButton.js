import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { styled } from "@mui/material";

const WhiteButton = styled(Button)`
  color: grey;
  border: 1px solid grey;
  padding: 10px 0;
`;



export default function SearchButton() {
    
  return (
    <WhiteButton style={{ marginLeft:8 }}>
      <SearchIcon style={{ width:32, height:32 } }/>
    </WhiteButton>
  );
}
