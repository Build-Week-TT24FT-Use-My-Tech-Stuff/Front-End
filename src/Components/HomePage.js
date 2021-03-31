import React, { useState, useEffect} from 'react'
import { Route, Switch, Redirect } from "react-router-dom";

import axios from 'axios';

import CreatePostForm from './CreatePostForm';
import EditPostForm from './EditPostForm';

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

    return (
    <div>
      <h2>Home Page</h2>
      <ul>

      </ul>
      <CreatePostForm/>
      <EditPostForm/>
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