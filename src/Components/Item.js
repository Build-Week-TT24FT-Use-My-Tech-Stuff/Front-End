import React from 'react'
import EditPostForm from './EditPostForm';
import axiosWithAuth from '../helpers/axiosWithAuth.js';

export default function Item(props) {
  const {item, activeId, setActiveId} = props;
  

  const handleClickEdit = () => {
      setActiveId(item.item_id);
  }
  const handleClickDelete = e => {
    e.preventDefault();
  axiosWithAuth().delete(`/items/item/${item.item_id}`)
  .then(res => {
    console.log(res);
          setActiveId(-1);
  })
  .catch(error => {
    console.log(error);
  })
  }

  return (
    <li>
    <div>
      <div>
          {item.item_name}
      </div>
      <div>
          {item.item_description}  ${item.item_price}
      </div>
      {activeId === item.item_id && <EditPostForm values = {item} setActiveId = {setActiveId}/>}
      {activeId !== item.item_id &&  <div className="btn-group">
        <button type="button" onClick={handleClickEdit}>
          Edit {props.name}
        </button>
        <button type="button" onClick={handleClickDelete}>
          Delete {props.name}
        </button>
      </div>}
    </div>
    </li>
    )}