import "./styles.css";
import { Button, Stack } from "@mui/material";

export default function App2() {
  const text = true;
  return (
    <div className="App2">
      <Stack direction="row" spacing={2}>
        <Button variant="contained" sx={[
          { p: 3,
           width: 200 },
           text && {
             border: 10,
             borderColor:"error.main"
           }
        ]}>
          {" "}
          btn-1{" "}
        </Button>
        <Button variant="contained"> btn-2 </Button>
      </Stack>
    </div>
  );
}
