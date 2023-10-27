import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import ThemeProvider from "./ThemeProvider";

export default function Form() {
  return (
    <ThemeProvider theme="auto">
      <form>
        <TextField 
          type="password"
          InputProps={{
            endAdornment: (
            <InputAdornment position="end">
              <IconButton
                size="medium"
                tabIndex={-1}
                aria-label="toggle password visibility"
              >
                <Visibility />
              </IconButton>
            </InputAdornment>
            )
          }}
        />
      </form>
    </ThemeProvider>
  );
}
