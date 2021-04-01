import React, { useState } from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth.js';
import FormTheme from '../Themes/Theme'

export default function EditPostForm(props) {

    const {values, errors, setActiveId} = props;
    const [post, setPost] = useState(values);

    const change = (e) => {
        setPost({
          ...post,
          [e.target.name]: e.target.value
        })
      };

      const submit = e => {
		e.preventDefault();
          const changedPost = {
            ...post,
            'item_price': Number.parseInt(post.item_price, 10)
          };
          console.log(post.item_price);
		axiosWithAuth().put(`/items/item/${values.item_id}`, changedPost)
		.then(res => {
			console.log(res);
            setActiveId(-1);
		})
		.catch(error => {
			console.log(error);
            console.log(changedPost);
		})
	};

    const cancelEdit = e => {
        e.preventDefault();
        setActiveId(-1);
    }


if(values){

return (

    <FormTheme>
        <form className='new-post'>

        <h3>Edit your Post</h3>

        <div className='errors'>
            <div>{errors}</div>
        </div>

        <label>Item:
            <input name='item_name' type='text' value={post.item_name} onChange={change} />
        </label>

        <label>Item Description:
            <input name='item_description' type='text' value={post.item_description} onChange={change} />
        </label>

        <label>Price:
            <input name='item_price' type='number' value={post.item_price} onChange={change} />
        </label>

        <label>Rent Duration:
            <select onChange={change} value={values} name="duration">
                <option value="">- Select an option -</option>
               <option value={"1 week"}>1 week</option>
               <option value={"2 weeks"}>2 weeks</option>
               <option value={"3 weeks"}>3 weeks</option>
               <option value={"4 weeks"}>4 weeks</option>
            </select>
        </label>

        <button onClick = {submit}>Edit Post</button>
        <button onClick = {cancelEdit}>Cancel</button>
        </form >
    </FormTheme >
)}
else
return(
    <div></div>
)
}

