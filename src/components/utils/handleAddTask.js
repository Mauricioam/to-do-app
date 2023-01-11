const handleAddtask = (e, setState) => {
  setState({ text: e.currentTarget.value, completed: false });
};

export { handleAddtask };
