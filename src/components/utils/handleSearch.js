const handleSearch = (inputSearch,state,array) => {
    if(!inputSearch){
        state(array);
    } else {
      let result = array.filter((item)=> item.text.toLowerCase().includes(inputSearch));
      state(result);
    }
};

export {handleSearch};