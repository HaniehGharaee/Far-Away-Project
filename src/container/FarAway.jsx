import React, { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import PackingList from "./PackingList";
import FormData from "./Form";

const FarAway = () => {
 
  const initialItem = [
    {
      id: 1, description: "Passports", quantity: 2, packed: false
    },
    {
      id: 2, description: "Socks", quantity:12, packed: true
    },
    {
      id:3, description: "Charger", quantity:1, packed: false
    }
  ]
  const [items, setItems] = useState(initialItem)
  const handleAddItems = (item) =>{
    //setItems((items) => items.push(item)) Not correct
    setItems((items) => [...items, item])
  }
  const handleDeleteItem = (id) =>{
    console.log(id)
    setItems(items => items.filter(item => item.id !== id))
  }
  const handleToggleItem = (id) =>{
    setItems((items) => 
    items.map((item) =>
     item.id === id ? {...item, packed: !item.packed } : item));
  }

  return (
    <>
      <div className='bg-orange-500 min-h-screen'>
        <span className="font-bold">Far Away</span>
        <FormData onAddItems={handleAddItems}/>
        <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem}/>
        <div>
          <footer>
            <em>You have X items on your list, and your already packed X (X%) </em>
            </footer>
        </div>
      </div>
    </>
  );
};
export default FarAway;
