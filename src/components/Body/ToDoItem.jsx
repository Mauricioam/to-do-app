import { ListItem, List, Checkbox, IconButton, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ToDoItem({ text, completed }) {

  const handleChecked = () => {


  }

  return (
    <>

        <List sx={{
            minWidth:"100%",
        }}>
          <ListItem>
            <Checkbox size="medium" onClick={handleChecked} />
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
