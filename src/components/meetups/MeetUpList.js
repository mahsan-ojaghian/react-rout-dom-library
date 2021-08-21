const MeetUpItem = (props) => {
  return (
    <li>
      <div>
        <img src={props.img} alt="item" />
      </div>
      <div>
        <h3>{props.last_name}</h3>
        <h5>{props.email}</h5>
        <p>{props.gender}</p>
      </div>
      <div>
        <button>to favorite</button>
      </div>
    </li>
  );
};
export default MeetUpItem;
