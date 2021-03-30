import React from 'react'
import CreatePostForm from './CreatePostForm';
import EditPostForm from './EditPostForm';

export default function HomePage() {
    return (
    <div>
      <h2>Home Page</h2>
      <CreatePostForm/>
      <EditPostForm/>
    </div>)
  }