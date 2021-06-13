import {useState} from 'react';
import Card from "./card";

import "./user.css";

let User = (props) => {
  const [name, setName] = useState(props.all_user);

  const clickHandler = () =>{
    let input_name = document.getElementById('name').value();
    console.log('>>> ', input_name)
  }

  return (
    <Card>
      <p className="text"> User {props.id} </p>
      <p> Name {props.name}</p>
      <input type="text" id="name" />
      <button
        onClick={clickHandler}
      >
        update name
      </button>
    </Card>
  );
};

export default User;
