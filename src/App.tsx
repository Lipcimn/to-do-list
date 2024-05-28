import { Button, TextField } from "@mui/material";
import { system } from "./app/system";
import "./App.css";

function App() {
  return (
    <>
      <TextField id="name-input" label="Name" variant="standard" />
      <Button
        variant="outlined"
        onClick={() => {
          const name = document.getElementById(
            "name-input"
          ) as HTMLInputElement;
          system.newTask({ name: name.value, completed: false });
          system.list.forEach((element) => console.log(element));
        }}
      >
        Create
      </Button>
    </>
  );
}

export default App;
