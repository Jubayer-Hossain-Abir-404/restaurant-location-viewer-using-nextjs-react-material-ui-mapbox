import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputField() {
  return (
    <Box
      sx={{
        width: 300,
      }}
    >
      <TextField
        fullWidth
        label="Search love qestions and answers"
        id="input"
      />
    </Box>
  );
}
