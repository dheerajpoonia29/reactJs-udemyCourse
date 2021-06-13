import "./card.css";

let Card = (props) => {
const classes = "card "+props.className;
  return (
    <div className={classes}>
      <div className="container">
        <p>User Card</p>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
