import Button from "@mui/material/Button";
import { styled, Typography } from "@mui/material";
const PinkButton = styled(Button)`
  background: #ed028c;
  color: white;
  padding: 10px 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  white-space: nowrap;
  &:hover {
    background-color: #ed028c;
  }
  & > p {
    font-size: 14px;
  }
`;

const UploadButton = () => {
  return (
    <PinkButton>
      <Typography>Upload All Related</Typography>
    </PinkButton>
  );
};

export default UploadButton;
