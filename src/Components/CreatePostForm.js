import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';
import FormTheme from '../Themes/Theme'

export default function CreatePostForm(props) {
    const { errors } = props;
    const {push} = useHistory;

    const [newPost, setNewPost] = useState({
      item_id: '',
      item_name: '',
      item_description: '',
      item_price: 0,
      rentDuration: false
    });

    const handleChange = (e) => {
      setNewPost({
        ...newPost,
        [e.target.name]: e.target.value
      })
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const id = uuid();
      newPost['id'] = id;
      axios.post('https://tt-24-use-my-tech-stuff.herokuapp.com/api/items/item', newPost)
        .then(res => {
          console.log('res', res);
          props.addPost(res.data);
          push('/items');
        })
        .catch(err => {
          console.log(err);
        })
    }

    const { item_name, item_description, item_price, rentDuration } = newPost;

    return(

        <FormTheme onSubmit={handleSubmit} className='new-post'>
            <h3>Post an Item for Rent</h3>
            <div className='errors'>
                <div>{errors}</div>
            </div>
            <label>Item:
                <input name='item-name' type='text' value={item_name || ''} onChange={handleChange} />
            </label>
            <label>Item Description:
                <input name='description' type='text' value={item_description || ''} onChange={handleChange} />
            </label>
            <label>Price:
                <input name='price' type='text' value={item_price || 0} onChange={handleChange} />
            </label>
            <label>Rent Duration:
                <select onChange={handleChange} value={rentDuration || false} name="duration">
                    <option value="">- Select an option -</option>
                    <option value={"1 week"}>1 week</option>
                    <option value={"2 weeks"}>2 weeks</option>
                    <option value={"3 weeks"}>3 weeks</option>
                    <option value={"4 weeks"}>4 weeks</option>
                </select>
            </label>
            <button>Post Item</button>
        </FormTheme >
    )
}