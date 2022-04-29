export const addItem = (items) => {
  return {
    type: "ADD_ITEM",
    payload: items,
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};
