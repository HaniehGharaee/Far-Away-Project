import React, { useState } from "react";
//import { Form, Input, Button } from "antd";

const FormData = ({onAddItems}) => {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(5)
  //const [form] = Form.useForm();

  const handleSubmit = (e) => {
     e.preventDefault()
    // console.log(e)
    if(!description) return;
    const newItem = {description, quantity, packed:false,
      id: Date.now()};
    console.log(newItem, 'newItem')

    onAddItems(newItem);

    setDescription("")
    setQuantity(1)
  }
  // console.log('handleSubmit', handleSubmit)

  return (
    <form
      onSubmit={handleSubmit}
    >
      <h3>What do you need for your trip?</h3>
      <div>
        <select value={quantity}
          onChange={(e) => {
            console.log("dddddd", e.target.value);
            setQuantity(Number(e.target.value))
          }}
        >
          {/* <option value={1}>1</option>
         <option value={2}>2</option>
         <option value={3}>3</option> */}
          {Array.from({ length: 20 }, (_, i) => i + 1).map(
            (num) => (
              <option value={num} key={num}>
                {num}
              </option>
            )
          )}
        </select>
      </div>
      <div>
        <input type='text' placeholder="Item..." value={description}
          onChange={(e) => {
            console.log(e.target.value);
            setDescription(e.target.value)
          }}
        />
      </div>
      <button type="primary" htmlType="submit">{onAddItems}Add</button>
    </form>
  );
};

export default FormData;
