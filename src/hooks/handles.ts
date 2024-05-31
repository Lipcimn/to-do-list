import React from "react";
import Task from "../types/task";

/**
 * Handles the change event of the input element or textarea element.
 *
 * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The change event.
 * @param {React.Dispatch<React.SetStateAction<string>>} setString - The function to update the state with the new value.
 * @return {void} This function does not return anything.
 */
const handleInputValue = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setString: React.Dispatch<React.SetStateAction<string>>
): void => {
  setString(event.target.value);
};
/**
 * Handles the click event of a button or keyboard event of an input element.
 *
 * @param {React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>} event - The click or keyboard event.
 * @param {string} title - The title to be added as a task.
 * @param {React.Dispatch<React.SetStateAction<string>>} setTitle - The function to update the title state.
 * @param {React.Dispatch<React.SetStateAction<Task[]>>} setTasks - The function to update the tasks state.
 * @return {void} This function does not return anything.
 */
const handleButtonClick = (
  event:
    | React.MouseEvent<HTMLButtonElement>
    | React.KeyboardEvent<HTMLInputElement>,
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): void => {
  if (event.type === "click") {
    if (title.trim() !== "") {
      setTasks((tasks) => [...tasks, { name: title, completed: false }]);
      setTitle("");
    }
  }
};
/**
 * Handles the key down event of the input element when the Enter key is pressed.
 *
 * @param {React.KeyboardEvent<HTMLDivElement>} event - The keyboard event triggered by the input element.
 * @param {string} title - The title to be added as a task.
 * @param {React.Dispatch<React.SetStateAction<string>>} setTitle - The function to update the title state.
 * @param {React.Dispatch<React.SetStateAction<Task[]>>} setTasks - The function to update the tasks state.
 * @return {void} This function does not return anything.
 */
const handleInputKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): void => {
  if (event.key === "Enter") {
    if (title.trim() !== "") {
      setTasks((tasks) => [...tasks, { name: title, completed: false }]);
      setTitle("");
    }
  }
};
/**
 * Updates the completion status of a task in the tasks array based on the checkbox event.
 *
 * @param {React.ChangeEvent<HTMLInputElement>} event - The event triggered by the checkbox change.
 * @param {number} index - The index of the task in the tasks array.
 * @param {Task[]} tasks - The array of tasks.
 * @param {React.Dispatch<React.SetStateAction<Task[]>>} setTasks - The function to update the tasks state.
 * @return {void} This function does not return anything.
 */
const handleTaskCheckbox = (
  event: React.ChangeEvent<HTMLInputElement>,
  index: number,
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): void => {
  const checked: boolean = event.target.checked;
  const updatedTasks: Task[] = tasks.map((element, i) => {
    return i === index ? { ...element, completed: checked } : element;
  });
  setTasks(updatedTasks);
};

export {
  handleInputValue,
  handleButtonClick,
  handleInputKeyDown,
  handleTaskCheckbox,
};
