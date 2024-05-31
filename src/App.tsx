import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Checkbox,
} from "@mui/material";
import Task from "./types/task";
import {
  handleInputValue,
  handleButtonClick,
  handleInputKeyDown,
  handleTaskCheckbox,
} from "./hooks/handles";
import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <>
      <div>
        <TextField
          id="name-input"
          label="Name"
          variant="standard"
          value={title}
          onChange={(event) => handleInputValue(event, setTitle)}
          onKeyDown={(event) =>
            handleInputKeyDown(event, title, setTitle, setTasks)
          }
        />
        <Button
          variant="outlined"
          onClick={(event) =>
            handleButtonClick(event, title, setTitle, setTasks)
          }
        >
          Create
        </Button>
      </div>
      <div>
        <List>
          {tasks.map((element, index) => {
            return (
              <ListItem key={index}>
                <Checkbox
                  onChange={(event) =>
                    handleTaskCheckbox(event, index, tasks, setTasks)
                  }
                ></Checkbox>
                <ListItemText
                  primary={element.name}
                  secondary={element.completed ? "Completed" : "Not Completed"}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </>
  );
}

export default App;
