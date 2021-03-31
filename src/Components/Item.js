import React from 'react'
import EditPostForm from './EditPostForm';

export default function Item(props) {

    const {item, activeId, setActiveId} = props;
  
    const handleClick = () => {
        setActiveId(item.item_id);
    }

    return (
      <div>
        <h3>{item.item_name}</h3>
        <p>{item.item_description}</p>
        <p>{item.item_price}</p>
        {activeId == item.item_id && <EditPostForm/>}
        {activeId != item.item_id && <button onClick = {handleClick}>Edit Item</button>}
      </div>)
    }
