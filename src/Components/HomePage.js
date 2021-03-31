import React, {useEffect, useState} from 'react'
import CreatePostForm from './CreatePostForm';
import Item from './Item';
import axios from 'axios';

export default function HomePage() {

  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(-1);

  useEffect(() => {
    axios.get('https://tt-24-use-my-tech-stuff.herokuapp.com/api/items')
    .then(res => {
      console.log(res.data);
      setItems(res.data);
    })
    .catch(error =>{
      console.log(error);
    })
  }, [])



    return (
    <div>
      <h2>Home Page</h2>
      <CreatePostForm/>
      {items.length != 0 && items.map(item => <Item key = {item.item_id} item = {item} activeId = {activeId} setActiveId = {setActiveId}/>)}
      <br/>
    </div>)
  }