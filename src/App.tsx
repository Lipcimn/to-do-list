import { Button, TextField } from "@mui/material";
import { system } from "./app/system";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <TextField
        id="name-input"
        label="Name"
        variant="standard"
        onChange={(element) => setName(element.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => {
          system.newTask({ name: name, completed: false });
          system.list.forEach((element) => console.log(element));
        }}
      >
        Create
      </Button>
    </>
  );
}

export default App;
