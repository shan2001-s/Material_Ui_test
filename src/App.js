import "./styles.css";
import { Button, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const myButtonColor1 =styled(Button)`
pt: 2;
`


export default function App() {
  const MyButtonColor = styled(Button)({
  
 padding: 34,



});
  return (
    <div className="App">
      <Typography variant="h4"> Hello CodeSandbox </Typography>
      <Typography variant="myTypography" mt={2}>
        Hello CodeSandbox{" "}
      </Typography>
      <h2>Start editing to see some magic happen!</h2>
      <Button sx={{ pt: 2, pb: 2 }} color="secondary" variant="contained">
        hello
      </Button>
      <MyButtonColor variant="contained" color='error'>Hello World</MyButtonColor>
    </div>
  );
}
