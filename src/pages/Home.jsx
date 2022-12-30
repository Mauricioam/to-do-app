import { ToDoCounter, ToDoSearch  } from "../components/Header/main";
import { AddToDo , ToDoList , AddModal } from "../components/Body/main";
import { Box, Container, createTheme, ThemeProvider } from '@mui/material/';
import { useState } from "react";


const theme = createTheme({
  typography:{
    fontFamily:['Secular One']
  }
})




const array = [
  {
   
    text: "Algo",
    completed: true,
  },
  {
    
    text: "Comer",
    completed: true,
  },
  {
   
    text: "Beber",
    completed: true,
  },
  {
    
    text: "Festejar campeonato mundial",
    completed: true,
  },
  {
   
    text: "Preparar fernet",
    completed: false,
  },
  {
   
    text: "Preparar fernet",
    completed: false,
  },
];

function Home() {

  const [input , setInput] = useState();


  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="sm">
    <Box  sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      border:"solid black"
    }}>
      <ToDoCounter toDos={array} />
      <ToDoSearch setInput={setInput}/>
      <ToDoList toDos={array} inputSearch={input}/>
    </Box>
      <AddToDo/>
      <AddModal toDos={array} />
    </Container>
    </ThemeProvider>
  );
}

export { Home };
