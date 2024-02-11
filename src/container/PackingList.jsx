import React, { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import Item from "./Item";

const PackingList = ({items, onDeleteItem, onToggleItems}) => {

  return (
    <>
      <ul className="list">
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id}/>
        ))
        }
      </ul> 
    </>
  );
};
export default PackingList;
