import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth.js';
import FormTheme from '../Themes/Theme'

export default function CreatePostForm(props) {
    const { errors } = props;
    const {push} = useHistory;

    const [newPost, setNewPost] = useState({
      item_description: '',
      item_name: '',
      item_price: 0,
    });

    const handleChange = (e) => {
      setNewPost({
        ...newPost,
        [e.target.name]: e.target.value
      })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const createPost = {
        ...newPost,
        'item_price': Number.parseInt(newPost.item_price, 10)
      };
      axiosWithAuth().post('/items/item', createPost)
        .then(res => {
          console.log('res', res);
          props.addPost(res.data);
          push('/items');
        })
        .catch(err => {
          console.log(err.response);
          console.log(createPost)
        })
    }

    const { item_name, item_description, item_price, rentDuration } = newPost;

    return(

        <FormTheme>
          <form onSubmit={handleSubmit} className='new-post'>
            <h3>Post an Item for Rent</h3>
            <div className='errors'>
                <div>{errors}</div>
            </div>
            <label>Item:
                <input name='item_name' type='text' value={item_name || ''} onChange={handleChange} />
            </label>
            <label>Item Description:
                <textarea  name='item_description' type='text' value={item_description || ''} onChange={handleChange} />
            </label>
            <label>Price:
                <input name='item_price' type='number' value={item_price || 0} onChange={handleChange} />
            </label>
            <label>Rent Duration:
                <select onChange={handleChange} value={rentDuration || false} name="rentDuration">
                    <option value="">- Select an option -</option>
                    <option value={"1 week"}>1 week</option>
                    <option value={"2 weeks"}>2 weeks</option>
                    <option value={"3 weeks"}>3 weeks</option>
                    <option value={"4 weeks"}>4 weeks</option>
                </select>
            </label>
            <button>Post Item</button>
            </form>
        </FormTheme >
    )
}