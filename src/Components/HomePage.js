import React from 'react'
import CreatePostForm from './CreatePostForm';
import EditPostForm from './EditPostForm';
import styled from 'styled-components'

const SeperateCDforms = styled.div`
  display: flexbox;
  flex-direction: row;
	margin: 0 auto;
  display: in-line;
`


export default function HomePage() {
    return (
      <div>
        <h1>Welcome to Rent my Tech!</h1>
          <SeperateCDforms>
            <CreatePostForm/>
            <EditPostForm/>
          </SeperateCDforms>
      </div>
        
      

    )
  }