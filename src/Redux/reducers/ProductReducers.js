// import { ActionTypes } from "../actiontypes/action-types";
const intialState = {
  list: [],
};
export const addItemReducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { list: [...state.list, action.payload] };
    case "DELETE_ITEM":
      const del = state.list.filter((item, index) => index !== action.payload);

      return {
        list: [...del],
      };
    default:
      return state;
  }
};
