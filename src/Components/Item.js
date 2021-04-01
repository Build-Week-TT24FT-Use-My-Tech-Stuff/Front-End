export default function Item(props) {
    return (
      <li>
        <div>
            {props.name}
        </div>
        <div>
            {props.description}
            {props.price}
        </div>
        <div className="btn-group">
          <button type="button">
            Edit {props.name}
          </button>
          <button type="button" >
            Delete {props.name}
          </button>
        </div>
      </li>
    );
  }