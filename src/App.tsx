import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Checkbox,
} from "@mui/material";
import Task from "./types/task";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  /**
   * Handles the change event of the input element.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event.
   * @return {void} This function does not return anything.
   */
  const handleInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };
  /**
   * Handles the button click event.
   *
   * @return {void} This function does not return anything.
   */
  const handleButtonClick = (): void => {
    if (name.trim() !== "") {
      setTasks((tasks) => [...tasks, { name: name, completed: false }]);
      setName("");
    }
  };
  /**
   * Handles the key down event of the input element when the Enter key is pressed.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} event - The keyboard event triggered by the input element.
   * @return {void} This function does not return anything.
   */
  const handleInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };
  /**
   * Updates the completion status of a task in the tasks array based on the checkbox event.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The event triggered by the checkbox change.
   * @param {number} index - The index of the task in the tasks array.
   * @return {void} This function does not return anything.
   */
  const handleTaskCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    const checked: boolean = event.target.checked;
    const updatedTasks: Task[] = tasks.map((element, i) => {
      return i === index ? { ...element, completed: checked } : element;
    });
    setTasks(updatedTasks);
  };
  return (
    <>
      <div>
        <TextField
          id="name-input"
          label="Name"
          variant="standard"
          value={name}
          onChange={handleInputValue}
          onKeyDown={handleInputKeyDown}
        />
        <Button variant="outlined" onClick={handleButtonClick}>
          Create
        </Button>
      </div>
      <div>
        <List>
          {tasks.map((element, index) => {
            return (
              <ListItem key={index}>
                <Checkbox
                  onChange={(event) => handleTaskCheckbox(event, index)}
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
