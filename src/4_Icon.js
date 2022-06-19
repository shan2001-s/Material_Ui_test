import "./styles.css";
import { Button, Stack } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export default function App4() {
  return (
    <div className="App4">
      <IconButton aria-label="Example">
        <DeleteIcon color="primary" fontSize="large"></DeleteIcon>
      </IconButton>
    </div>
  );
}
