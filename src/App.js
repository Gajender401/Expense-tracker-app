import Details from "./components/Details/Details";
import { Grid } from "@mui/material";
import Main from "./components/Main/Main";

function App() {

  return (
    <div  >
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ height: "100vh" }}
      >
        <Grid style={{margin:"10px"}} item xs={12} sm={3.5}>
          <Details title="Income" />
        </Grid>
        <Grid style={{margin:"10px"}} item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid style={{margin:"10px"}} item xs={12} sm={3.5}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
