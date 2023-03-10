import { TextField } from "@mui/material";

import { handleInput } from "../utils/handleInput";

function ToDoSearch({ setInput }) {
  return (
    <>
      <form>
        <TextField
          autoComplete="false"
          variant="outlined"
          size="small"
          placeholder="Buscar..."
          onChange={(e) => handleInput(e, setInput)}
        />
      </form>
    </>
  );
}

export { ToDoSearch };
