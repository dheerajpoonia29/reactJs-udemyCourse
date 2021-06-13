import User from "./demo";
import Card from './card';

import './list-user.css'

let ListUser = (props) => {
  const listItems = props.all_user.map((ele) =>
    <User id={ele.id} name={ele.name} />
  );
  return <Card className="card-background">{listItems}</Card>;
};

export default ListUser;
