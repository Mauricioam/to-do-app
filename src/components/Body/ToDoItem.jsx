import { useState } from "react";
import { ListItem, List, Checkbox, IconButton, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDoItem({ text }) {

  return (
    <>

        <List sx={{
            minWidth:"100%",
        }}>
          <ListItem>
            <Checkbox size="medium"  />
            <Container>
            <Typography variant="h6">
            {text}
            </Typography>
            </Container>
        <IconButton edge="end">
          <DeleteIcon />
        </IconButton>
          </ListItem>
        </List>
    
    </>
  );
}

export { ToDoItem };
