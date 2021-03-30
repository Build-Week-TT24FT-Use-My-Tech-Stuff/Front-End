import React from 'react';



export default function CreatePostForm(props) {
    const {values, errors, submit, change} = props;

    return(

        <form onSubmit={submit} className='new-post'>
            <h3>Post an Item for Rent</h3>

            <div className='errors'>
                <div>{errors}</div>
            </div>

            <label>Item:
                <input name='item-name' type='text' value={values} onChange={change} />
            </label>

            <label>Item Description:
                <input name='description' type='text' value={values} onChange={change} />
            </label>

            <label>Price:
                <input name='price' type='text' value={values} onChange={change} />
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

            <button>Post Item</button>
        </form >
    )

}