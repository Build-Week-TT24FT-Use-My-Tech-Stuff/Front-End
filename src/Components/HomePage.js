import React, { useState, useEffect} from 'react'
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import CreatePostForm from './CreatePostForm';
import EditPostForm from './EditPostForm';
import Item from './Item';
import styled from 'styled-components'

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

   useEffect(() => {
    axios.get('https://tt-24-use-my-tech-stuff.herokuapp.com/api/items')
    .then(res => {
      setItems(res.data);
    })
    .catch(error =>{
      console.log(error);
    })
  }, [])

  const addPost = (posts) => {
    setItems(posts);
  }

//STYLING//
  const SeperateCDforms = styled.div`
  display: flexbox;
  flex-direction: row;
	margin: 0 auto;
  display: in-line;
`
const TitleBox = styled.h1`

`
const StyledList = styled.ul `
font-size:2rem;
color:white;
li{
  margin:2%;
  background-color:black;
  border: 2px solid black;}`


  return (
  <div>
    <h1>Welcome to Rent my Tech!</h1>
    <SeperateCDforms>
          <CreatePostForm />
          <EditPostForm/>
    </SeperateCDforms>
    <StyledList>
    {items !== 0 && items.map(item => <Item key = {item.item_id} item = {item} activeId = {activeId} setActiveId = {setActiveId}/>)}
    </StyledList>
    <Switch>
      <Route
        path='/create-post'
        render={props => <CreatePostForm {...props} addPost={addPost} />}>
      </Route>
      <Route path='/items/edit/:id'>
        <EditPostForm/>
      </Route>
    </Switch>
  </div>)
}