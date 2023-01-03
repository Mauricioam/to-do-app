const handleModal = (state,setState) => {
  
    if(!state){
        setState(true)
    } else {
        setState(false);
    }

};

export {handleModal};