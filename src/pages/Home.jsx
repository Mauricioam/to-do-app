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
   
    text: "Tomar agua",
    completed: false,
  },
  {
    
    text: "Comer Frutas",
    completed: true,
  },
  {
    
    text: "Beber cerveza",
    completed: true,
  }
];

function Home() {

  
const array = [
  {
   
    text: "Tomar agua",
    completed: false,
  },
  {
    
    text: "Comer Frutas",
    completed: true,
  },
  {
    
    text: "Beber cerveza",
    completed: true,
  },
  {
    
    text: "Otra cosa",
    completed: true,
  }
];

  const [input , setInput] = useState();
  const [modal, setModal] = useState(false);
  
  localStorage.setItem("task",JSON.stringify(array));
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="sm" sx={{
      maHeight:"40rem"
    }}>
    <Box  sx={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      border:"solid black",
      height:"100%"
      
      
    }}>
      <ToDoCounter toDos={array} />
      <ToDoSearch setInput={setInput}/>
      <ToDoList inputSearch={input}/>
    </Box>
      <AddToDo modal={modal} setModal={setModal}/>
  
    </Container>
    </ThemeProvider>
  );
}

export { Home };
