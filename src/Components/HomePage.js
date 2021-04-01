import React, { useState, useEffect} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import CreatePostForm from './CreatePostForm';
import EditPostForm from './EditPostForm';
import styled from 'styled-components'

export default function HomePage() {
  const [items, setItems] = useState([]);

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

  return (
  <div>
    <h1>Welcome to Rent my Tech!</h1>
    <ul>

    </ul>
    <SeperateCDforms>
          <CreatePostForm />
          <EditPostForm/>
    </SeperateCDforms>
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