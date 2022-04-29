import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../Redux/actiontypes/ProductTypes";
const Header = () => {
  // const selector = useSelector((state) => state.addItemReducer.list);
  // const selector = useSelector((state) => state.addItemReducer.list);


  // console.log(selector, "selector");

  const dispatch = useDispatch();
  // console.log("selector", selector);
  const [add, setAdd] = useState("");
  // console.log(add);
  const handleChange = () => {
    dispatch(addItem(add));
    setAdd("");
  };
  const handleDelete = (index) => {
    dispatch(deleteItem(index));
  };

  return (
    <div>
      <h1>Header</h1>
      <input type="text" value={add} onChange={(e) => setAdd(e.target.value)} />
      <button onClick={handleChange}>addItem</button>

      {/* {selector.map((item, index) => {
        return (
          <div>
            <h1>{item}</h1>
            <button
              onClick={() => {
                handleDelete(index);
              }}
            >
              delete
            </button>
          </div>
        );
      })} */}
      <h1></h1>
    </div>
  );
};

export default Header;
